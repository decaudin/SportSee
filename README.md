# SportSee

SportSee est une application de suivi d'activités sportives permettant aux utilisateurs de consulter leurs données d'entraînement et d'analyser leurs performances via des graphiques.

## Description

SportSee offre une interface simple et intuitive pour visualiser les données d'entraînement des utilisateurs, telles que le nombre de calories brûlées, les protéines consommées, et plus encore.

## Installation et Exécution

### Cloner le projet

`git clone https://github.com/decaudin/SportSee.git`

### Configuration du `.env` : 

Le projet comporte un système de switch entre l'utilisation des données mockées et celles de l'API. Cela se gère via un fichier .env.

Créez un fichier .env à la racine du répertoire Frontend avec la variable suivante :

VITE_USE_MOCKS=true

- Si VITE_USE_MOCKS est défini sur true, l'application utilisera les données mockées.
- Si VITE_USE_MOCKS est défini sur false, l'application utilisera les données de l'API.

### Lancer le Backend

```
cd Backend
yarn install
yarn dev
```

### Lancer le Frontend

```
cd Frontend
yarn install
yarn dev
```

### Accès à l'application

Deux utilisateurs sont actuellement disponibles. Vous pouvez consulter leur page aux adresses suivantes :

Utilisateur 12 : http://localhost:5173/user/12
Utilisateur 18 : http://localhost:5173/user/18



