import { converThousand, saveGame } from "./modules/utilities.js";

const btnNextMonth = document.querySelector('#nextMonth');
const prgNextMonth = document.querySelector('#nextMonthProgress');
const txtCurrentMonth = document.querySelector('#currentMonth');
const btnDel = document.querySelector('#btnDel');

let currentMonth = 0;

btnDel.addEventListener("click", () => {
    localStorage.removeItem('ealemis_save');
})

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === "complete") {
        initApp();
        console.log('loaded')
    }
});

const initApp = () => {
    btnNextMonth.addEventListener('click', nextMonth);
    loadGame();
}

const loadGame = () => {
    const load = JSON.parse(localStorage.getItem('ealemis_save'));
    if (load) {
        currentMonth = load.CurrentMonth;
        txtCurrentMonth.textContent = converThousand(currentMonth);
    }
}

const moveMonthBar = (progress) => {
    if (progress <= 100) {
        prgNextMonth.style.background = `radial-gradient(closest-side, #080000 79%, transparent 80% 100%), conic-gradient(#771111 ${progress}%, #200000 0)`;
        progress += 2;
        setTimeout(() => moveMonthBar(progress), 10);
    } else {
        btnNextMonth.classList.toggle('disabledRadial');
        btnNextMonth.addEventListener('click', nextMonth);
    }
}

const nextMonth = () => {
    btnNextMonth.classList.toggle('disabledRadial');
    currentMonth += 1;
    saveGame("CurrentMonth", currentMonth);
    txtCurrentMonth.textContent = converThousand(currentMonth);
    moveMonthBar(0);
    btnNextMonth.removeEventListener('click', nextMonth);
}