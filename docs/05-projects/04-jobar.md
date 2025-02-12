---
title: ⚡ Jobar
description: Framework léger pour orchestrer des workflows avec Temporal.io
---

# ⚡ Jobar

<img alt="Logo de Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" />
<img alt="Logo de TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" />
<img alt="Logo de Temporal" src="https://temporal.io/favicon.ico" width="40" />
<img alt="Logo de GitLab" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" width="40" />
<img alt="Logo de GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" />
<img alt="Logo de Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="40" />

🔗 **NPM** : [Jobar sur npmjs.com](https://www.npmjs.com/package/jobar)  
🔗 **GitLab** : [Dépôt GitLab](https://gitlab.com/william-donnette/jobar)  
🔗 **GitHub** : [Dépôt GitHub](https://github.com/william-donnette/jobar)  
🔗 **Exemples d'utilisation** : [GitHub - examples](https://github.com/william-donnette/jobar/tree/main/examples)

---

## Un framework léger pour orchestrer des workflows avec Temporal.io

**Jobar** est une librairie TypeScript que j'ai conçue pour faciliter l'orchestration des workflows avec **Temporal.io**. Elle fournit une interface, ainsi qu'une architecture intuitive pour gérer les tâches, les files d'attente et l'exécution des workflows de manière fluide.

Avec **Jobar**, il est simple d'intégrer un moteur de workflows robuste dans une application Node.js, tout en bénéficiant d'une gestion avancée des logs et de la sécurité des données grâce à des codecs d'encryptage. De plus, elle permet d'exposer les tâches sur des routes HTTP via **Express** et est entièrement testée avec **Mocha**.

## 🛠 Fonctionnalités principales

-   🚀 **Gestion simplifiée des workflows** avec Temporal.io
-   📌 **Création et exécution de tâches** dans des files d'attente dédiées
-   🔒 **Encodage et décodage sécurisé des données** via un codec d'encryption
-   📜 **Logger intégré avec Winston** pour un suivi détaillé des événements
-   🌐 **Exposition des tâches sur des routes HTTP** grâce à Express
-   🧪 **Tests unitaires complets** avec Mocha
-   🛠️ **Architecture modulaire et extensible**

## 🚀 Installation et usage

### Installation

```sh
npm install jobar
```

### Exemple d'utilisation

Vous pouvez directement tester Jobar avec **Docker**:

```sh
npm create jobar-app@latest my-app -- --template=hello-world
cd my-app && docker compose up -d
```

-   Quelques exemples d'utilisation : [GitHub - examples](https://github.com/william-donnette/jobar/tree/main/examples)

![Dashboard Workflow Hello World](/img/dashboard-workflow-hello-world.png 'Dashboard Workflow Hello World')

## 📂 Structure du projet

```
jobar/
├── src/
│   ├── jobar.ts  # Classe principale
│   ├── crypto/    # Modules de cryptographie
│   ├── models/    # Gestion des tâches et files d'attente
│   ├── utils/     # Fonctions utilitaires (logs, formatage, etc.)
│   └── index.ts   # Point d'entrée
```

## 📖 Ressources

-   Documentation officielle : [Temporal.io](https://docs.temporal.io/)
-   Dépôt NPMjs : [https://www.npmjs.com/package/jobar](https://www.npmjs.com/package/jobar)
-   Dépôt GitLab : [gitlab.com/william-donnette/jobar](https://gitlab.com/william-donnette/jobar)
-   Dépôt GitHub : [github.com/william-donnette/jobar](https://github.com/william-donnette/jobar)
-   Exemples d'utilisations : [https://github.com/william-donnette/jobar/tree/main/examples](https://github.com/william-donnette/jobar/tree/main/examples)
-   Dépôt NPMjs Create Jobar App : [https://www.npmjs.com/package/create-jobar-app](https://www.npmjs.com/package/create-jobar-app)
-   Dépôt GitLab Create Jobar App : [gitlab.com/william-donnette/create-jobar-app](https://gitlab.com/william-donnette/create-jobar-app)
-   Dépôt GitHub Create Jobar App : [github.com/william-donnette/create-jobar-app](https://github.com/william-donnette/create-jobar-app)

---

💡 **En développement actif** – toute contribution est la bienvenue ! 🚀
