import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useJourney(scope: Ref<HTMLElement | null>) {
  const progress = ref(0)
  const chapter = ref('00')
  const reducedMotion = ref(false)
  let context: gsap.Context | undefined
  let media: gsap.MatchMedia | undefined
  let observer: ResizeObserver | undefined
  let refreshTimer: ReturnType<typeof setTimeout> | undefined
  let disposed = false
  let mountedRoot: HTMLElement | null = null
  let anchorEvents: AbortController | undefined

  const refresh = () => {
    if (disposed) return
    clearTimeout(refreshTimer)
    refreshTimer = setTimeout(() => { if (!disposed) ScrollTrigger.refresh() }, 120)
  }

  onMounted(() => {
    const root = scope.value
    if (!root) return
    mountedRoot = root

    context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root, start: 'top top', end: 'bottom bottom',
        onUpdate: (self) => { progress.value = self.progress },
        onRefresh: (self) => { progress.value = self.progress },
      })
      const chapters = Array.from(root.querySelectorAll<HTMLElement>('[data-chapter]'))
      chapters.forEach((section) => {
        ScrollTrigger.create({
          trigger: section, start: 'top 50%', end: 'bottom 50%',
          onToggle: (self) => { if (self.isActive) chapter.value = section.dataset.chapter ?? '00' },
          onEnterBack: () => { chapter.value = section.dataset.chapter ?? '00' },
        })
      })

      media = gsap.matchMedia()
      media.add({ desktop: '(min-width: 900px)', reduce: '(prefers-reduced-motion: reduce)', all: '(min-width: 0px)' }, (match) => {
        const reduce = Boolean(match.conditions?.reduce)
        const desktop = Boolean(match.conditions?.desktop)
        reducedMotion.value = reduce

        if (!reduce) {
          gsap.to('.hero-content, .hero-bottom, .hero-side-note', {
            y: desktop ? -55 : -20, autoAlpha: 0, ease: 'none',
            scrollTrigger: { trigger: '#about', start: '15% top', end: '85% top', scrub: true },
          })
          gsap.to('.environment-exterior', {
            scale: desktop ? 1.65 : 1.15, transformOrigin: '50% 48%', ease: 'none',
            scrollTrigger: { trigger: '#passage', start: 'top bottom', end: 'bottom top', scrub: .6 },
          })
        }

        const entry = gsap.timeline({ scrollTrigger: { trigger: '#passage', start: 'top 75%', end: 'bottom 80%', scrub: reduce ? true : .5 } })
        entry.to('.environment-city', { opacity: 1, duration: 1.3, ease: 'sine.inOut' }, .1)
          .to('.environment-shade', { opacity: .84, duration: 1.5, ease: 'none' }, 0)
        if (!reduce) {
          entry.fromTo('.environment-city', { scale: desktop ? 1.16 : 1.03 }, { scale: 1, duration: 1.6, ease: 'none' }, 0)
            .to('.environment-fog', { opacity: .48, duration: .55 }, 0)
            .to('.environment-fog', { opacity: 0, xPercent: 6, duration: 1.05 }, .55)
        }

        const finale = gsap.timeline({ scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'top 5%', scrub: reduce ? true : .7 } })
        finale.to('.environment-finale', { opacity: 1, duration: 1, ease: 'sine.inOut' }, 0)
          .fromTo('.environment-shade', { opacity: .84 }, { opacity: .12, duration: 1, immediateRender: false }, 0)
        if (!reduce) {
          finale.fromTo('.environment-finale', { scale: 1.08 }, { scale: 1, duration: 1, immediateRender: false }, 0)
          gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
            gsap.from(element, { y: desktop ? 30 : 14, opacity: 0, duration: .75, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 96%', once: true } })
          })
        }
      })
    }, root)

    root.addEventListener('load', refresh, true)
    root.addEventListener('error', refresh, true)
    root.addEventListener('toggle', refresh, true)
    observer = new ResizeObserver(refresh)
    const main = root.querySelector('main')
    if (main) observer.observe(main)
    const initialAnchor = window.location.hash.slice(1)
    let initialNavigationCancelled = false
    if (initialAnchor) {
      anchorEvents = new AbortController()
      for (const event of ['wheel', 'touchstart', 'pointerdown', 'keydown']) {
        window.addEventListener(event, () => { initialNavigationCancelled = true }, { passive: true, signal: anchorEvents.signal })
      }
    }
    void document.fonts.ready.then(() => {
      anchorEvents?.abort()
      if (disposed) return
      // The browser can resolve a URL fragment before Vue has rendered its target.
      // Restore it after fonts settle, without overriding a user's first scroll.
      if (initialAnchor && !initialNavigationCancelled) {
        ScrollTrigger.refresh()
        document.getElementById(initialAnchor)?.scrollIntoView({ behavior: 'instant', block: 'start' })
        ScrollTrigger.update()
      }
      refresh()
    })
    refresh()
  })

  onUnmounted(() => {
    disposed = true
    clearTimeout(refreshTimer)
    observer?.disconnect()
    anchorEvents?.abort()
    mountedRoot?.removeEventListener('load', refresh, true)
    mountedRoot?.removeEventListener('error', refresh, true)
    mountedRoot?.removeEventListener('toggle', refresh, true)
    mountedRoot = null
    media?.revert()
    context?.revert()
  })

  return { progress, chapter, reducedMotion }
}
