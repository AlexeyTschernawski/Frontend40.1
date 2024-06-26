
const firstNumInput = document.getElementById('firstNum');
const secondNumInput = document.getElementById('secondNum');

let sign = null;

// подписка на событие кнопок цифр
const numButtons = document.getElementsByClassName('num');
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', (e) => {

        if (!sign) {
            firstNumInput.value += e.target.innerText;
        } else {
            secondNumInput.value += e.target.innerText;
        }
    });
}

// подписка на событие математических знаков
const signButtons = document.getElementsByClassName('sign');
for (let i = 0; i < signButtons.length; i++) {
    signButtons[i].addEventListener('click', (e) => {
        sign = e.target.innerText;
    });
}

// подписка события кнопки равно
const resBtn = document.getElementById('res');
resBtn.addEventListener('click', () => {
    const firstVal = parseInt(firstNumInput.value);
    const secondVal = parseInt(secondNumInput.value);
    const res = calculate(firstVal, secondVal, sign);
    console.log(res);
});

const acBtn = document.getElementById('ac');
acBtn.addEventListener('click', () => {
    firstNumInput.value = '0'; // очистка первого ввода
    secondNumInput.value = '0'; // очистка второго ввода
    sign = null; // сброс выбранного математического знака
;})


// 
const calculate = (a, b, sign) => {
    switch (sign) {
        case '+':
            return a + b;
            break;

        case '-':
            return a - b;
            break;

        case '/':
            return a / b;
            break;

        case '*':
            return a * b;
            break;
        
        default:
            break;
    }
}





// const res = calculate(1, 2, '+');
// console.log(res);


