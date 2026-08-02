# 🎯 Cadrage refonte Scaly : landing page

> Même méthode que dreamlocation et health-crm. Objectif : une DA unique qui colle au thème (l'image, la résolution, le détail), zéro template IA générique. Tes couleurs (bleu `#5199ec` + blanc) sont conservées.
>
> Réponds sous chaque question, les ⭐ sont bloquantes. "Tu décides" = je tranche.

---

## 1. Le produit & la cible

- ⭐ **1.1** Scaly aujourd'hui : vrai SaaS avec de vrais utilisateurs payants, projet en pause qu'on ressuscite, ou pièce de portfolio (comme health-crm) ? Ça change le niveau de promesse qu'on peut écrire.
- ⭐ **1.2** Le client type, c'est qui en priorité ?
  - a) Photographes / créatifs (agrandir des tirages, restaurer)
  - b) E-commerçants (photos produit nettes)
  - c) Particuliers (vieilles photos de famille, souvenirs)
  - d) Développeurs / entreprises via API
- **1.3** Tutoiement ou vouvoiement ? (La landing actuelle vouvoie.)
- **1.4** Le pricing actuel affiché est-il le vrai ? On garde les mêmes plans ou tu veux que je propose une grille plus crédible ?
- **1.5** Les avis clients (composant "FakeReviews" 😄) : je les réécris en plus crédibles avec des cas d'usage concrets, comme sur dreamlocation ?

## 2. La démo live du hero (question clé de ce projet)

- ⭐ **2.1** Le hero actuel contient un vrai uploader qui consomme tes crédits API (0,2 crédit/image sur tes 20). Pour la refonte :
  - a) On garde la démo fonctionnelle en hero (c'est LE différenciateur, mais ça coûte tes crédits)
  - b) On la remplace par une démo visuelle simulée (slider avant/après spectaculaire, zéro coût)
  - c) On garde la démo mais déplacée plus bas, le hero devient purement visuel
- **2.2** Tu as encore des crédits sur l'API d'upscale ? L'API répond toujours ?
- **2.3** Tu as des vraies paires d'images avant/après réussies qu'on peut mettre en avant ? (Sinon je prépare des exemples visuels moi-même.)

## 3. Direction artistique

- ⭐ **3.1** Le thème du produit c'est l'image, le pixel, le détail révélé. Trois directions possibles qui collent au sujet, choisis :
  - a) **Labo photo / chambre noire** : sombre, précis, vocabulaire du tirage argentique revisité IA, l'image qui se révèle comme dans un bain de développement
  - b) **Loupe & pixels** : clair, technique et joueur, grilles de pixels qui se reconstruisent, zooms en plein écran, curseurs de comparaison partout, le détail comme héros
  - c) **Galerie éditoriale** : très épuré, l'image en grand format traitée comme dans une galerie d'art, typographie fine, la preuve par l'image plutôt que par le discours
- ⭐ **3.2** Fond clair (actuel), sombre, ou alternance ? (Note : les avant/après ressortent souvent mieux sur fond sombre.)
- **3.3** Le bleu `#5199ec` reste l'accent unique, ou tu acceptes des déclinaisons (bleu profond, bleu glacier) tant qu'on reste dans ta famille de bleus ?
- **3.4** Typographie : caractère fort (display marqué) ou sobre et technique ? Une typo que tu aimes ?
- **3.5** Références : 2-3 sites que tu trouves réussis, même hors sujet ? (Si tu n'en as pas : "tu décides".)
- **3.6** Curseur custom, grain, textures : oui / non / tu décides ?

## 4. Animations

- ⭐ **4.1** Intensité :
  - a) Riche (niveau dreamlocation : reveals partout, pinning, effets de zoom au scroll)
  - b) Modérée (reveals élégants, sliders animés, micro-interactions)
  - c) Minimale
- **4.2** GSAP + Lenis comme sur dreamlocation, ou on reste sur framer-motion (déjà installé) ? Tu décides ?
- **4.3** Idées spécifiques au thème, coche ce qui te parle :
  - [ ] Image qui passe de floue/pixelisée à nette pendant le scroll (la promesse du produit en animation)
  - [ ] Sliders avant/après qui s'animent seuls à l'entrée dans le viewport
  - [ ] Zoom progressif dans une image au scroll pour montrer le niveau de détail
  - [ ] Grille de pixels qui se reconstruit (hero ou transitions)
  - [ ] Compteurs (images traitées, résolution multipliée…)
  - [ ] Marquee d'images défilantes
- **4.4** `prefers-reduced-motion` : je pose le garde-fou comme d'habitude, ok ?

## 5. Structure & contenu de la landing

- ⭐ **5.1** Sections actuelles : Hero (démo) → Comparaison → Exemples → Features → Pricing → Reviews → FAQ → Footer. Qu'est-ce qu'on garde, qu'est-ce qu'on ajoute ? Idées :
  - [ ] Section "cas d'usage" par persona (photo produit, restauration, impression grand format)
  - [ ] Section chiffres / social proof (images traitées, note, x4 de résolution)
  - [ ] Section "comment ça marche" en 3 étapes
  - [ ] Section API / intégration (si cible dev)
  - [ ] Bandeau confidentialité (images supprimées après traitement, usage commercial inclus)
- **5.2** Le wording du hero actuel ("Libérez le plein potentiel de vos images grâce à l'IA") : je propose des accroches plus fortes ?
- **5.3** La FAQ actuelle : contenu à garder ou je réécris tout ?
- **5.4** Langue : FR only comme actuellement ?

## 6. Pages & scope

- ⭐ **6.1** Scope : uniquement la landing, ou aussi les pages register/login (souvent moches à côté d'une belle landing) ?
- **6.2** Header/footer : refonte complète incluse j'imagine ?

## 7. Technique

- **7.1** Next 14.2.3 → il faudra passer en 15.5+ pour que Vercel accepte de déployer (même CVE que les autres projets). Je le fais en Phase 0 ? (Risque faible, App Router déjà en place.)
- **7.2** Mobile : soigné mais desktop d'abord, ou vraiment critique ?
- **7.3** Perf : priorité vitesse comme d'habitude ?

## 8. Process

- **8.1** Branche à part + validation avant push main, comme les autres ? (Je pars là-dessus par défaut.)
- **8.2** Deadline ou contexte ? (portfolio, relance du produit, candidatures…)

---

*Réponds dans le fichier ou en vrac ici. Les ⭐ d'abord.*
