

console.log("Task 1: У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите программу для удвоения каждого значения в массиве и вывода результата в консоль.");
console.log("--------------------------------------");
const numbersQuared = [2,4,6,8,10];

for (let i = 0; i < numbersQuared.length; i++) {
    const number = numbersQuared[i]*=2;
    console.log(number)
}
console.log()
const res = numbersQuared.join('|');
console.log(res);

console.log("--------------------------------------");
console.log("Task 2:  Есть массив чисел (любых) - поменять первое и последий элемент массива местами");

const arrayForChange = [4,8,9,5,3];

const firstNumber = arrayForChange[0];
const lastNumber = arrayForChange[arrayForChange.length - 1];
arrayForChange[0] = lastNumber;
arrayForChange[arrayForChange.length-1] = firstNumber;
console.log(arrayForChange);

console.log("--------------------------------------");
console.log("Task 3:  Есть массив чисел (любых) если в массиве есть хотябы одно число равное 5 - вывести в консоль сообщение: 5 Найдено если нет вывести в консоль сообщение 5 Отсутствует");
//first way
let numberForSearch = [9, 20, 100, 5, 200]; 
if (numberForSearch.includes(5)) {
console.log("5 Найдено"); 
} else {
console.log("5 Отсутствует");
}
//second way
for (let i = 0; i < numberForSearch.length; i++) {
    if (numberForSearch[i] === 5) {
    console.log("5 Найдено");  
    break; 
    } else if (i === numberForSearch.length - 1) {
    console.log("5 Отсутствует"); 
    }
}

console.log("--------------------------------------");
console.log("Task 4:  У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите программу для вычисления среднего значения элементов массива и вывода результата в консоль. Для решения задач использовать цикл for");

let arrayForAvrage = [125, 3, 74, 44, 4]; 
let sum = 0; 

for (let i = 0; i < arrayForAvrage.length; i++) {
sum += arrayForAvrage[i]; 
}

let average = sum / arrayForAvrage.length; 
console.log(average); 