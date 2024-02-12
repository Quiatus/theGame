const btnNextMonth = document.querySelector('#nextMonth');
const prgNextMonth = document.querySelector('#nextMonthProgress');
const txtCurrentMonth = document.querySelector('#currentMonth');

let currentMonth = 0;

const converThousand = (string) => string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    btnNextMonth.addEventListener('click', nextMonth);
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
    txtCurrentMonth.textContent = converThousand(currentMonth);
    moveMonthBar(0);
    btnNextMonth.removeEventListener('click', nextMonth);
}