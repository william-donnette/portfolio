#!/bin/bash

# Générer l'article
export MY_VARIABLE=$(node generate-article.js $@| tail -n 1)

echo $MY_VARIABLE

# Récupérer la date actuelle pour le nom de la branche
BRANCH_NAME="article-$(date +%Y-%m-%d)"

# Créer une nouvelle branche
git checkout -b "$BRANCH_NAME"

# Ajouter le nouveau fichier à l'index git
git add .

# Commiter les changements
git commit -m "Ajout d'un nouvel article généré automatiquement"

# Pousser la nouvelle branche sur le dépôt distant
git push origin "$BRANCH_NAME"

# Créer une Merge Request
curl --request POST \
     --header "PRIVATE-TOKEN: $GITLAB_API_TOKEN" \
     --form "source_branch=$BRANCH_NAME" \
     --form "target_branch=main" \
     --form "title=Ajout d'un nouvel article" \
     --form "description=Cet article a été généré automatiquement." \
     "https://gitlab.com/api/v4/projects/$CI_PROJECT_ID/merge_requests"
