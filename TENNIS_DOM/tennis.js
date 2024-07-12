"use strict";
//start button
let startButton = document.createElement("input");
startButton.setAttribute("type", "submit");
startButton.setAttribute("value", "старт!");
startButton.style.backgroundColor = 'Silver';
startButton.style.marginBottom = '10px';
startButton.style.cursor = 'pointer';
startButton.addEventListener('click', start, false);
document.body.appendChild(startButton);

// score table
let score = document.createElement('span');
let green = 0;
let blue = 0;
score.style.fontSize = "40px";
score.style.marginLeft = '280px';
score.innerHTML= '0:0';
document.body.appendChild(score);

//tennis field
let field = document.createElement('div');
field.style.width = '700px';
field.style.height = '300px';
field.style.backgroundColor = 'Aquamarine';
field.style.position = 'relative';
field.style.border = '1px black solid';

let fieldH = {
    width : 700,
    height : 300
}

// ball
let ball = document.createElement('div');
ball.style.width = '40px';
ball.style.height = '40px';
ball.style.borderRadius = '50%';
ball.style.backgroundColor = 'Indigo';
ball.style.position = 'absolute';

let ballH = {
    posX : 320,
    posY : 130,
    speedX : 6,
    speedY : 6,
    width : 40,
    height: 40,

    update : function() {
        ball.style.left=this.posX+"px";
        ball.style.top=this.posY+"px";
    }
}

field.appendChild(ball)

//racket left
let racketLeft = document.createElement('div');
racketLeft.style.backgroundColor = 'DeepPink';
racketLeft.style.width = '10px';
racketLeft.style.height = '80px';
racketLeft.style.position = 'absolute';
field.appendChild(racketLeft);

let racketLeftH = {
    posY : 0,
    posX : 0,
    speed : 0,
    width : 10,
    height: 80,

    update : function() {
        racketLeft.style.top=this.posY+"px";
    }
}


//racket right
let racketRight = document.createElement('div');
racketRight.style.width = '10px';
racketRight.style.height = '80px';
racketRight.style.backgroundColor = 'YellowGreen';
racketRight.style.position = 'absolute';
racketRight.style.left = '690px'
field.appendChild(racketRight);

let racketRightH = {
    posY : 0,
    posX : 690, 
    speed : 0,
    width : 10,
    height: 80,

    update : function() {
        racketRight.style.top=this.posY+"px";
    }
}

let goal;


document.body.appendChild(field);

function start() {
    game()
    // setInterval(game,25);
    // let angle = Math.random()  * Math.PI 
    ballH.posX=320;
    ballH.posY=120;
    // ballH.speedX = 6 * Math.cos(angle);
    // ballH.speedY = 6 * Math.sin(angle);

    if (goal == "left"){
        ballH.speedX = -6;
    } if (goal == "right"){
        ballH.speedX = 6;
    }
    ballH.speedY = 6;

    ballH.update();
    // debugger
    
}
setInterval(game,40);

window.addEventListener('keydown', moveRackets);

function moveRackets (eo) {
    eo=eo||window.event; 
     console.log(eo.key)

    // racket left
    if (eo.key === 'Control'){
        racketLeftH.speed=5;     
    };

    if (eo.key === 'Shift'){
        racketLeftH.speed=-5;
    }
    
    //racket right
    if (eo.key === 'ArrowUp'){
        racketRightH.speed=-5;
    };

    if (eo.key === 'ArrowDown'){
        racketRightH.speed=5;
    };
    

};

    document.addEventListener('keyup', function (eo){
        //racket right
        eo=eo||window.event; 
        if (eo.key === 'ArrowUp'){
        racketRightH.speed=0;
    };

        if (eo.key === 'ArrowDown'){
            racketRightH.speed=0;
    };   
    
    
        if (eo.key === 'Shift'){
            racketLeftH.speed=0;
    };

        if (eo.key === 'Control'){
            racketLeftH.speed=0;
    };   
    })


function game() {

    score.innerHTML= green + ':' + blue;    //обновление счёта

    ballH.posX+=ballH.speedX;
    // right side
    if ( ballH.posX+ballH.width>field.offsetWidth ) {
        green+=1;
        ballH.speedX=0;
        ballH.speedY=0;
        ballH.posX=field.width-ballH.width; 
        goal = "left";
    }

    if ( ballH.posX+ballH.width>racketRightH.posX  && 
        ballH.posY+ballH.height/2 > racketRightH.posY && 
        ballH.posY+ballH.height/2 < racketRightH.posY + racketRightH.height ) {
        // debugger
        ballH.speedX=-ballH.speedX;
        ballH.posX=racketRightH.posX-ballH.width; 
    }


    // left side
    if ( ballH.posX<0 ) {
        blue+=1;
        ballH.speedX=0;
        ballH.speedY=0;
        ballH.posX=field.width-ballH.width; 
        goal="right";
    }

    if ( ballH.posX<racketLeftH.width + racketLeftH.posX && 
        ballH.posY+ballH.height/2 > racketLeftH.posY && 
        ballH.posY+ballH.height/2 < racketLeftH.posY + racketLeftH.height ) {
        // debugger
        ballH.speedX=-ballH.speedX;
        ballH.posX=racketLeftH.posX+racketLeftH.width; 
    }

    ballH.posY+=ballH.speedY;
    // низ
    if ( ballH.posY+ballH.height>fieldH.height ) {
        ballH.speedY=-ballH.speedY;
        ballH.posY=fieldH.height-ballH.height;
    }
    // верх
    if ( ballH.posY<0 ) {
        ballH.speedY=-ballH.speedY;
        ballH.posY=0;
    }

    //позиционированние ракеток
    racketLeftH.posY+=racketLeftH.speed;

    if ( racketLeftH.posY<0 || racketLeftH.posY + racketLeftH.height>fieldH.height){
        racketLeftH.posY-=racketLeftH.speed;
        racketLeftH.speed=0;
        
    }

    racketRightH.posY+=racketRightH.speed;

    if (racketRightH.posY<0 || racketRightH.posY + racketRightH.height>fieldH.height){
        racketRightH.posY-=racketRightH.speed;
        racketRightH.speed=0
    }

    ballH.update();
    racketLeftH.update();
    racketRightH.update();
}




ballH.update();
