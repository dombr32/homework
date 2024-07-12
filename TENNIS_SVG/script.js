"use strict";

const SVGNS="http://www.w3.org/2000/svg";
let statusGame=0; //0-игра идет (ракетками можно управлять), 1-забит гол (ракетки не управляются)

// кнопка старт
let startButton = document.createElementNS(SVGNS, "svg");
startButton.setAttribute("width", "100px");
startButton.setAttribute("height", "30px");
startButton.style.cursor="pointer";
    let rectStart = document.createElementNS(SVGNS, "rect");
    rectStart.setAttribute("width", 100);
    rectStart.setAttribute("height", "30px");
    rectStart.style.fill="Silver";
    rectStart.style.stroke="black";

    let startText = document.createElementNS(SVGNS, "text");
    startText.setAttribute("font-size", "15px");
    startText.setAttribute("x", "30");
    startText.setAttribute("y", "20");
    startText.style.fill="black";
    startText.textContent="старт!";
       
startButton.appendChild(rectStart);
startButton.appendChild(startText);
startButton.addEventListener('click', start, false);

// score
let scoreTable = document.createElementNS(SVGNS, "svg");
scoreTable.setAttribute("width", "100px");
scoreTable.setAttribute("height", "30px");
scoreTable.style.marginLeft="200px";
    let score = document.createElementNS(SVGNS, "text");
    score.setAttribute("font-size", "30px");
    let blueGoals = 0;
    let greenGoals = 0;
    score.style.fill="black";
    score.setAttribute("x", "30");
    score.setAttribute("y", "25");
    score.textContent=blueGoals + ":" + greenGoals;
scoreTable.appendChild(score);

//game
let game = document.createElementNS(SVGNS, "svg");
game.setAttribute("width", "700px");
game.setAttribute("height", "300px");
// field
let field = document.createElementNS(SVGNS, "rect");
field.setAttribute("width", 700);
field.setAttribute("height", 300);
field.style.fill="Khaki";
// field.style.stroke="black";
    let fieldH = {
        width : 700,
        height : 300
    }

game.appendChild(field)
// rackets
// left 
let leftRacket = document.createElementNS(SVGNS, "rect");
leftRacket.setAttribute("width", 10);
leftRacket.setAttribute("height", 80);
leftRacket.style.fill="SteelBlue";
game.appendChild(leftRacket);

let racketLeftH = {
    posY : 0,
    speed : 0,
    width : 10,
    height: 80,

    update : function() {
        leftRacket.style.y=this.posY+"px";
    }
}

// right
let rightRacket = document.createElementNS(SVGNS, "rect");
rightRacket.setAttribute("width", 10);
rightRacket.setAttribute("height", 80);
rightRacket.setAttribute("x", 690);
rightRacket.setAttribute("y", 0);
rightRacket.style.fill="Lime";
game.appendChild(rightRacket);

let racketRightH = {
    posY : 0,
    posX : 690,
    speed : 0,
    width : 10,
    height: 80,

    update : function() {
        rightRacket.style.y=this.posY+"px";
    }
}

// ball
let ball = document.createElementNS(SVGNS, "circle");
ball.setAttribute("r", 20);
ball.setAttribute("cx", 350);
ball.setAttribute("cy", 150);
ball.style.fill="IndianRed";
game.appendChild(ball);
    let ballH = {
        posX : 350,
        posY : 150,
        speedX : 6,
        speedY : 6,
        width : 40,
        height: 40,
        radius: 20,

        update : function() {
            ball.style.cx=this.posX+"px";
            ball.style.cy=this.posY+"px";
        }
    }

let goal; //для определения стороны, забившей гол

function start() {
    
    gameTick()
    // let angle = Math.random()  * Math.PI 
    ballH.posX=350;
    ballH.posY=150;
    // ballH.speedX = 6 * Math.cos(angle);
    // ballH.speedY = 6 * Math.sin(angle);

    if (goal == "left"){
        ballH.speedX = -6;
    } if (goal == "right"){
        ballH.speedX = 6;
    }

    ballH.speedY = 6;
    
    statusGame=0;
    ballH.update();
    // debugger
    
}

setInterval(gameTick,40);

// обработчик кнопок управления
window.addEventListener('keydown', moveRackets);

function moveRackets (eo) {
    eo=eo||window.event; 
    //  console.log(eo.key)

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

    function gameTick() {
        
        ballH.posX+=ballH.speedX;
        // right side
        if ( ballH.posX+ballH.radius>racketRightH.posX+racketLeftH.width ) {
            blueGoals++;
            ballH.speedX=0;
            ballH.speedY=0;
            ballH.posX=fieldH.width-ballH.radius; 
            goal = "left";
            statusGame = 1;
        }
    
        if ( ballH.posX+ballH.radius>racketRightH.posX  && 
            ballH.posY+ballH.radius > racketRightH.posY && 
            ballH.posY-ballH.radius < racketRightH.posY + racketRightH.height ) {
            ballH.speedX=-ballH.speedX;
            ballH.posX=racketRightH.posX-ballH.radius; 
        }
    
    
        // left side
        if ( ballH.posX-ballH.radius<0 ) {
            greenGoals++;
            ballH.speedX=0;
            ballH.speedY=0;
            ballH.posX=ballH.radius; 
            goal="right";
            statusGame = 1;
        }
    
        if ( ballH.posX-ballH.radius<racketLeftH.width && 
            ballH.posY+ballH.radius > racketLeftH.posY && 
            ballH.posY+ballH.radius < racketLeftH.posY + racketLeftH.height ) {
            ballH.speedX=-ballH.speedX;
            ballH.posX=racketLeftH.width+ballH.radius; 
        }
    
        ballH.posY+=ballH.speedY;
        // низ
        if ( ballH.posY+ballH.radius>fieldH.height ) {
            ballH.speedY=-ballH.speedY;
            ballH.posY=fieldH.height-ballH.radius;
        }
        // верх
        if ( ballH.posY-ballH.radius<0 ) {
            ballH.speedY=-ballH.speedY;
            ballH.posY=ballH.radius;
        }
    
        //позиционированние ракеток
        if (statusGame==0){
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
        }    
        
        //забит гол (ракетки не управляются)
        if (statusGame==1){
            racketLeftH.speed=0;
            racketRightH.speed=0
        }

        
        
        score.textContent=blueGoals + ":" + greenGoals;
        ballH.update();
        racketLeftH.update();
        racketRightH.update();
    }

let enter = document.createElement("br");
document.body.appendChild(startButton);
document.body.appendChild(scoreTable);
document.body.appendChild(enter);
document.body.appendChild(game)