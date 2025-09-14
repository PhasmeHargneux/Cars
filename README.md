# Cars Racing

Ce projet est une course de voitures animée en TypeScript et HTML.

## Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) (installé avec Node.js)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

1. **Clone le projet ou télécharge les fichiers dans un dossier.**

2. **Ouvre un terminal dans le dossier du projet.**

3. **Installe TypeScript globalement si ce n'est pas déjà fait :**
   ```
   npm install -g typescript
   ```

4. **Compile les fichiers TypeScript :**
   ```
   tsc
   ```
   Les fichiers `.js` seront générés dans le dossier `dist`.

## Lancement

1. **Ouvre le fichier `index.html` dans ton navigateur (double-clique ou clic droit > "Ouvrir avec").**

2. **Clique sur le bouton "🚦 Démarrer !" pour lancer la course.**

Le chrono s'affiche et la voiture gagnante est annoncée à la fin de la course.

## Structure du projet

- `index.html` : Interface graphique de la course.
- `Car.ts` : Classe représentant une voiture.
- `main.ts` : Logique de la course et animation.
- `dist/` : Fichiers JavaScript générés.
- `tsconfig.json` : Configuration TypeScript.

## Astuces

- Pour recompiler après modification du code TypeScript, relance simplement la commande :
  ```
  tsc
  ```

---
GitHub