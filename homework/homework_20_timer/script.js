document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.timer-display');
    let milliseconds = 10000;
    let timer;

    function countdown() {
        const seconds = Math.floor(milliseconds / 1000);
        const millisecondsRemainder = milliseconds % 1000;

        const formattedMilliseconds = ("00" + millisecondsRemainder).slice(-3);

        display.textContent = `${seconds}.${formattedMilliseconds}`; 

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
            shakeDirection *= 0-1;
            shakeDistance *= 5; // 

            if (shakeDistance < 0.5) {
                clearInterval(shakeInterval);
                display.style.left = originalPosition + 'px';
            }
        }, 50);
    }

    countdown();
    timer = setInterval(countdown, 100);
});