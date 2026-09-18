const base = import.meta.env.BASE_URL
const asset = (name: string) => `${base}assets/cinematic/${name}`

export const cinematicAssets = {
  heroExterior: asset('exterior.webp'),
  heroMobile: asset('exterior-mobile.webp'),
  shiganshina: asset('city.webp'),
  cityMobile: asset('city-mobile.webp'),
  finale: asset('finale.webp'),
  finaleMobile: asset('finale-mobile.webp'),
  fog: asset('fog.webp'),
  texture: asset('texture.webp'),
  walkFrames: [1, 2, 3, 4].map((frame) => asset(`walk-${frame}.webp`)),
} as const
