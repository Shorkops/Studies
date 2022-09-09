// function basicOp(operation, value1, value2) {
//     let sum;
//     switch(operation){
//       case '+':
//         sum = value1 + value2;
//         break;
//       case '-':
//         sum = value1 - value2;
//         break;
//       case '*':
//         sum = value1 * value2;
//         break;
//       case '/':
//         sum = value1 / value2;
//         break;
//       default:
//         console.log('error');
//         break;
//     }
//   }

// //console.log(basicOp('+', 4, 7));
// basicOp('+', 4, 7);

let something = ["3:1", "2:2", "0:1"];
function points(games) {
  let sum = 0;
 for (let i = 0; i < games.length; i++){
    let arr = games[i].split(':');
    if (arr[0] > arr[1]){
      sum = sum + 3;
    } else if (arr[0] = arr[1]){
      sum = sum + 1;
    }
  }
  return sum;
}

points(something);