![bannerAJ](https://github.com/AmineAffif/scaly/assets/45182137/c70d3f00-070a-43e1-ba7f-d2eeddb844ea)


# Scaly - Améliorez vos images avec l'IA 🚀

Scaly est un SaaS qui utilise l'IA pour améliorer la résolution et la qualité des images, offrant des outils de mise à l'échelle, de traitement par lots et d'édition, tout en garantissant la confidentialité et l'utilisation commerciale sans frais cachés. 🖼️🔍🔐

# Démo 🕹️
Vous pouvez tester l'app avec 10 images de votre galerie sur [scaly-fr.vercel.app](https://scaly-fr.vercel.app/)

(Coût de 0,2 crédit par image étendue pris sur mes 20 crédits)

_Attention à utiliser des images dont le contenu ne serait pas suceptibles d'être bloqué par l'api d'upscale_


https://github-production-user-asset-6210df.s3.amazonaws.com/45182137/340115716-d5e1adc2-f209-4d9c-b7ac-c1d39774f6cf.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240616%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240616T155954Z&X-Amz-Expires=300&X-Amz-Signature=d8218ad0297d7316731d3fd9458b819ab894eaded1babda57307d3636145d5ad&X-Amz-SignedHeaders=host&actor_id=45182137&key_id=0&repo_id=813110514


--------------------------------------------------------

# Pour lancer en local 🏠
## Prérequis 📋

Avant de commencer, assurez-vous d'avoir installé Node.js sur votre machine. Node.js 12.0 ou une version ultérieure est nécessaire pour utiliser Next.js.

## Installation ✨

Pour installer les dépendances du projet, exécutez la commande suivante :

```bash
npm install
```

ou si vous utilisez yarn :

```bash
yarn install
```

## Configuration ⚙️

Vous pouvez configurer votre application en modifiant les variables d'environnement. Créez un fichier `.env.local` à la racine du projet et ajoutez vos variables :

```plaintext
NEXT_PUBLIC_STABILITY_API_KEY=VOTRE_CLÉ_API_ICI
```

Remplacez `VOTRE_CLÉ_API_ICI` par votre propre clé API générée sur [Stability AI](https://platform.stability.ai/account/keys).

## Démarrage du serveur de développement 🖥️

Pour lancer le serveur de développement, exécutez :

```bash
npm run dev
```

ou si vous utilisez yarn :

```bash
yarn dev
```

Votre application sera accessible à l'adresse [http://localhost:3000](http://localhost:3001).

## Structure du projet 🗂️

Voici la structure de base du projet :

- `app/` : Contient les pages de votre application. `app/page.tsx` est la page d'accueil.
- `components/` : Répertoire pour vos composants réutilisables.
- `public/` : Pour les fichiers statiques comme les images.

## Déploiement 🚀

Pour déployer votre application, vous pouvez utiliser Vercel, une plateforme cloud optimisée pour les applications Next.js. Consultez la [documentation officielle de Vercel](https://vercel.com/docs) pour plus d'informations.

## Licence 📜

Ce projet est sous licence MIT. Pour plus d'informations, consultez le fichier `LICENSE`.

---

Créé par [Amine Affif](https://amineaffif.com), développeur full-stack à Paris.
