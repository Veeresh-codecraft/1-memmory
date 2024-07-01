import { Argument } from "commander";
import { Command } from "commander";
const program = new Command();

// program
//   .name("string-util")
//   .description("CLI to some JavaScript string utilities")
//   .version("0.8.0");

// program
//   .command("split")
//   .description("Split a string into substrings and display as an array")
//   .argument("<string>", "string to split")
//   .option("--first", "display just the first substring")
//   .option("-s, --separator <char>", "separator character", ",")
//   .action((str:string, options:any) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// program.parse();

program
    .name("calculator")
    .description("simple cli based cal")
    .version("1.0.0");

program.option("-d, --debug", "print the debug statement for commmands")    
program
  .command("add")
  .description("addition of two numbers")
  .addArgument(new Argument("<a>", "first number to add").argParser(Number))
  .addArgument(new Argument("<b>", "Second number to add").argParser(Number))
  .action((a: number, b: number) => {
    console.dir({ a, b });
    console.log(a + b);
  });
  

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}


    