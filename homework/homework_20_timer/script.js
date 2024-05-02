document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.timer-display');
    let milliseconds = 10000;
    let timer;

    function countdown() {
        const seconds = Math.floor(milliseconds / 1000);
        const millisecondsRemainder = milliseconds % 1000;

        const formattedMilliseconds = ("00" + millisecondsRemainder).slice(-3); // форматируем миллисекунды

        display.textContent = `${seconds}.${formattedMilliseconds}`; // отображаем секунды и миллисекунды
        milliseconds -= 100;

        if (milliseconds < 0) {
            clearInterval(timer);
            timer = null;
            shakeTimer();
        }
    }

    function shakeTimer() {
        const originalPosition = parseInt(getComputedStyle(display).left);
        let shakeDistance = 10;
        let shakeDirection = 1;

        const shakeInterval = setInterval(function () {
            display.style.left = originalPosition + shakeDistance * shakeDirection + 'px';
            shakeDirection *= -1;
            shakeDistance *= 0.9; // замедляем тряску

            if (shakeDistance < 0.5) {
                clearInterval(shakeInterval);
                display.style.left = originalPosition + 'px'; // возвращаем в исходное положение
            }
        }, 50);
    }

    countdown();
    timer = setInterval(countdown, 100);
});