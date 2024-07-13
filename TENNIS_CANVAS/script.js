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

let statusGame=0; //0-игра идет (ракетками можно управлять), 1-забит гол (ракетки не управляются)

    
let field = document.createElement('canvas');
    field.setAttribute("width",'700px');
    field.setAttribute('height', '300px');

    let context = field.getContext('2d');
    context.fillStyle='Khaki';
    context.fillRect(0,0, field.width, field.height);


let fieldH = {
    width : 700,
    height : 300,

    
    ballPosX : 350,
    ballPosY : 150,
    ballSpeedX : 6,
    ballSpeedY : 6,
    ballWidth : 40,
    ballHeight: 40,
    ballRadius: 20,

    leftRacketPosY : 0,
    leftRacketSpeed : 0,
    leftRacketWidth : 10,
    leftRacketHeight: 80,
    
    rightRacketPosY : 0,
    rightRacketPosX : 690,
    rightRacketSpeed : 0,
    rightRacketWidth : 10,
    rightRacketHeight: 80,

    update : function() {
        context.clearRect(0, 0, this.width, this.height);
        context.fillStyle='Khaki';
        context.fillRect(0,0,  this.width, this.height);
             
        // мяч
        context.beginPath();
        context.globalCompositeOperation='source-over';
        context.arc(this.ballPosX, this.ballPosY, 20, 0, Math.PI*2);
        context.fillStyle='IndianRed';
        context.fill();

        // левая ракетка
        context.beginPath();
        context.strokeStyle="SteelBlue";
        context.moveTo(this.leftRacketWidth/2, this.leftRacketPosY);
        context.lineTo(this.leftRacketWidth/2, this.leftRacketPosY+this.leftRacketHeight);
        context.lineWidth=this.leftRacketWidth;
        context.stroke();

        // правая ракетка
        context.beginPath();
        context.strokeStyle="Lime";
        context.moveTo(this.rightRacketPosX+this.rightRacketWidth/2, this.rightRacketPosY);
        context.lineTo(this.rightRacketPosX+this.rightRacketWidth/2, this.rightRacketPosY+this.rightRacketHeight);
        context.lineWidth=this.rightRacketWidth;
        context.stroke();
    }
}

let scoreTable = document.createElement('canvas');
    scoreTable.setAttribute("width", "100px");
    scoreTable.setAttribute("height", "30px");
    scoreTable.style.marginLeft="200px";
    let contextScore = scoreTable.getContext('2d');

let score = {
    blueGoals : 0,
    greenGoals : 0,
    width : 100,
    height : 30,

    update : function() {
        contextScore.clearRect(0, 0, this.width, this.height);
        
        contextScore.fillStyle='black';
        contextScore.font = '30px serif';
        contextScore.fillText(this.blueGoals + ":" + this.greenGoals, 30,25);
    }
}

let goal; //для определения стороны, забившей гол

function start() {
    
    gameTick()
    
    fieldH.ballPosX=350;
    fieldH.ballPosY=150;


    if (goal == "left"){
        fieldH.ballSpeedX = -6;
    } if (goal == "right"){
        fieldH.ballSpeedX = 6;
    }

    fieldH.ballSpeedY = 6;
    
    statusGame=0;
    ballH.update();
    
}


setInterval (gameTick,40);

// обработчик кнопок управления
window.addEventListener('keydown', moveRackets);

function moveRackets (eo) {
    eo=eo||window.event; 
    //  console.log(eo.key)

    // racket left
    if (eo.key === 'Control'){
        fieldH.leftRacketSpeed=5;     
    };

    if (eo.key === 'Shift'){
        fieldH.leftRacketSpeed=-5;
    }
    
    //racket right
    if (eo.key === 'ArrowUp'){
        fieldH.rightRacketSpeed=-5;
    };

    if (eo.key === 'ArrowDown'){
        fieldH.rightRacketSpeed=5;
    };
    
    

};

    document.addEventListener('keyup', function (eo){
        //racket right
        eo=eo||window.event; 
        if (eo.key === 'ArrowUp'){
            fieldH.rightRacketSpeed=0;
    };

        if (eo.key === 'ArrowDown'){
            fieldH.rightRacketSpeed=0;
    };   
    
    
        if (eo.key === 'Shift'){
            fieldH.leftRacketSpeed=0;
    };

        if (eo.key === 'Control'){
            fieldH.leftRacketSpeed=0;
    };   
    })

 function gameTick (){

    fieldH.ballPosX+=fieldH.ballSpeedX;
    
    // right side
    if ( fieldH.ballPosX+fieldH.ballRadius>fieldH.width) {
        score.blueGoals++;
        fieldH.ballSpeedX=0;
        fieldH.ballSpeedY=0;
        fieldH.ballPosX=fieldH.width-fieldH.ballRadius; 
        goal = "left";
        statusGame = 1;
    }

    if ( fieldH.ballPosX+fieldH.ballRadius>fieldH.rightRacketPosX && 
        fieldH.ballPosY+fieldH.ballRadius > fieldH.rightRacketPosY && 
        fieldH.ballPosY-fieldH.ballRadius < fieldH.rightRacketPosY + fieldH.rightRacketHeight ) {
        fieldH.ballSpeedX=-fieldH.ballSpeedX;
        fieldH.ballPosX=fieldH.rightRacketPosX - fieldH.ballRadius; 
    }

    // left side
    if ( fieldH.ballPosX-fieldH.ballRadius<0 ) {
        score.greenGoals++;
        fieldH.ballSpeedX=0;
        fieldH.ballSpeedY=0;
        fieldH.ballPosX=fieldH.ballRadius; 
        goal="right";
        statusGame = 1;
    }

    if ( fieldH.ballPosX-fieldH.ballRadius< fieldH.leftRacketWidth && 
        fieldH.ballPosY+fieldH.ballRadius > fieldH.leftRacketPosY && 
        fieldH.ballPosY-fieldH.ballRadius < fieldH.leftRacketPosY  + fieldH.leftRacketHeight ) {
        fieldH.ballSpeedX=-fieldH.ballSpeedX;
        fieldH.ballPosX=fieldH.leftRacketWidth + fieldH.ballRadius; 
    }

     fieldH.ballPosY+=fieldH.ballSpeedY;
    // низ
    if ( fieldH.ballPosY+fieldH.ballRadius>fieldH.height ) {
        fieldH.ballSpeedY=-fieldH.ballSpeedY;
        fieldH.ballPosY=fieldH.height-fieldH.ballRadius;
    }

    // верх
    if ( fieldH.ballPosY-fieldH.ballRadius<0 ) {
        fieldH.ballSpeedY=-fieldH.ballSpeedY;
        fieldH.ballPosY=fieldH.ballRadius;
    }


    // rackets position

    if (statusGame==0){
        fieldH.leftRacketPosY+=fieldH.leftRacketSpeed;
            
        if ( fieldH.leftRacketPosY<0 || fieldH.leftRacketPosY + fieldH.leftRacketHeight>fieldH.height){
            fieldH.leftRacketPosY-=fieldH.leftRacketSpeed;
            fieldH.leftRacketSpeed=0;
        }

        fieldH.rightRacketPosY+=fieldH.rightRacketSpeed;

        if (fieldH.rightRacketPosY<0 || fieldH.rightRacketPosY + fieldH.rightRacketHeight>fieldH.height){
            fieldH.rightRacketPosY-=fieldH.rightRacketSpeed;
            fieldH.rightRacketSpeed=0
        }
}

    //забит гол (ракетки не управляются)
    if (statusGame==1){
        fieldH.leftRacketSpeed=0;
        fieldH.rightRacketSpeed=0
    }

     fieldH.update();
     score.update();
 }
 

document.body.appendChild(scoreTable);
let enter = document.createElement("br"); 
document.body.appendChild(enter);
document.body.appendChild(field);