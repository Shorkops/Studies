let str = "aeiou"
let vowelsCount = 0;
function getCount(str) {
    for(let i = 0; i < str.split('').length; i++) {
        switch(str.split('')[i]){
            case 'a':
                vowelsCount++;
                break;
            case 'e':
                vowelsCount++;
                break;
            case 'i':
                vowelsCount++;
                break;
            case 'o':
                vowelsCount++;
                break;
            case 'u':
                vowelsCount++;
                break;
            default:
                break;
        }
    }
    return vowelsCount;
}

console.log(getCount(str));