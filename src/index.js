import readlineSync from "readline-sync";

const countRound = 3;

const Game = (description, generateRound) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < countRound; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};

export default Game;
