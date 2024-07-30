import runGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const num = getRandomNumber(1, 100);
  const question = String(num);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
