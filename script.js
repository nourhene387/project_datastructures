var array1 = [3, 1, 7, 9];
var array2 = [2, 4, 1, 9,3];

/*******************new array ***************** */
function sum_sorting(array1,array2){

    const array3 = array1.filter(item => !array2.includes(item)); // Éléments non trouvés dans array2
    const array4 = array2.filter(item => !array1.includes(item)); // Éléments non trouvés dans array2
    newarray=[...array3,...array4]
    newarray=newarray.sort();
    const sum = newarray.reduce((sum, value) => sum + value, 0);

    return { sortedArray: newarray, sum: sum };

 
}

console.log(sum_sorting(array1,array2));


//console.log("new array:", newarray);

//console.log("sorting  array:", newarray);
/*const sum = newarray.reduce((sum, value) => sum + value, 0);
console.log('sum: ', sum);*/

/*****************problem2********** */
function dot_product(v1, v2) {
    if (v1.length !== v2.length) {
        return "Vectors must be of the same length";
    }

    return v1.reduce((sum, value, index) => sum + value * v2[index], 0);
}

function areOrthogonal(v1, v2) {
    return dot_product(v1, v2) === 0;
}

// Exemple d'utilisation
const v1 = [1, 2, 3];
const v2 = [4, -2, 6];

const result = dot_product(v1, v2);
console.log("Dot product:", result); // Affiche le produit scalaire

console.log("Are the vectors orthogonal?", areOrthogonal(v1, v2));