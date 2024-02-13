import { converThousand } from "./utilities.js";

const txtCurrentMonth = document.querySelector('#currentMonth');
const txtGold = document.querySelector('#gold-amount');
const txtPop = document.querySelector('#people-amount');
const txtGoldChange = document.querySelector('#gold-change');
const txtPopChange = document.querySelector('#people-change');
const divContent = document.querySelector('.content');

export const refreshValues = (gameStats) => {
    txtCurrentMonth.textContent = converThousand(gameStats.CurrentMonth);
    txtGold.textContent = converThousand(gameStats.Gold);
    txtPop.textContent = converThousand(gameStats.Pop);
}

export const displayNextMonthInfo = (gameStats) => {
    refreshValues(gameStats);

    // will need to modify to count for the negative value
    gameStats.GainGold ? txtGoldChange.textContent = `+ ${converThousand(gameStats.GainGold)}` : txtGoldChange.textContent = "-";
    gameStats.GainPop ? txtPopChange.textContent = `+ ${converThousand(gameStats.GainPop)}` : txtPopChange.textContent = "-";

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
    // will need to modify to only display positive gains
    const markup = `<span>Our clan gained ` 
    + (gameStats.GainGold ? `<span class="goldText">${converThousand(gameStats.GainGold)}</span> gold and ` : ``) 
    + (gameStats.GainPop ? ` <span class="popText">${converThousand(gameStats.GainPop)}</span> new people` : ``) 
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
