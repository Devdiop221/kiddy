

# **Kiddy** 🎨📚
Kiddy est une application éducative ludique conçue pour aider les enfants à apprendre les bases de la programmation, des mathématiques et de la lecture à travers des mini-jeux interactifs.

---

## **Fonctionnalités principales**
- **Mini-jeux éducatifs** :
    - **Le Labyrinthe du Code** : Apprenez la logique et les séquences à travers des défis amusants.
    - **Le Marché des Fruits** : Comptez, additionnez et soustrayez pour remplir les paniers de fruits.
    - **Safari des Mots** : Associez des images à des mots pour renforcer le vocabulaire.

- **Gamification** :
    - Récompenses sous forme d'étoiles pour motiver les enfants.
    - Tableau de progression pour suivre les succès.

- **Interface intuitive et colorée** :
    - Navigation simple adaptée aux enfants grâce à **Expo Router**.
    - Design moderne et réactif avec **NativeWind** (intégration TailwindCSS).

---

## **Installation**

### **Prérequis**
- [Node.js](https://nodejs.org/) >= 14.x
- [Expo CLI](https://docs.expo.dev/) installé globalement
- Un émulateur mobile ou un appareil physique pour tester l’application.

### **Étapes d'installation**
1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/devdiop221/kiddy.git
   cd kiddy
   ```  
2. Installez les dépendances :
   ```bash
   npm install
   ```  
3. Lancez l’application en mode développement :
   ```bash
   expo start
   ```  
4. Scannez le QR code avec l’application Expo Go ou utilisez un émulateur.

---

## **Structure du projet (par défaut avec Expo Router)**
```plaintext
📂 root  
├── 📂 app              # Fichiers de navigation et pages (Expo Router)  
│   ├── 📄 _layout.js   # Layout principal pour la navigation  
│   ├── 📄 index.js     # Écran d’accueil  
│   ├──   📂 tabs       # Dossier qui contient les différentes écrans de l'application  
├── 📂 assets           # Images, icônes, polices 
├── 📂 components       # Composants réutilisables  
├── 📂 hooks            # Fonctions utilitaires  
└── 📄 app.json         # Configuration principale d’Expo  
```  

---

## **Technologies utilisées**
- **Frontend** :
    - [React Native](https://reactnative.dev/)
    - [Expo](https://expo.dev/)
    - [NativeWind](https://www.nativewind.dev/)
    - [Expo Router](https://expo.github.io/router/docs)

---

## **Roadmap**
- [x] Implémentation du MVP avec 3 mini-jeux.
- [ ] Ajout de nouveaux niveaux pour chaque jeu.
- [ ] Mode parent : Tableau de bord avec suivi des progrès.
- [ ] Mode collaboratif : Jouez avec un ami ou un parent.
- [ ] Localisation multilingue pour une audience mondiale.

---

## **Contribuer**
Les contributions sont les bienvenues ! Veuillez suivre les étapes suivantes :
1. Forker le dépôt.
2. Créez une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/nom-fonctionnalite
   ```  
3. Effectuez vos modifications et commitez-les :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"  
   ```  
4. Poussez la branche :
   ```bash
   git push origin feature/nom-fonctionnalite
   ```  
5. Ouvrez une Pull Request.

---

## **Licence**
Ce projet est sous licence MIT. Consultez le fichier [LICENSE](./LICENSE) pour plus d’informations.

---

## **Contact**
Pour toute question ou suggestion :
- **Email** : devdiop221@gmail.com
- **Portfolio** : [Devdiop](https://devdiop.netlify.app)
