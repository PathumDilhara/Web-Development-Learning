const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(e => e%2 ===0);

console.log(`Evens 1 : ${evenNumbers}`);



const numbers2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const evenNumbers2 = [];

for (let i=0; i<numbers2.length; i++){
    if(numbers2[i]%2===0){
        evenNumbers2.push(numbers2[i]);
    }
}

console.log(`Evens 2 : ${evenNumbers2}`)