import { saveGame } from "./modules/utilities.js";
import { refreshValues, displayNextMonthInfo } from "./modules/domFunctions.js";
import { Month, Gold, Pop } from "./modules/resources.js";

const btnNextMonth = document.querySelector('#nextMonth');
const prgNextMonth = document.querySelector('#nextMonthProgress');
const btnDel = document.querySelector('#btnDel');

const month = new Month();
const gold = new Gold();
const pop = new Pop();

let gameStats = JSON.parse(localStorage.getItem('ealemis_save'));

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
    // if no save file exsists (i.e. a new game), loads initial values
    if (!gameStats) {
        gameStats = {
            "CurrentMonth" : 0,
            "Gold": 500,
            "Pop": 100
        }
    }

    SetResources(gameStats);
    refreshValues(gameStats);
    btnNextMonth.addEventListener('click', nextMonth);
}

// sets loaded value to object
const SetResources = (gameStats) => {
    month.setResource(gameStats.CurrentMonth);
    gold.setResource(gameStats.Gold);
    pop.setResource(gameStats.Pop);
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
    pop.increasePop();
    gold.increaseGold(pop.getResource());
    // loads new values to an object, then passes it to teh helper functions
    gameStats = {...gameStats,
        "GainGold": gold.getIncrease(),
        "GainPop": pop.getIncrease(),
        "CurrentMonth": month.getResource(),
        "Gold": gold.getResource(),
        "Pop": pop.getResource()
    }
    saveGame(gameStats);
    displayNextMonthInfo(gameStats);
    moveMonthBar(0);
    btnNextMonth.removeEventListener('click', nextMonth);
}