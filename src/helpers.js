const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (max) => Math.floor(Math.random() * max);

export { getRandomNumber, getRandomIndex };
