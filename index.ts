
// const args = process.argv;
// try {
//   const arr = args[2].split(" ");;
//   const a = Number(arr[0]);
//   const op = arr[1];
//   const b = Number(arr[2]);
//   // util --a=5 --b=7 --op=*
//   // util -a=5 -b=7 -op=*
//   // util --a "5" --b "7" --op "*"

//   let result = 0;
//   if (isNaN(a) || isNaN(b)) {
//     throw new Error("Arguments has to be numbers");
//   } else {
//     switch (op) {
//       case "+":
//         result = addition(a, b);
//         break;
//       case "-":
//         result = substraction(a, b);
//         break;
//       case "*":
//         result = multiplication(a, b);
//         break;
//       case "/":
//         result = division(a, b);
//         break;
//     }
//   }
//   console.log("Result is", result);
// }
// catch(err)
// {
//     if(err instanceof Error)
//     console.log(err.message);
// }

