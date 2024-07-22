import runGame from '../index.js';
import { getRandomNumber } from '../helpers.js';
const description = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  let firstValue = a;
  let secondValue = b;

  while (secondValue !== 0) {
    const storage = secondValue;
    secondValue = firstValue % secondValue;
    firstValue = storage;
  }

  return firstValue;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const gcdValue = gcd(num1, num2);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcdValue);

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
