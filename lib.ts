import { add } from "./calc";
import { readChar, readLine } from "./core/input.utils";


async function loop() {
  while (true) {
    const op = await readChar(
      `Which operation you want to perform?\na - Add\ne - exit\n\nChoice:`
    );
    switch (op.toLowerCase()) {
      case "a":
        console.log("a - Add");
        await addOp();
        break;
      case "e":
        console.log("e - Exit");
        process.exit(0);
        break;
      default:
        console.log("Invalid operation!");
    }
    console.log("\n");
  }
}
loop();

const memory = new Map<string, number>();
async function addOp() {
  const a = +(await readLine(`Enter first number: `));
  const b = +(await readLine(`Enter second number: `));
  const memKey1 = `add,${a},${b}`;
  const memKey2 = `add,${b},${a}`;
  let result: number;

  if (memory.has(memKey1)) {
    result = memory.get(memKey1)!;
  } else if (memory.has(memKey2)) {
    result = memory.get(memKey2)!;
  } else {
    result = add(a, b);
    memory.set(memKey1, result);
    memory.set(memKey2, result);
  }

  console.log(`Result: ${result}`);
}

