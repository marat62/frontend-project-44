import runGame from '../index.js';
import { getRandomNumber, getRandomIndex }  from '../helpers.js'


const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];


const calculateResult = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {

  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const randomOperator = operators[getRandomIndex(operators.length)];

  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = calculateResult(num1, randomOperator, num2).toString();

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
