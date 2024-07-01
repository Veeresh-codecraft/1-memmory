const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to clear stdin
function clearStdin() {
  process.stdin.pause();
  process.stdin.resume();
}

// Example usage
rl.question("Type something: ", (answer:string) => {
  console.log(`You typed: ${answer}`);

  // Clear stdin
  clearStdin();

  // Prompt again to demonstrate clearing
  rl.question("Type something again: ", (answer:string) => {
    console.log(`You typed: ${answer}`);
    rl.close();
  });
});
