export const convertToCrore = (amount) => {
    if (typeof amount !== 'number') {
        throw new Error('Input must be a valid number.');
    }

    const crore = 10000000; // 1 crore is equal to 10,000,000

    return amount / crore;
}