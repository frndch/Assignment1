const arr = [3, 2, 5, 1, 8, 9, 6];

const ganjil = []
const genap = []

arr.sort();
arr.forEach(i => oddOrEven(i));
console.log(ganjil.concat(genap));

function oddOrEven(num){
    if (num % 2 === 0){
        genap.push(num);
     }
    else{
        ganjil.push(num);
     }
}