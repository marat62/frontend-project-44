import runGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);

  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  const hiddenElement = getRandomNumber(1, progression.length - 1);
  const correctAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
