
//Task 2
console.log("Task2")
console.log("-----------------------------------------------")
let a = 5;
let b = "grade";
let c = true;

console.log (a);
console.log (b);
console.log (c);

//Task 3
console.log("Task3")
console.log("-----------------------------------------------")
let num1 = "number"
let num2 = num1;

console.log(num1);
console.log(num2);

//task for if else
console.log("task for if else")
console.log("------------------------------------------------")
let number1 = 4;
let number2 = 5;
let expectResult = 9;
let summa = number1 + number2;
let correct = summa === expectResult;

if (correct){
    console.log('sum is correct');
}
else{
    console.log('not correct');
}

//optional
console.log("optional")
console.log("-----------------------------------------------")

let arrayNumbers = [20,60,7,98, 50, 6, 8];

arrayNumbers.forEach(arrayNumbers2=> {
    console.log(arrayNumbers2);
})

console.log("-----------------------------------------------")

let arrayNumbersForReserv = [1,2,3,4,5];
arrayNumbersForReserv.reverse();

let outputDiv = document.getElementById("output");

arrayNumbersForReserv.forEach(arrayRevers=> {
    outputDiv.innerHTML += number + "<br>";
});



    
