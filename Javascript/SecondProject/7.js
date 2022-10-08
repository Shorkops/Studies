// let walk = ['n','s','n','s','n','s','n','s','n','s'];

// function isValidWalk(walk) {
//     let n = 0;
//     let e = 0;
    
//     for (let i = 0; i < walk.length; i++){
//         switch(walk[i]){
//             case 'n':
//                 n++
//                 console.log(i)
//                 break;
//             case 's':
//                 n--
//                 console.log(i)
//                 break;
//             case 'e':
//                 e++
//                 console.log(i)
//                 break;
//             case 'w':
//                 e--
//                 console.log(i)
//                 break;
//         }
//         if (n == 0 && e == 0 && walk.length < 11){
//             return true
//         } else {
//             return false
//         }
//     }
// }

// console.log(isValidWalk(walk));

// function persistence(num) {
//     let arr = arr.from(num);
//     if (num.length < 2){
//        return 0;
//     } else {
//         for (let i = 0; i < arr.length; i++){
//             arr[0];
//         }
//     }
//     // if length < 2, return 0, else
//     // separate and multiply individuals
//     // if > 9, repeat
//     // return number of times it had to be done, counter
//     }

//arrayDiff

const arra = [1,2,2,2,3];
const arrb = [2];

function arrayDiff(a, b) {
let resultArray = [];
  for (let i = 0; i < a.length; i++){
    for (let j = 0; j < b.length; j++){
        if (a[i] !== b[j]){
            resultArray.push(a[i]);
        }
    }
  }0
}

console.log(arrayDiff(arra, arrb));

let java;