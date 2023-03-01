const imege = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');
const timerClicker = document.getElementById('clicker__timer');
const bestTimer = document.getElementById('clicker__best')

let beforeСlickMs = 0;

function proba() {

    if (imege.width === 200) {
        imege.width = 300;
    } else {
        imege.width = 200;
    }

    count.textContent = +count.textContent + 1;

    let afterСlickMs = new Date();

    let timer = ((1 / ((afterСlickMs.getTime() - beforeСlickMs) * 0.001))).toFixed(2);

    if (timer > 1) {
        timerClicker.textContent = timer;

        if (timer > +bestTimer.textContent) {
            bestTimer.textContent = timer;
        }

    } else {
        timerClicker.textContent = "0";
    }

    beforeСlickMs = afterСlickMs.getTime();

}

imege.onclick = proba;