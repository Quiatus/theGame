export const converThousand = (string) => string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const saveGame = (name, value) => {
    const saveObj = { [name]: value }

    localStorage.setItem('ealemis_save', JSON.stringify(saveObj))
}

