import runGame from '../index.js';

import { getRandomNumber } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let value1 = a;
  let value2 = b;

  while (value2 !== 0) {
    const storage = value2;
    value2 = value1 % value2;
    value1 = storage;
  }

  return value1;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const gcdValue = getGcd(num1, num2);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcdValue);

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
