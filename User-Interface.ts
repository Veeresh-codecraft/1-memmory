import readline from "node:readline";
import { add, divide, multiply, subtract } from "./calc";

const memory = new Map<string, number>();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, (input: any) => {
      resolve(input);
    });
  });
};

const userInput = async (question: string) => {
  while (true) {
    const answer = await askQuestion(question);
    const number = Number(answer);
    if (!isNaN(number)) {
      return number;
    }
    console.log("Please enter a valid number.");
  }
};

const askForOperation = async () => {
  const answer = await askQuestion(
    "What operation do you want? (add, multiply,subtract,divide exit): "
  );
  if (answer.toLowerCase() === "exit") {
    rl.close();
    process.exit(0);
  }
  return answer.toLowerCase();
};

const performAddOrMultiply = async (operation: string) => {
  const a = await userInput("Enter the first number: ");
  const b = await userInput("Enter the second number: ");
  const memKey1 = `${operation}${b},${a}`;
  const memKey = `${operation}${a},${b}`;
  let result: number;

  if (memory.has(memKey)) {
    result = memory.get(memKey)!;
  } else if (memory.has(memKey1)) {
    result = memory.get(memKey1)!;
  } else {
    switch (operation) {
      case "add":
        result = add(a, b);
        break;
      case "multiply":
        result = multiply(a, b);
        break;
      
      default:
        console.log("Invalid operation.");
        return;
    }
    memory.set(memKey, result);
    memory.set(memKey1, result);
  }

  console.log(`The result: ${result}`);
};

const performSubtractOrDivide = async (operation: string) => {
  const a = await userInput("Enter the first number: ");
  const b = await userInput("Enter the second number: ");
  const memKey = `${operation}${a},${b}`;
  let result: number;

  if (memory.has(memKey)) {
    result = memory.get(memKey)!;
  } else {
    switch (operation) {
      case "subtract":
        result = subtract(a, b);
        break;
      case "divide":
        if (b === 0) {
          console.log("Cannot divide by zero.");
          return;
        }
        result = divide(a, b);
        break;

      default:
        console.log("Invalid operation.");
        return;
    }
    memory.set(memKey, result);
  }

  console.log(`The result: ${result}`);
};


async function loop() {
  const operation = await askForOperation();
  console.log(`Performing: ${operation}`);
  switch (operation) {
    case "add":
    case "multiply":
      await performAddOrMultiply(operation);
      break;
    case "subtract" || "divide":
      await performSubtractOrDivide(operation);
      break;
    default:
      console.log("Invalid operation.");
  }
  loop();
}

loop();
