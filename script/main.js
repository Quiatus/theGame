const btnNextMonth = document.querySelector('#nextMonth');
const prgNextMonth = document.querySelector('#nextMonthProgress');
//let prgM = 0;

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    btnNextMonth.addEventListener('click', nextMonth);
}

const moveMonthBar = (prgM) => {
    if (prgM <= 100) {
        console.log(prgM);
        prgNextMonth.style.background = `radial-gradient(closest-side, #080000 79%, transparent 80% 100%), conic-gradient(#771111 ${prgM}%, #200000 0)`;
        prgM += 2;
        setTimeout(function(){
            moveMonthBar(prgM)
        }, 10);
    } else {
        btnNextMonth.classList.toggle('disabledRadial');
        btnNextMonth.addEventListener('click', nextMonth);
    }
}

const nextMonth = () => {
    btnNextMonth.classList.toggle('disabledRadial');
    //prgM = 0;
    moveMonthBar(0);
    btnNextMonth.removeEventListener('click', nextMonth);
}