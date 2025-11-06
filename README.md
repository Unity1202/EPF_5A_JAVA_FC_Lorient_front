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
cd skeleton-web-app-school-main/front-skeleton
npm install
```

### 2. Lancement du projet
```bash
cd skeleton-web-app-school-main/front-skeleton
npm start
```

### 3. Accéder au site
Se rendre sur le lien :
```bash
http://localhost:4200/
```

## Ce qui a été fait

### Pages principales développées

#### 🏠 Page d'accueil (`/`)
- **carousel d'actualités** avec navigation automatique et manuelle
- **section prochain match** avec affichage dynamique des matchs à venir
- **tableau de classement ligue 1** avec mise en évidence du fc lorient
- **grille d'actualités** avec pagination pour les derniers articles
- **footer complet** avec liens utiles et réseaux sociaux

#### 📅 Matchs (`/matchs`)
- **prochain match** avec détails complets (date, équipes, lieu)
- **matchs à venir** avec grille d'affichage
- **matchs précédents** avec scores et résultats
- **boutons de réservation** qui redirige vers le site officiel de la billeterie

#### ⚽ Équipe (`/equipe`)
- **grille des joueurs** avec photos, noms, postes et numéros
- **affichage visuel** des informations de l'effectif

#### 🚹​ Joueur (`/joueurs/:id`)
- **informations du joueur** avec photos, noms, postes et numéros
- **biographie du joueur** avec les informations officielles de Wikipedia

#### 🛒 Boutique (`/boutique`)
- **grille de produits** avec images, descriptions et prix
- **boutons de commande** qui redirige vers le site officiel de la boutique

#### ℹ️ À propos (`/infos`)
- **présentation du club** avec historique et informations clés
- **film de présentation** de la saison 2024-2025
- **liens vers les réseaux sociaux** et site officiel

#### 🔐 Authentification
- **page de connexion** (`/login`) avec validation des champs
- **page d'inscription** (`/register`) avec formulaire complet
- **2 types de compte** (admin et utilisateur)
- identifiant admin : admin@football.fr
- mot de passe admin : admin123

#### 💬 Forum (`/forum`)
- **affichage des messages** existants avec auteur et date
- **formulaire d'ajout** de nouveaux messages
- **intégration backend** pour la persistance des données

#### 👮​ Admin (`/admin`)
- **panel admin** complet avec interface claire et intuitive
- **gestion des actualités** avec ajout, modification et suppression
- **gestion des utilisateurs** avec ajout, modification et suppression