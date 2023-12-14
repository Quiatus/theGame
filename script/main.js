import { converThousand } from './modules/utilities.js';
import * as qSelectors from './modules/querySelectors.js';

let currentMonth = 0;

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    qSelectors.btnNextMonth.addEventListener('click', nextMonth);
}

const moveMonthBar = (progress) => {
    if (progress <= 100) {
        qSelectors.prgNextMonth.style.background = `radial-gradient(closest-side, #080000 79%, transparent 80% 100%), conic-gradient(#771111 ${progress}%, #200000 0)`;
        progress += 2;
        setTimeout(() => moveMonthBar(progress), 10);
    } else {
        qSelectors.btnNextMonth.classList.toggle('disabledRadial');
        qSelectors.btnNextMonth.addEventListener('click', nextMonth);
    }
}

const nextMonth = () => {
    qSelectors.btnNextMonth.classList.toggle('disabledRadial');
    currentMonth += 1;
    qSelectors.txtCurrentMonth.textContent = converThousand(currentMonth);
    moveMonthBar(0);
    qSelectors.btnNextMonth.removeEventListener('click', nextMonth);
}