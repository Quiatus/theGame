export const converThousand = (string) => string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const saveGame = (gameStats) => localStorage.setItem('ealemis_save', JSON.stringify(gameStats));