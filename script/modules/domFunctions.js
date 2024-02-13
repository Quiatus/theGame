import { converThousand } from "./utilities.js";

const txtCurrentMonth = document.querySelector('#currentMonth');
const txtGold = document.querySelector('#gold-amount');
const txtPop = document.querySelector('#people-amount');
const txtFood = document.querySelector('#food-amount');
const txtGoldChange = document.querySelector('#gold-change');
const txtPopChange = document.querySelector('#people-change');
const txtFoodChange = document.querySelector('#food-change');
const divContent = document.querySelector('.content');

export const refreshValues = (gameStats) => {
    // will need to modify to count for the negative value
    gameStats.GainGold ? txtGoldChange.textContent = `+ ${converThousand(gameStats.GainGold)}` : txtGoldChange.textContent = "-";
    gameStats.GainPop ? txtPopChange.textContent = `+ ${converThousand(gameStats.GainPop)}` : txtPopChange.textContent = "-";
    gameStats.GainFood ? txtFoodChange.textContent = `- ${converThousand(gameStats.GainFood)}` : txtFoodChange.textContent = "-";

    txtCurrentMonth.textContent = converThousand(gameStats.CurrentMonth);
    txtGold.textContent = converThousand(gameStats.Gold);
    txtPop.textContent = converThousand(gameStats.Pop);
    txtFood.textContent = converThousand(gameStats.Food);
}

export const displayNextMonthInfo = (gameStats) => {
    refreshValues(gameStats);
    clearContent(divContent);
    const newMonthIntro = createElem("div", "newMonth", "" , divContent);
    createElem("h3", "newMonth__h3", "A new month has begun..." , newMonthIntro);
    const newMonthGain = createElem("div", "newMonth__gains", "" , newMonthIntro);
    newMonthGain.innerHTML = createNewMonthGainMarkup(gameStats);
}

const createElem = (elemType, ClassName, text, parent) => {
    const elem = document.createElement(elemType);
    elem.className = ClassName;
    elem.textContent = text;
    parent.appendChild(elem);

    return elem;
};

const createNewMonthGainMarkup = (gameStats) => {
    const markup = `<span>Our clan gained ` 
    + (gameStats.GainGold ? `<span class="goldText">${converThousand(gameStats.GainGold)}</span> gold` : ``) 
    + (gameStats.GainPop ? ` and <span class="popText">${converThousand(gameStats.GainPop)}</span> new people` : ``) 
    + `.</span>`;
     
    return markup
}

const clearContent = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};
