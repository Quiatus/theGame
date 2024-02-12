export const converThousand = (string) => string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const saveGame = (name, value) => {
    let saveObj = JSON.parse(localStorage.getItem('ealemis_save'));
    saveObj = { ...saveObj, [name]: value }
    localStorage.setItem('ealemis_save', JSON.stringify(saveObj))
}