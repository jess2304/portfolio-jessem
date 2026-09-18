export interface ContentLink {
  readonly label: string
  readonly url: string
}

export interface ContentImage {
  readonly src: string
  readonly alt: string
}

export interface Profile {
  readonly name: string
  readonly title: string
  readonly bio: string
  readonly specialties: readonly string[]
  readonly email: string
  readonly phone: string
  readonly phoneHref: string
  readonly links: readonly ContentLink[]
  readonly portrait: ContentImage
  readonly cvUrl?: string
}

export interface Mission {
  readonly id: string
  readonly client?: string
  readonly clientUrl?: string
  readonly description: string
  readonly technologies: readonly string[]
}

export interface Experience {
  readonly id: string
  readonly title: string
  readonly date: string
  readonly company: string
  readonly companyUrl: string
  readonly description: string
  readonly missions: readonly Mission[]
}

export interface Skill {
  readonly name: string
}

export interface SkillGroup {
  readonly id: string
  readonly category: string
  readonly skills: readonly Skill[]
}

export interface Project {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly githubUrl?: string
  readonly demoUrl?: string
  readonly screenshot?: ContentImage
  readonly architecture?: string
  readonly stack?: readonly string[]
}

export interface Education {
  readonly id: string
  readonly degree: string
  readonly institution: string
  readonly subjects: readonly string[]
}

export interface Certification {
  readonly id: string
  readonly name: string
  readonly organizer: string
  readonly date: string
  readonly url: string
}

export interface Publication {
  readonly id: string
  readonly authors: string
  readonly type: string
  readonly title: string
  readonly year: string
  readonly url: string
}

export interface NavigationItem {
  readonly href: string
  readonly label: string
}

export interface PortfolioContent {
  readonly profile: Profile
  readonly experiences: readonly Experience[]
  readonly skillGroups: readonly SkillGroup[]
  readonly projects: readonly Project[]
  readonly education: readonly Education[]
  readonly certifications: readonly Certification[]
  readonly publications: readonly Publication[]
  readonly navigation: readonly NavigationItem[]
}

// A future API or configuration adapter returns the same display-independent model.
export type ContentProvider = () => PortfolioContent | Promise<PortfolioContent>
