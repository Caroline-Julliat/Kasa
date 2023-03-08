# Créez une application web de location immobilière avec React
Septième projet du parcours dévelopeur web chez OpenClassrooms. 
L'objectif est __de développer une application React__ à partir [d'une maquette Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3-0&t=hztDkL0tp91MiUTo-0) 

## Outils
- Create React App  
- React Router  
- L’utilisation de Sass est optionnelle  
- Pas de librairie React externe  

## Contraintes fonctionnelles

- Pour le défilement des photos dans la galerie (composant Gallery) :
  - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
  - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
  - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur.
- Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer. Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.