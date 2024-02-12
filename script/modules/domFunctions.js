import { converThousand } from "./utilities.js";

const txtCurrentMonth = document.querySelector('#currentMonth');

export const refreshValues = () => {
    const refValues = JSON.parse(localStorage.getItem('ealemis_save'));
    txtCurrentMonth.textContent = converThousand(refValues.CurrentMonth);
}