# Jessem Ettaghouti — Portfolio cinématique

Une expérience Vue 3 / TypeScript / Vite, animée avec GSAP et ScrollTrigger :
plaine extérieure, passage des murs, parcours dans Shiganshina, puis horizon doré.
Le personnage suit le scroll vertical par une progression horizontale. Les quatre
poses individuelles changent uniquement avec la distance parcourue, dans les deux sens.

## Démarrer

Node.js 22.12+ (ou 20.19+) et npm sont nécessaires.

```sh
npm ci
npm run dev
```

Ouvrir l'URL affichée par Vite, normalement
`http://localhost:5173/portfolio-jessem/`.

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

L'aperçu de production est disponible sur
`http://localhost:4173/portfolio-jessem/`.
Le `base` Vite reste `/portfolio-jessem/`, compatible avec GitHub Pages.
Tous les chemins locaux sont construits à partir de `import.meta.env.BASE_URL`.
Le workflow existant construit et vérifie le projet avant publication lors d'un
push sur `main`. Aucun commit ni déploiement n'est nécessaire pour tester en local.

## Structure

- `src/components/scenes/` : introduction, passage, expériences, compétences,
  projets, archives et contact.
- `src/components/cinematic/` : paysages superposés et personnage.
- `src/composables/useJourney.ts` : progression, chapitres, transitions GSAP,
  variantes responsive et nettoyage des animations/observateurs/listeners.
- `src/config/cinematicAssets.ts` : chemins des décors, overlays et poses.
- `src/services/content.ts` : adaptation centralisée des données existantes.
- `src/types/content.ts` : contrat des données, indépendant de leur source.
- `src/style.css` : thème, typographies locales et styles communs.

Les JSON professionnels restent inchangés. La biographie et les coordonnées sont
centralisées dans le service. Pour passer à une API ou à une configuration externe,
fournir un `ContentProvider` à `loadContent(provider)` et donner son résultat aux
mêmes composants. Aucun backend n'est inclus. Les projets acceptent déjà les
champs facultatifs `screenshot`, `githubUrl`, `demoUrl`, `architecture` et `stack`.
Leurs illustrations actuelles sont des compositions SVG thématiques, pas des
captures des applications. Aucun CV n'était présent : le lien apparaît si
`profile.cvUrl` est renseigné.

## Images et mouvement

Les PNG fournis sont conservés dans `public/assets/`. Le site charge leurs versions
WebP dans `public/assets/cinematic/`. Pour régénérer ces versions après changement :

```sh
npm run assets:optimize
```

Le panorama initial est préchargé selon la largeur de l'écran. La ville et la
scène finale sont chargées à l'approche de leur section. Les quatre poses sont
chargées ensemble pour éviter les clignotements. La brume accompagne l'entrée
dans la ville et la texture est limitée à 3,5 % d'opacité.

Le scroll reste natif. Les grands déplacements sont réduits sur mobile ; avec
`prefers-reduced-motion`, le personnage et les déplacements de caméra sont
désactivés et le contenu reste visible. Les rubriques sont accessibles par des
liens d'ancrage et un menu clavier ; les enseignements des formations s'ouvrent
avec des éléments HTML `details`.

La correspondance et les dimensions des images sont documentées dans
[docs/art-direction.md](docs/art-direction.md).

## Tests navigateur

```sh
npm run test:e2e
```

La configuration utilise Chrome installé sur Windows, sinon Chromium Playwright
(`npx playwright install chromium` si nécessaire). Elle construit le site et lance
l'aperçu de production sur le port 4173. Les scénarios couvrent desktop/mobile,
contenu conservé, navigation clavier, débordements, animation synchronisée au
scroll, archives extensibles, liens directs, images et accessibilité avec axe.
