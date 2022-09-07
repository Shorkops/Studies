// function isDivisible(n, x, y) {
//     if(Number.isInteger(n/x) && Number.isInteger(n/y))
//       return true;
//     return false;
//   }

// console.log(isDivisible(12, 3, 4));

// function makeNegative(num) {
//     if(num >= 0)
//       return -Math.abs(num);
//     return;
//   }

// console.log(makeNegative(9));

// let marks = [2,2,2,2]
// function getAverage(marks){
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++){
//       sum = sum + marks[i];
//       console.log(sum);
//     }
//       return Math.floor(sum / marks.length);
//   }

// console.log(getAverage(marks));

// const rps = (p1, p2) => {
//     if (p1 === 'rock'){
//         if(p2 === 'scissors'){
//             return 'Player 1 won!';
//         } else if (p2 === 'paper'){ 
//             return 'Player 2 won!';
//         }
//         return 'Draw!';
//     }
//     if (p1 === 'paper'){
//         if(p2 === 'rock'){
//             return 'Player 1 won!';
//         } else if (p2 === 'scissors'){ 
//             return 'Player 2 won!';
//         }
//         return 'Draw!';
//     }
//     if (p1 === 'scissors'){
//         if(p2 === 'paper'){
//             return 'Player 1 won!';
//         } else if (p2 === 'rock'){ 
//             return 'Player 2 won!';
//         }
//         return 'Draw!';
//     }
// }

// console.log(rps('rock','paper'));


// The following is not my code, just something I wanted to note around rules

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//     if (p2 === rules[p1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
//   };

// The above is not my code.
function removeChar(str){
    let arr = []
    for (let i = 1; i < str.split('').length - 1; i++){
      arr.push(str.split('')[i]);
    }
    return arr.join(''); 
  };

console.log(removeChar('eloquent'));
//let str = 'eloquent';
//console.log(str.split('').length - 1);