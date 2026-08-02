# 🚀 Plan d'action : refonte landing Scaly

> Document vivant. Décisions 🤖 = mes arbitrages sur ce qu'Amine m'a délégué.
>
> Statut global : **🔨 En cours sur la branche `refonte-landing`**

---

## 1. Synthèse du cadrage

**Le projet.** Scaly est un vrai SaaS d'upscaling d'images par IA avec de vrais clients : la landing doit vendre. Cible large (créatifs, particuliers, e-commerçants). La connexion à l'API d'upscale ne fonctionne plus, donc la démo live du hero n'a plus de valeur : le hero est refondu de zéro en purement visuel.

**Décisions actées par Amine :**

| Sujet | Décision |
|---|---|
| Nature | Vrai SaaS, vrais clients, la landing doit être vendeuse |
| Cible | Large : créatifs, particuliers, e-commerçants |
| Ton | Vouvoiement (conservé) |
| Hero | Refonte totale, quelque chose de complètement différent |
| Démo live | API morte, on ne s'appuie plus dessus |
| DA | **Galerie éditoriale très épurée**, fonds clairs, couleurs conservées (bleu `#5199ec` + blanc) |
| Typo | Caractère fort |
| Animations | Très riches : GSAP + Lenis + ce qu'il faut |
| Idées thème | Toutes retenues : flou→net au scroll, sliders auto-animés, zoom détail, grille de pixels, compteurs, marquee d'images |
| Avis | Réécrits en crédibles |
| Pricing | Grille conservée (0€ / 9€ / 49€), copy améliorée si plus crédible |
| FAQ | Réécrite en mieux |
| Langue | FR only |
| Cursor/grain/reste | Carte blanche |

**Mes arbitrages 🤖 :**

- **Concept DA : « La preuve par l'image. »** Galerie éditoriale : l'image est l'œuvre, le texte est le cartel. Beaucoup de blanc, images en très grand format, légendes techniques façon catalogue d'exposition (« fig. 01 — 512×512 → 2048×2048 »), filets fins, numérotation des sections. Le bleu `#5199ec` réservé aux liens, CTA et annotations techniques : sur une page très blanche, il devient précieux.
- **Typo** : **Instrument Serif** (display, caractère fort, gratuit) pour les titres en très grand + **Instrument Sans** pour le corps. Couple cohérent, editorial, loin du Inter-partout.
- **Curseur custom** : oui mais sobre : un point bleu qui devient "◉ voir" sur les images. **Grain** : non, ça salirait le blanc galerie. **Textures** : filets et légendes suffisent.
- **Scope** : landing + header/footer. Les pages register/login héritent du header refondu mais ne sont pas redessinées (vrai SaaS : on ne casse pas le funnel).
- **Pricing** : mêmes prix, mais libellés plus vendeurs et plan 9€ marqué "recommandé".
- **Stack anim** : GSAP + ScrollTrigger + SplitText + Lenis (comme dreamlocation). framer-motion reste pour l'existant hors landing.
- **Assets** : `landscape.webp` + `landscape-pixelized.webp` (la paire parfaite pour flou→net), `example-video.mp4`, logo existant. Je complète avec des images libres de droit si besoin (Unsplash source locale).

## 2. Architecture de la landing 🤖

| # | Section | Contenu | Animation clé |
|---|---|---|---|
| 1 | **Header** | Logo, nav fine, CTA "Essayer gratuitement" | Fine, fixe, fond blanc translucide |
| 2 | **Hero « l'œuvre »** | Titre serif XXL « Vos images méritent chaque pixel. », l'image `landscape` encadrée comme une œuvre avec cartel technique, qui passe de pixelisée à nette | Révélation pixelisé→net + SplitText + cartel qui s'écrit |
| 3 | **Marquee galerie** | Bandeau d'images défilantes avec légendes | Défilement lié au scroll |
| 4 | **Diptyque avant/après** | Slider comparaison plein format, cartel | Slider auto-animé à l'entrée du viewport |
| 5 | **Zoom détail** (pinnée) | Une image dans laquelle on plonge au scroll : « Le grain devient détail. » | Pin + scale progressif + légende qui change |
| 6 | **Comment ça marche** | 3 étapes numérotées éditorial | Reveals ligne par ligne |
| 7 | **Cas d'usage** | 3 salles : Créatifs / E-commerce / Souvenirs | Reveal alterné image/texte |
| 8 | **Chiffres** | Résolution ×4, images traitées, confidentialité | Compteurs |
| 9 | **Pricing** | 0€ / 9€ (recommandé) / 49€, copy retravaillée | Reveal + hover soigné |
| 10 | **Avis** | 6 avis réécrits crédibles (métier, usage concret) | Reveal en quinconce |
| 11 | **FAQ** | Réécrite : confidentialité, formats, crédits, usage commercial | Accordéon existant restylé |
| 12 | **CTA final + Footer** | « Commencez par une image. » + footer éditorial | SplitText |

## 3. Copywriting 🤖

- **Hero** : « Vos images méritent chaque pixel. » + sous-titre : « Scaly agrandit et restaure vos images par IA. Jusqu'à 4× la résolution d'origine, sans perte, sans filigrane, prêtes pour l'impression comme pour la vente. »
- CTA principal : « Essayer gratuitement » (10 images offertes)
- Voix : vouvoiement, phrases courtes, la preuve avant la promesse, vocabulaire de l'image (tirage, détail, résolution, grain)

## 4. Phases

### Phase 0 : Fondations ⬜
- [ ] Next 14.2.3 → 15.5+ (CVE Vercel) + build OK
- [ ] GSAP + @gsap/react + Lenis installés
- [ ] Typos Instrument Serif/Sans via next/font
- [ ] Nettoyage : classes main-color-* rationalisées

### Phase 1 : Copy & data ⬜
- [ ] `content/copy.ts` : tout le texte (hero, sections, 6 avis, FAQ, pricing)

### Phase 2 : Layout ⬜
- [ ] Header + footer refondus
- [ ] Les 12 sections en statique (grille éditoriale, cartels, filets)

### Phase 3 : Animations ⬜
- [ ] Lenis + curseur custom
- [ ] Hero pixelisé→net, marquee, slider auto, zoom pinné, compteurs, reveals SplitText
- [ ] matchMedia mobile allégé + reduced-motion

### Phase 4 : QA ⬜
- [ ] Screenshots Playwright de chaque section
- [ ] Build prod + revue Amine → push main sur GO

## 5. Journal

| Date | Événement |
|---|---|
| 2026-08-02 | Cadrage répondu, branche `refonte-landing`, plan rédigé |
