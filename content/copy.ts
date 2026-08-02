/**
 * Copywriting de la landing. Ton : vouvoiement, la preuve avant la promesse,
 * vocabulaire de l'image (tirage, détail, résolution, grain).
 */

export const copy = {
  nav: {
    links: [
      { label: "La preuve", href: "#preuve" },
      { label: "Comment ça marche", href: "#methode" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "FAQ", href: "#faq" },
    ],
    login: "Connexion",
    cta: "Essayer gratuitement",
  },

  hero: {
    kicker: "fig. 01 · agrandissement par ia",
    titleLines: ["Vos images méritent", "chaque pixel."],
    subtitle:
      "Scaly agrandit et restaure vos images par IA : jusqu'à 4× la résolution d'origine, sans perte visible, prêtes pour l'impression comme pour la vente.",
    cta: "Essayer gratuitement",
    ctaNote: "10 images offertes · sans carte bancaire",
    cartel: "512 × 512 → 2 048 × 2 048 · détail reconstruit par IA",
  },

  marquee: {
    caption: "galerie · images traitées par scaly",
    items: [
      { src: "/gallery/g1015.jpg", label: "paysage · ×4" },
      { src: "/gallery/g1025.jpg", label: "portrait animalier · ×4" },
      { src: "/gallery/g1080.jpg", label: "photo produit · ×2" },
      { src: "/gallery/g1043.jpg", label: "architecture · ×4" },
      { src: "/gallery/g292.jpg", label: "nature morte · ×2" },
      { src: "/gallery/g429.jpg", label: "photo de rue · ×4" },
    ],
  },

  diptych: {
    number: "02",
    title: "Avant. Après.",
    body: "Aucune retouche manuelle : l'image de gauche est l'originale, celle de droite est sortie de Scaly telle quelle. Déplacez le curseur, jugez sur pièce.",
    cartel: "fig. 02 · même fichier, résolution ×4",
  },

  zoom: {
    number: "03",
    title: "Le grain devient détail.",
    captions: [
      "vue d'ensemble · 100 %",
      "zoom · 200 % — les contours restent nets",
      "zoom · 400 % — le détail est reconstruit, pas inventé",
    ],
  },

  how: {
    number: "04",
    title: "Trois gestes, pas plus.",
    steps: [
      {
        title: "Déposez",
        body: "Glissez votre image, JPG, PNG ou WebP. Elle est chiffrée pendant le transfert et n'est jamais partagée.",
      },
      {
        title: "Choisissez",
        body: "×2 ou ×4, restauration des visages, réduction du bruit : vous décidez, l'IA exécute.",
      },
      {
        title: "Téléchargez",
        body: "Votre image en pleine résolution, sans filigrane, utilisable commercialement. L'originale est supprimée de nos serveurs.",
      },
    ],
  },

  useCases: {
    number: "05",
    title: "Pensé pour ceux qui vivent de l'image.",
    cases: [
      {
        kicker: "créatifs & photographes",
        title: "Imprimez en grand",
        body: "Un tirage 60×90 à partir d'un fichier de 2 Mpx ? C'est exactement le travail de Scaly : agrandir sans dénaturer, préserver le grain là où il fait la photo.",
        img: "/gallery/g1015.jpg",
      },
      {
        kicker: "e-commerce",
        title: "Des fiches produit qui vendent",
        body: "Les photos fournisseur trop petites deviennent des visuels nets, zoomables, aux standards des marketplaces. Par lot, en quelques minutes.",
        img: "/gallery/g1080.jpg",
      },
      {
        kicker: "souvenirs",
        title: "Ressuscitez vos archives",
        body: "Scans de vieilles photos, images floues d'anciens téléphones : Scaly restaure les visages et les détails que vous pensiez perdus.",
        img: "/gallery/g1025.jpg",
      },
    ],
  },

  stats: {
    number: "06",
    items: [
      { value: 4, prefix: "×", label: "résolution maximale" },
      { value: 380000, suffix: "+", label: "images traitées" },
      { value: 30, suffix: " s", label: "par image en moyenne" },
      { value: 0, suffix: "", label: "image conservée après traitement" },
    ],
  },

  pricing: {
    number: "07",
    title: "Commencez gratuitement.",
    subtitle: "Passez au plan supérieur quand vos images le demandent.",
    plans: [
      {
        name: "Découverte",
        price: "0 €",
        per: "pour toujours",
        desc: "Pour juger sur pièce.",
        features: [
          "10 images par mois",
          "Agrandissement ×2",
          "Export JPG et PNG",
          "Usage commercial inclus",
        ],
        cta: "Créer un compte",
      },
      {
        name: "Créateur",
        price: "9 €",
        per: "par mois",
        desc: "Pour un usage régulier.",
        popular: true,
        features: [
          "200 images par mois",
          "Agrandissement ×2 et ×4",
          "Restauration des visages",
          "Traitement par lot",
          "File prioritaire",
        ],
        cta: "Choisir Créateur",
      },
      {
        name: "Studio",
        price: "49 €",
        per: "par mois",
        desc: "Pour les équipes et gros volumes.",
        features: [
          "Images illimitées",
          "Tout Créateur, plus :",
          "Accès API",
          "Presets d'équipe partagés",
          "Support prioritaire",
        ],
        cta: "Choisir Studio",
      },
    ],
  },

  reviews: {
    number: "08",
    title: "Ils ont jugé sur pièce.",
    items: [
      {
        text: "J'ai imprimé un 80×120 pour une expo à partir d'un fichier que je pensais bon pour Instagram et rien d'autre. Le tireur n'a pas cru que c'était de l'upscale.",
        author: "Claire D.",
        role: "Photographe indépendante",
      },
      {
        text: "300 photos fournisseur passées en ×2 en une soirée. Mes fiches Amazon ont enfin le zoom, et mon taux de retour n'a pas bougé : c'est bien le produit qu'on voit.",
        author: "Mehdi R.",
        role: "E-commerçant",
      },
      {
        text: "Le scan de la photo de mariage de mes grands-parents, de 1958. Les visages sont revenus. On l'a réimprimée pour leurs 68 ans de mariage.",
        author: "Sophie L.",
        role: "Particulière",
      },
      {
        text: "L'API tourne dans notre pipeline depuis six mois pour les vignettes clients. Stable, rapide, et la doc tient sur une page, ce qui est un compliment.",
        author: "Julien T.",
        role: "Lead dev, agence web",
      },
      {
        text: "Je restaure des affiches de cinéma anciennes. L'option réduction de bruit sans lissage excessif fait mieux que mon ancien workflow Photoshop de 40 minutes.",
        author: "Antoine B.",
        role: "Graphiste print",
      },
      {
        text: "Testé avec les 10 images gratuites, abonnée dans l'heure. Les photos de mes créations bijoux sont enfin à la hauteur du travail dessus.",
        author: "Nadia K.",
        role: "Créatrice, boutique Etsy",
      },
    ],
  },

  faq: {
    number: "09",
    title: "Les questions qu'on nous pose.",
    items: [
      {
        q: "Que deviennent mes images après traitement ?",
        a: "Elles sont supprimées de nos serveurs après le traitement. Nous ne les utilisons ni pour entraîner des modèles, ni pour quoi que ce soit d'autre : vous déposez, vous téléchargez, il ne reste rien.",
      },
      {
        q: "Puis-je utiliser les images commercialement ?",
        a: "Oui, sur tous les plans, y compris le gratuit. Les images agrandies vous appartiennent, sans filigrane et sans redevance.",
      },
      {
        q: "Quels formats et quelles tailles sont acceptés ?",
        a: "JPG, PNG et WebP, jusqu'à 50 Mo par fichier. Le résultat est disponible en JPG ou PNG, jusqu'à 4× la résolution d'origine.",
      },
      {
        q: "L'agrandissement invente-t-il des détails ?",
        a: "L'IA reconstruit les détails plausibles à partir de l'image d'origine : contours, textures, visages. Elle n'ajoute pas d'éléments qui n'existaient pas, elle rend nets ceux qui existaient.",
      },
      {
        q: "Que se passe-t-il si le résultat ne me convient pas ?",
        a: "Une image traitée qui ne vous convient pas n'est pas décomptée : signalez-la depuis votre galerie et le crédit vous est rendu.",
      },
      {
        q: "Puis-je annuler mon abonnement quand je veux ?",
        a: "Oui, en deux clics depuis votre compte. Vous gardez l'accès jusqu'à la fin de la période payée, et vos images téléchargées restent à vous.",
      },
    ],
  },

  finalCta: {
    title: "Commencez par une image.",
    body: "10 images offertes, sans carte bancaire. La première impression se fait en 30 secondes.",
    cta: "Essayer gratuitement",
  },

  footer: {
    baseline: "L'image, en grand.",
    legal: "© Scaly. Tous droits réservés.",
    columns: [
      {
        title: "Produit",
        links: [
          { label: "La preuve", href: "#preuve" },
          { label: "Tarifs", href: "#tarifs" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Compte",
        links: [
          { label: "Connexion", href: "/users/login" },
          { label: "Créer un compte", href: "/users/register" },
        ],
      },
    ],
  },
} as const;
