const btnNextMonth = document.querySelector('#nextMonth');
const prgNextMonth = document.querySelector('#nextMonthProgress');
let prgM = 0;
const cls = []

function moveBar(){
    if (prgM <= 100) {
        prgNextMonth.style.background = `radial-gradient(closest-side, #080000 79%, transparent 80% 100%), conic-gradient(#771111 ${prgM}%, #200000 0)`;
        prgM += 1;
        setTimeout(moveBar, 150);
    } else {
        btnNextMonth.classList.remove('disabledRadial');
        btnNextMonth.addEventListener('click', nextMonth);
    }
}

function nextMonth(){
    btnNextMonth.classList.add('disabledRadial');
    prgM = 0;
    moveBar();
    btnNextMonth.removeEventListener('click', nextMonth);
}

btnNextMonth.addEventListener('click', nextMonth);