import { converThousand } from "./utilities.js";

const txtCurrentMonth = document.querySelector('#currentMonth');
const txtGold = document.querySelector('#gold-amount');
const txtPop = document.querySelector('#people-amount');
const txtGoldChange = document.querySelector('#gold-change');
const txtPopChange = document.querySelector('#people-change');

export const refreshValues = (gameStats) => {
    txtCurrentMonth.textContent = converThousand(gameStats.CurrentMonth);
    txtGold.textContent = converThousand(gameStats.Gold);
    txtPop.textContent = converThousand(gameStats.Pop);

    gameStats.GainGold ? txtGoldChange.textContent = `+ ${converThousand(gameStats.GainGold)}` : txtGoldChange.textContent = "-";
    gameStats.GainPop ? txtPopChange.textContent = `+ ${converThousand(gameStats.GainPop)}` : txtPopChange.textContent = "-";
    
}