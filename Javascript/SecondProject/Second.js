// Index            0        1         2        3        4
const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];

//Gets random nr 0-4
let randomIndex = Math.floor(Math.random() * colors.length);

//picks a color from the random index
let randomColor = colors[randomIndex];

switch (randomColor) {
    case 'orange':
        console.log('the color is orange');
        break;
    case 'green':
        console.log('the color is green');
        break;
    case 'yellow':
        console.log('the color is yellow');
        break;
    case 'purple':
        console.log('the color is purple');
        break; 
    case 'blue':
        console.log('the color is blue');
        break;
    default:
        console.log('no color found');
}