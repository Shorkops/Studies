function basicOp(operation, value1, value2) {
    let sum;
    switch(operation){
      case '+':
        sum = value1 + value2;
        break;
      case '-':
        sum = value1 - value2;
        break;
      case '*':
        sum = value1 * value2;
        break;
      case '/':
        sum = value1 / value2;
        break;
      default:
        console.log('error');
        break;
    }
  }

//console.log(basicOp('+', 4, 7));
basicOp('+', 4, 7);