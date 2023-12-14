export { converThousand };

const converThousand = (string) => string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

