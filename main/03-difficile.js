/**
 * Exercice - FOU
 * 
 * Programmer une fonction qui prend en paramètres un numéro de ligne et de colonne et renvoie (return) un tableau contenant les paires 
 * lignes-colonnes accessibles par un Fou. Comme il avait été fait en cours pour la Tour. Un fou ne se déplace qu'en diagonale, sur toute la longueur du plateau.
 * 
 * Si vous ne connaissez pas le jeu d'échecs, allez chercher une image sur le net. Le plateau se présente comme un ensemble de cases, 8 en ligne et 8 en 
 * colonne, donc 64 cases.
 * Nous considérerons que les lignes vont de 1 à 8, et idem pour les colonnes. Donc inutile de gérer les colonnes comme des lettres.
 * 
 * Exemple : movementsFou(3, 4) correspond à un Fou placé sur la 3ème ligne et la 4ème colonne.
 * 
 * L'implémentation déjà faite est bien sûr fausse mais définit un format de réponse qui est correct. Il s'agira bien de renvoyer un tableau de tableau, c'est à
 * dire un tableau qui contiendra de petits tableaux qui sont les paires ligne-colonne.
 * 
 */
 function mouvementsFou(ligne, colonne) {
     // monter à droite
     let t = [[]];

     let i = ligne +1;
     let j = colonne +1;
     while (i<=8 && j<=8 ){
        let ts = [];
        ts.push(i,j);
        t.push(ts); 
        i++;
        j++;  
     }
     //descendre à droite
     i = ligne +1;
     j = colonne -1;
     while (i<=8 && j>=1 ){
        let ts = [];
        ts.push(i,j);
        t.push(ts); 
        i++;
        j--;  
     }
     // monter à gauche
     i = ligne -1;
     j = colonne +1;
     while (i>=1 && j<=8 ){
        let ts = [];
        ts.push(i,j);
        t.push(ts); 
        i--;
        j++;  
     }
     // descendre à gauche
     i = ligne -1;
     j = colonne -1;
     while (i>=1 && j>=1 ){
        let ts = [];
        ts.push(i,j);
        t.push(ts); 
        i--;
        j--;  
     }

     return t;
     /*
    return [
        [ligne - 1, colonne - 1],
        [ligne, colonne],
        [ligne + 1, colonne + 1],
    ]*/
}

/**
 * Ce log ne fait pas partie de l'exercice, ne vous en préoccupez donc pas, mais il vous aidera à afficher vos tests avec un joli formattage.
 */
 console.log(`Les movements d'un fou sont : ${mouvementsFou(8, 8).map(cell => `[${cell}]`)}`)






/**
 * Programmer une fonction qui prend en paramètre un nombre, correspondant à la hauteur d'une pyramide et qui renvoie un tableau de caractères "*" et 
 * espace afin de construire
 * une pyramide avec la hauteur en argument.
 * 
 * Exemple, pour une hauteur de 5 : ["    *    ", "   ***   ", "  *****  ", " ******* ", "*********"]
 * 
 * Comme pour l'exercice précédent, vous ne devriez pas toucher au log, mais il vous servira à contrôler votre résultat.
 * Pour l'exemple précédent, il vous affichera :
 * 
 *     *    
 *    ***   
 *   *****  
 *  ******* 
 * *********
 * 
 */
function pyramide(hauteur) {
  let t = [];
  let s = "";
  let h = hauteur;

  for (let i=0; i<hauteur; i++){
    for (let j=1; j<=h-1; j++) s = s + " ";
    s = s + "*";
    t[i] = s; 
    h = h -1;
  }
  return t;
    //return ["    *    ", "   ***   ", "  *****  ", " ******* ", "*********"]
}
pyramide(5).forEach(e => console.log(`${e}`))

pyramide(10).forEach(e => console.log(`${e}`))


pyramide(10).forEach(e => console.log(`${e}`))
