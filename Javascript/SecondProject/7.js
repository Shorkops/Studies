let info = [1,2,'aasf','1','123',123];

function filter_list(l) {
    let arr = [];
    for (let i = 0; i < l.length; i++){
      if (l.typeOf(Int) == true){
        arr.push(l[i])
      }
      console.log('error')
    }
  }

console.log(filter_list(info));