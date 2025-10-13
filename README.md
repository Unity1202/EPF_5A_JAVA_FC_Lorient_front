# 🧡​ FC Lorient Frontend 🧡​

Ce repo est le frontend pour un site de football du FC Lorient.

Il permet de visualiser le site de football du FC Lorient : informations sur les joueurs, les matchs, les actualités, la boutique et le forum communautaire. Les utilisateurs peuvent se connecter pour écrire des messages dans le forum et les admins peuvent écrire de nouveaux articles.

*Groupe : Grégoire BRUN, Cornel CRISTEA, Quentin DEHARO, Alexis DHERMY*
<br>*EPF - 5ème année - MIN - 2025*

<img src="https://www.fclorient.bzh/voy_content/uploads/2023/03/logo.svg" width="100" alt="FC Lorient">

## Sommaire :
- [Installations et configurations](#installations-et-configurations)
- [Ce qui a été fait](#ce-qui-a-été-fait)

## Installations et configurations

### 0. Prérequis
- Node.js : https://nodejs.org/en/download
- Angular : `npm install -g @angular/cli`

### 1. Installation des dépendances
```bash
npm install
```

### 2. Lancement du projet
```bash
npm start
```

### 3. Accéder au site
Se rendre sur le lien :
```bash
http://localhost:4200/
```

## Ce qui a été fait

### Architecture et structure
- **application angular 17** avec routing complet
- **architecture modulaire** avec composants séparés par fonctionnalité
- **services angular** pour la communication avec l'api backend
- **modèles typescript** pour la gestion des données (message, student, course)
- **intégration bootstrap et angular material** pour l'interface utilisateur

### Pages et composants développés
- **page d'accueil** (`home.component`) avec :
  - carousel d'articles avec navigation
  - section prochain match avec données dynamiques
  - tableau de classement ligue 1
  - grille d'articles avec pagination
  - footer complet avec liens et réseaux sociaux
- **navbar** (`navbar.component`) avec navigation et logo fc lorient
- **forum** (`forum.component`) avec :
  - affichage des messages existants
  - formulaire d'ajout de nouveau message
  - intégration avec l'api backend
- **boutique** (`boutique.component`) avec grille de produits
- **liste des joueurs** (`liste-joueurs.component`)
- **page à propos** (`a-propos.component`)
- **authentification** :
  - page de connexion (`login.component`)
  - page d'inscription (`register.component`)
- **prochains matchs** (`nextmatch.component`)

### Fonctionnalités techniques
- **routing angular** avec navigation entre toutes les pages
- **services http** pour communication avec l'api backend
- **gestion des formulaires** avec validation
- **pagination** pour l'affichage des articles
- **carousel interactif** pour les articles en vedette
- **responsive design** avec bootstrap
- **icônes material design** pour l'interface

### Assets et ressources
- **logo fc lorient** et images du club
- **images d'articles** thématiques (tactique, entraînement, histoire, etc.)
- **icônes réseaux sociaux** (facebook, instagram, twitter)
- **images de fond** et éléments visuels

### Documentation
- **README complet** avec instructions d'installation et tâches effectuées