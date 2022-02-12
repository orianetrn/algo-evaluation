/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */
function combine(tableau1, tableau2) {
    let tableau3 = []
    for (let i = 0 ; i<tableau1.length ; i++) {
    tableau3.push(tableau1[i]) ;
    
    // Alternace avec valdeur de tableau 2 s’il y a assez d’element
    if ( i < tableau2.length ) tableau3.push(tableau2[i]) ;
    } 
    
    /* Si tableau 2 est plus grand que tableau 1 */
    if ( tableau2.length > tableau1.length )
    {
    for ( i = 0 ; i<tableau2.length ; i++) {
    tableau3.push(tableau2[i]) ;
    }
    }
    return tableau3 ;
    }

let tabl1 = [1, 2, 3, 4]
let tabl2 = ["orange", "pomme", "poire", "banane"]
let result = combine(tabl1,tabl2)
console.log(result)


/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
 * de offset.
 * 
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */

 function rotate(tableau, offset) {
   let tabOut=[0, 0, 0, 0, 0, 0] ;
   let j=0 ;

   for (let i=0; i<tableau.length;i++) {
      j = i + offset;
      if ( j  >= tableau.length ) j = j - tableau.length ;
      tabOut[j] = tableau[i];
   }
   return tabOut;
}
let tableau = [4, 5, 6, 1, 2, 3]
let offset = 6
let resultat = rotate(tableau, offset)
console.log(resultat)


/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */

 function syracuse(nombre) {
  let tabOut=[] ;
  tabOut[0] = nombre;

  for (let i=1; i<=9; i++) {
     if ( tabOut[i-1] % 2 == 0 ) {
        tabOut[i] = tabOut[i-1] / 2;
     }
     else
     {  
       tabOut[i] = tabOut[i-1] * 3 + 1;
     }   
   }

   return tabOut;
}

let nombre = 14;
let resultat1 = syracuse(nombre);
console.log(resultat1)
