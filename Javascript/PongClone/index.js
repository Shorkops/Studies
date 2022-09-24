// Minimizes typing references.
const canvas = document.getElementById("pong");
const ctx = canvas.getContext('2d');
let read = false;

// variables
// net design
const net = { 
    x: canvas.width/2 - 1,
    y: 0,
    width: 2,
    height: 10,
    color: 'WHITE',
}
// user1's info
const user = { 
    x: 0,
    y: canvas.height / 2 - 50,
    width: 10,
    height: 100,
    color: 'WHITE',
    score: 0
}
// user2/computer's info 
const com = { 
    x: canvas.width - 10,
    y: canvas.height / 2 - 50,
    width: 10,
    height: 100,
    color: 'WHITE',
    score: 0 
}
// ball info
const ball = { 
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: 10,
    speed: 5,
    velX: 5,
    velY: 5,
    color: 'RED'
}


// drawing shapes
// draws rectangles from top left
function drawRect(x, y, w, h, color){ 
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}
// draws circles from center
function drawCircle(x, y, r, color){ 
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
}
// draws text from bottom left
function drawText(text, x, y, color){ 
    ctx.fillStyle = color;
    ctx.font = "45px fantasy";
    ctx.fillText(text, x, y);
}
// draws the net
function drawNet(){
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

// main
// moving the left paddle with the mouse
canvas.addEventListener('mousemove', movePaddle);
canvas.getBoundingClientRect();
function movePaddle(evt){
    let rect = canvas.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height/2;
}

function collision(b, p){
    // Player sizes
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;
    
    //ball sizes
    b.top = b.y - b.r;
    b.bottom = b.y + b.r;
    b.left = b.x - b.r;
    b.right = b.x + b.r;

    return b.right > p.left && b.top < p.bottom && b.left < p.right && b.bottom > p.top; // touch = true
}

//game map
function render(){
    // clear the canvas
    drawRect(0, 0, canvas.width, canvas.height, 'BLACK');
    // draw score
    drawText(user.score, canvas.width/4 - 45/2, canvas.height/5, 'WHITE');
    drawText(com.score, 3*canvas.width/4 - 45/4, canvas.height/5, 'WHITE');
    // net
    drawNet();
    // draw paddles
    drawRect(user.x, user.y, user.width, user.height, user.color);
    drawRect(com.x, com.y, com.width, com.height, com.color);
    // ball
    drawCircle(ball.x, ball.y, ball.r, ball.color);

}


function update(){
    // ball go down
    ball.x += ball.velX; // X+
    ball.y += ball.velY; // Y+
    
    // reverses direction when limits hit:
    if(ball.y + ball.r > canvas.height || ball.y - ball.r < 0 ){
        ball.velY = -ball.velY;
    }
    let computerLevel = 0.08;
    com.y += (ball.y - (com.y + com.height/2)) * computerLevel;
    // collision project to angle, speed up with 0.1 each hit
    let player = (ball.x <= canvas.width/2 ) ? user : com;
    if( collision(ball, player)){
        let collidePoint = ball.y - (player.y + player.height/2);
        // normalization
        collidePoint = collidePoint / (player.height/2);
        // angle calculation
        let angleRad = (Math.PI/4) * collidePoint;
        let direction = (ball.x < canvas.width/2) ? 1 : -1;
        ball.velX = direction * Math.cos(angleRad) * ball.speed;
        ball.velY = direction * Math.sin(angleRad) * ball.speed;
        ball.speed += 0.1;
        console.log(ball.velX, ball.velY);
    }
    //
    if (ball.x - ball.r < 0){
        com.score++;
        read = true;
        resetBall();
    }else if(ball.x + ball.r > canvas.width){
        user.score++;
        read = true;
        resetBall();
    }
}
function resetBall(){
        ball.x = canvas.width/2;
        ball.y = canvas.height/2;
        ball.speed = 5;
        ball.velX = -ball.velX
        ball.velY = ball.velY
}


function game(){
    update(); // Game logic (Movements, collision detection, score update, etc)
    render(); // Calls the objects to be rendered
}

const frps = 60;
if (read == true){
    setTimeout(game, 3000)
}else{
    setInterval(game, 1000/frps);
}