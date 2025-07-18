---
title: 🏋️ Sport'Up
description: Plateforme SaaS de réservation de créneaux sportifs
---

# 🏋️ Sport'Up

<img alt="Logo de React Native" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" />
<img alt="Logo de TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" />
<img alt="Logo d'Expo" src="https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png" width="40" />
<img alt="Logo de Temporal" src="https://temporal.io/favicon.ico" width="40" />
<img alt="Logo de Hasura" src="https://hasura.io/favicon-32x32.png" width="40" />
<img alt="Logo de PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="40" />
<img alt="Logo de Keycloak" src="https://www.keycloak.org/resources/images/icon.svg" width="40" />
<img alt="Logo de Stripe" src="https://images.stripeassets.com/fzn2n1nzq965/2EOOpI2mMZgHYBlbO44zWV/5a6c5d37402652c80567ec942c733a43/favicon.png?w=180&h=180" width="40" />
<img alt="Logo de Mapbox" src="https://api.iconify.design/simple-icons/mapbox.svg" width="40" />
<img alt="Logo de Google" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="40" />
<img alt="Logo de AntDesign" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg" width="40" />
<img alt="Logo de Refine" src="https://refine.dev/img/refine_logo.png" width="40" />

**`🚧 WIP`**

---

## Plateforme SaaS de réservation de créneaux sportifs

**Sport'Up** est une solution SaaS dédiée aux **complexes sportifs** leur permettant de :

-   gérer leurs **terrains**,
-   créer des **offres récurrentes**,
-   générer automatiquement des **créneaux de réservation**,
-   proposer une **expérience fluide** aux utilisateurs finaux pour réserver leurs sessions sportives depuis une app mobile.

L'architecture repose sur un ensemble de **composants découplés et scalables**, choisis pour répondre aux exigences de sécurité, de fiabilité, de flexibilité et d'intégration rapide.

---

## 🧱 Architecture générale

| Domaine                            | Technologie / Service                           |
| ---------------------------------- | ----------------------------------------------- |
| **App mobile utilisateurs**        | React Native (Expo), TypeScript                 |
| **Dashboard pro**                  | React, Refine, Ant Design                       |
| **Backend & orchestration**        | Jobar (custom framework), Temporal.io           |
| **API & données**                  | Hasura GraphQL, PostgreSQL                      |
| **IAM**                            | Keycloak (OIDC), Google OAuth                   |
| **Paiement**                       | Stripe (abonnement selon le nombre de terrains) |
| **Géolocalisation & cartographie** | Mapbox                                          |
| **CI/CD & déploiement**            | GitLab CI, Docker, infrastructure auto-hébergée |

---

## 🛠️ Choix techniques stratégiques

-   **Temporal.io** pour orchestrer les tâches critiques (génération de créneaux, envoi de notifications, gestion de relances) avec une tolérance aux pannes et des workflows auditables.
-   **Jobar** : framework maison basé sur Temporal, permettant une exposition simple des tâches métiers via HTTP avec logs et cryptage intégrés.
-   **Hasura** pour bénéficier d'un **accès temps réel aux données** via GraphQL, avec des permissions granulaires et des subscriptions intégrées.
-   **Keycloak** en mode self-hosted, avec stratégie d'authentification **OIDC** et intégration Google OAuth pour simplifier la connexion des utilisateurs.
-   **Stripe** utilisé en mode SaaS B2B, avec un **modèle d'abonnement dynamique** (tarification par nombre de terrains gérés).
-   **Mapbox** pour afficher une **carte interactive** dans l'application mobile, localiser les complexes et enrichir l'UX utilisateur.
-   **Refine + Ant Design** pour concevoir rapidement un **dashboard professionnel**, en gardant un fort niveau de personnalisation et de scalabilité.
-   **React Native avec Expo** pour déployer rapidement l'application sur iOS et Android tout en gardant une base de code unifiée.
-   **CI/CD** avec GitLab pour industrialiser le processus de build, test, déploiement sur un **serveur Docker auto-hébergé** sécurisé.

---

## 🔒 Sécurité & Gouvernance

-   Authentification centralisée via **Keycloak** (gestion des rôles complexes / utilisateurs).
-   Sécurisation des échanges via **HTTPS + tokens JWT signés**.
-   Gestion fine des accès sur Hasura grâce aux policies.
-   **Logs structurés** pour les workflows via Jobar + Winston.

---

## 🧩 Écosystème modulaire

Chaque composant du système est pensé pour être **modulaire**, **testable**, et **remplaçable** indépendamment, selon l'évolution du projet. Cela facilite également l'ouverture vers d'autres canaux (API publique, extensions partenaires, etc.)

---

🎯 Un projet à la fois **technique** et **produit**, pensé pour **industrialiser les réservations sportives** tout en étant prêt à **s'adapter à de nombreux types d'infrastructures sportives**.

---

📁 Le code n'est pas encore open source, mais une version démo est prévue prochainement.
