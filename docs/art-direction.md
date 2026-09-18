# Direction artistique et fichiers visuels

L'expérience utilise les images déposées par Jessem dans `public/assets/`.
Les originaux sont conservés ; les fichiers WebP de `public/assets/cinematic/`
sont des dérivés destinés au navigateur. Aucun décor généré en remplacement
n'est intégré au site.

## Correspondance des fichiers

| Source fournie | Fichier servi | Usage |
| --- | --- | --- |
| `vue large extérieure.png` | `exterior.webp` / `exterior-mobile.webp` | Plaine et approche de la porte |
| `Shiganshina.png` | `city.webp` / `city-mobile.webp` | Traversée de la ville |
| `image de fin.png` | `finale.webp` / `finale-mobile.webp` | Dernier panorama et contact |
| `overlay de brouillard.png` | `fog.webp` | Brume au premier plan et transitions |
| `texture overlay légère.png` | `texture.webp` | Texture lumineuse discrète |
| `walk_1.png` à `walk_4.png` | `walk-1.webp` à `walk-4.webp` | Cycle de marche piloté par le déplacement |
| `Eren.png` | `eren-idle.webp` | Pose immobile disponible |

Les paysages extérieur et final mesurent 1672 × 941 pixels. Le panorama urbain
mesure 1280 × 720 pixels. Les versions mobiles utilisent un recadrage portrait
central, limité à 640 × 1138 pixels sans agrandissement, pour conserver les détails
verticaux sur un téléphone. Les grandes versions gardent la résolution native.

## Composition

La porte extérieure se trouve au centre horizontal, à environ la moitié de la
hauteur de l'image. Elle sert de point de fuite pendant l'approche. La perspective
de la ville converge légèrement à gauche du centre, vers 47 % de la largeur.
Le bas de ce panorama contient déjà le chemin de ronde, deux petites silhouettes
et des canons ; le cadrage et les voiles de la scène peuvent atténuer ce bord.
Le dernier paysage ouvre la vue vers un coucher de soleil situé à droite.

Les corrections de couleur, l'assombrissement destiné à la lecture et les
transitions sont définis dans le code de la scène. Les dérivés conservent la
couleurs des sources, ce qui permet de régler cette direction
artistique sans réexporter les images.

## Transparence et animation

Les quatre poses et la pose immobile partagent une toile source de 941 × 1672
pixels. Toutes sont redimensionnées avec le même facteur vers une largeur de
540 pixels. Les marges transparentes sont conservées : aucun recadrage individuel
ne déplace les pieds ou le corps entre les images du cycle. Le brouillard et la
texture conservent également leur canal alpha.

## Reproduire les exports

Après installation des dépendances, exécuter :

```sh
node scripts/optimize-cinematic-assets.mjs
```

Le script utilise Sharp, ne modifie jamais les PNG source et affiche les dimensions,
la présence de transparence et le poids des fichiers produits. Les paysages sont
compressés à une qualité WebP de 86 pour les grands écrans et 84 pour les mobiles.
Les personnages utilisent une qualité de 88 et une qualité alpha de 100.

## Provenance

Les illustrations et poses sont celles fournies par l'utilisateur pendant la
session de travail. Le script effectue uniquement une conversion de format et un
redimensionnement déterministes. Il n'effectue aucune retouche générative.
