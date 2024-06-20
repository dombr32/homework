"use strict";

let div = document.createElement("div");
let diameterInput = document.createElement("input");

diameterInput.setAttribute("type", "number");
diameterInput.setAttribute("name", "diameter");
diameterInput.setAttribute("name", "diameter");
diameterInput.setAttribute("min", "200");
diameterInput.setAttribute("max", "800");
div.appendChild(diameterInput);

let clock = document.createElement("div");
document.body.appendChild(clock);


let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Построить часы");
    div.appendChild(submit);

    document.body.appendChild(div);

    submit.addEventListener('click', clockBuild, false);

    function clockBuild (eo){
        eo=eo||window.event;

    document.body.removeChild(div);
    let diameter = diameterInput.value;
    
            clock.setAttribute("id", "clock");
            clock.style.borderRadius = "50%";
            clock.style.width = diameter + "px";
            clock.style.height = diameter + "px";
            clock.style.backgroundColor = "yellow";
            
            
            let time = document.createElement("span");
            time.style.position = "absolute";
            time.style.fontSize=diameter / 12 + "px";
            time.setAttribute("id", "time");
            
            let hourArrow = document.createElement("div");
            hourArrow.style.height = diameter / 4 +'px';
            hourArrow.style.width = diameter / 50 +'px'; //'8px';
            hourArrow.style.backgroundColor = "black";
            hourArrow.style.position="absolute";
            hourArrow.style.borderRadius = "40%";
            
            let minuteArrow = document.createElement("div");
            minuteArrow.style.height = diameter / 3 +'px';
            minuteArrow.style.width = diameter / 70 +'px'; //'6px';
            minuteArrow.style.backgroundColor = "black";
            minuteArrow.style.position="absolute";
            minuteArrow.style.borderRadius = "40%";
            
            let secondArrow = document.createElement("div");
            secondArrow.style.height = diameter / 2 +'px';
            secondArrow.style.width = diameter / 100 +'px'; //'3px';
            secondArrow.style.backgroundColor = "red";
            secondArrow.style.position="absolute";
            secondArrow.style.borderRadius = "40%";
            secondArrow.style.zIndex = "1";
            
            clock.appendChild(minuteArrow);
            clock.appendChild(hourArrow);
            clock.appendChild(secondArrow);
            
            
            

    //находим координаты центра циферблата относительно всего документа
    let clockCenterX=clock.offsetLeft+clock.offsetWidth/2;  
    let clockCenterY=clock.offsetTop+clock.offsetHeight/2;

function updateTime() {
    
    const currTime=new Date();
    const timeStr=formatDateTime(currTime);
    time.innerHTML=timeStr;
    console.log(timeStr);

    //положение электронных часов
    time.style.left= (diameter / 2 - time.offsetWidth / 2) + 'px'; 
    time.style.top= diameter / 4 + 'px';

    const deg = 6;  // градус вращения секундной стрелки за 1 сек
    let h = currTime.getHours() * 30;   //находим градус вращения часовой стрелки
    let m = currTime.getMinutes() * deg;    //находим градус вращения минутной стрелки
    let s = currTime.getSeconds() * deg;    //находим градус вращения секундной стрелки
    
    hourArrow.style.transformOrigin =  `center ${(hourArrow.offsetHeight)-(arrowDown)}px`;  //отнимаем от длины стрелки её часть (переменнную arrowDown) для правильности вращения
    minuteArrow.style.transformOrigin = `center ${(minuteArrow.offsetHeight)-(arrowDown)}px`;
    secondArrow.style.transformOrigin = `center ${(secondArrow.offsetHeight)-(arrowDown)}px`;
        hourArrow.style.transform = `rotate(${(h)+(m/12)}deg)`;
        minuteArrow.style.transform = `rotate(${(m)+(s/60)}deg)`;
        secondArrow.style.transform = `rotate(${(s)}deg)`;
}



for (let i=1; i<=12; i++){
    let smallCircle = document.createElement("div");
    smallCircle.setAttribute("id", "smallCircle");
    smallCircle.style.position="absolute";
    smallCircle.style.fontSize=diameter / 14 + "px";
    smallCircle.style.borderRadius = "50%";
    smallCircle.style.width = diameter / 10 + "px";
    smallCircle.style.height = diameter / 10 + "px";
    smallCircle.style.backgroundColor = "green";
    smallCircle.style.display = "flex";
    smallCircle.style.justifyContent = "center";
    smallCircle.style.alignItems = "center";
    smallCircle.innerHTML=i;
    clock.appendChild(smallCircle);
    const angle = 30 * i / 180 * Math.PI; 
    const radius = diameter / 2;
    const l = 0.85 * radius; //длина до цифр от центра циферблата
    
    const smallCircleCenterX=clockCenterX+l*Math.sin(angle);
    const smallCircleCenterY=clockCenterY-l*Math.cos(angle);

    smallCircle.style.left=
    (smallCircleCenterX-smallCircle.offsetWidth/2)+'px';
    smallCircle.style.top=
    (smallCircleCenterY-smallCircle.offsetHeight/2)+'px';
}

const arrowDown = diameter / 20; //находим расстояние смещения стрелки относительно центра
const hourArrowCenterY=clockCenterY-hourArrow.offsetHeight+arrowDown; //центр стрелки будет находиться немного выше длины самой стрелки
hourArrow.style.left= clockCenterY + 'px';
hourArrow.style.top=hourArrowCenterY+'px';

const minuteArrowCenterY=clockCenterY-minuteArrow.offsetHeight+arrowDown;
minuteArrow.style.left= clockCenterY + 'px';
minuteArrow.style.top=minuteArrowCenterY+'px';

const secondArrowCenterY=clockCenterY-secondArrow.offsetHeight+arrowDown;
secondArrow.style.left= clockCenterY + 'px';
secondArrow.style.top=secondArrowCenterY+'px';


clock.appendChild(time);

//запускаем функцию для отображения текущего времени сразу, и далее для продолжения работы времени
updateTime();
setInterval(updateTime,1000);

        return
}

    
// форматирует время в формате чч:мм:сс
function formatDateTime(dt) {
    const hours=dt.getHours();
    const minutes=dt.getMinutes();
    const seconds=dt.getSeconds();
    return  str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
}

    // дополняет строку val слева нулями до длины Len
function str0l(val,len) {
    let strVal=val.toString();
    while ( strVal.length < len )
        strVal='0'+strVal;
    return strVal;
}
