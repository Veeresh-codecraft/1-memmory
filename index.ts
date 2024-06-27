const args = process.argv;
try {
  const arg = args[2];
  const arr = arg.split(" ");
  const a = Number(arr[0]);
  const op= arr[1];
  const b = Number(arr[2]);
    let result = 0;
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Arguments has to be numbers");
    }
    else {
            switch (op) {
              case "+":
                result = addition(a,b);
                break;
              case "-":
                    result = substraction(a,b);
                break;
              case "*":
                    result = multiplication(a,b);
                break;
              case "/":
                    result = division(a,b);
                break;
            }
    }
    console.log("Result is", result);
        
}
catch(err)
{
    if(err instanceof Error)
    console.log(err.message);
}

function addition(a: number, b: number){
    return a + b;
}

function substraction(a: number, b: number) {
  return a - b;
}

function multiplication(a: number, b: number) {
  return a * b;
}

function division(a: number, b: number) {
    if (b === 0) { throw new Error("divison by Zero! is not allowed"); }
    else { return a / b; }
    
}


