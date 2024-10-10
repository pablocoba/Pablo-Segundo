let conjunto = new Set();
let array = [12,12,12,14];
let array2 = [11,11,13,15];
let array3 = ["i","j","k","l"];
let array4 = array.concat(array2).concat(array3);

for(i of array4){
    conjunto.add(i)
}

console.log(conjunto);

for(i of conjunto){
    console.log(i)
}