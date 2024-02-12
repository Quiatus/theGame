import { saveGame } from "./modules/utilities.js";
import { refreshValues } from "./modules/domFunctions.js";
import { Month } from "./modules/resources.js";

const btnNextMonth = document.querySelector('#nextMonth');
const prgNextMonth = document.querySelector('#nextMonthProgress');
const btnDel = document.querySelector('#btnDel');

const month = new Month();
const load = JSON.parse(localStorage.getItem('ealemis_save'));

// ***** TEMP FN, DELETE LATER *****

btnDel.addEventListener("click", () => {
    localStorage.removeItem('ealemis_save');
})

// *********************************

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    load ? loadGame(load) : initNewGame();
    refreshValues();
    btnNextMonth.addEventListener('click', nextMonth);
}

const initNewGame = () => {
    let initialValues = {
        "CurrentMonth" : 0
    }
    month.setResource(initialValues.CurrentMonth);
    localStorage.setItem('ealemis_save', JSON.stringify(initialValues))
}

const loadGame = (load) => {
    month.setResource(load.CurrentMonth);
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
    month.addResource(1);
    saveGame("CurrentMonth", month.getResource());
    refreshValues();
    moveMonthBar(0);
    btnNextMonth.removeEventListener('click', nextMonth);
}