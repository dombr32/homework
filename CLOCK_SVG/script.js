"use strict";

let div = document.createElement("div");
let diameterInput = document.createElement("input");

diameterInput.setAttribute("type", "number");
diameterInput.setAttribute("name", "diameter");
diameterInput.setAttribute("name", "diameter");
diameterInput.setAttribute("min", "200");
diameterInput.setAttribute("max", "800");
div.appendChild(diameterInput);




let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Построить часы");
    div.appendChild(submit);

    document.body.appendChild(div);

    const SVGNS="http://www.w3.org/2000/svg";
    let clock = document.createElementNS(SVGNS,'svg');
    document.body.appendChild(clock);

    submit.addEventListener('click', clockBuild, false);

    function clockBuild (eo){
        eo=eo||window.event;

    document.body.removeChild(div);
    let diameter = diameterInput.value;
    const radius = diameter / 2;
    
            clock.setAttribute("id", "clock");
            clock.setAttribute("width", diameter);
            clock.setAttribute("height", diameter);

            //циферблат
            let circleBig = document.createElementNS(SVGNS,'circle');
            circleBig.setAttribute("cx", radius);
            circleBig.setAttribute("cy", radius);
            circleBig.setAttribute("r", radius);
            circleBig.setAttribute("fill", "yellow");
            clock.appendChild(circleBig);

            //электронное время
            let time = document.createElementNS(SVGNS,'text');
            let fontTime = diameter / 12;
            time.setAttribute("font-size", fontTime);

            //стрелки
            const arrowDown = diameter / 20; //находим расстояние смещения стрелки относительно центра

            let hourArrow = document.createElementNS(SVGNS,'line');
            hourArrow.setAttribute("stroke-width", diameter / 50);
            hourArrow.setAttribute("stroke", "black")
            hourArrow.setAttribute("x1", radius);
            hourArrow.setAttribute("y1", radius+arrowDown);
            hourArrow.setAttribute("x2", radius);
            hourArrow.setAttribute("y2", 0.5*radius);
            
            let minuteArrow = document.createElementNS(SVGNS,'line');
            minuteArrow.setAttribute("stroke-width", diameter / 70);
            minuteArrow.setAttribute("stroke", "black");
            minuteArrow.setAttribute("x1", radius);
            minuteArrow.setAttribute("y1", radius+arrowDown);
            minuteArrow.setAttribute("x2", radius);
            minuteArrow.setAttribute("y2", 0.3*radius);

            let secondArrow = document.createElementNS(SVGNS,'line');
            secondArrow.setAttribute("stroke-width", diameter / 100);
            secondArrow.setAttribute("stroke", "red");
            secondArrow.setAttribute("x1", radius);
            secondArrow.setAttribute("y1", radius+arrowDown);
            secondArrow.setAttribute("x2", radius);
            secondArrow.setAttribute("y2", 0.1*radius);



            //часовые круги
            for (let i=1; i<=12; i++){
                let smallCircle = document.createElementNS(SVGNS,'circle');

                smallCircle.setAttribute("r", diameter / 20);
                smallCircle.setAttribute("fill", "green");
                
                let number = document.createElementNS(SVGNS,'text');
                let fontNum = diameter / 14;
                number.setAttribute("font-size", fontNum);
                // number.setAttribute("fill", "black");
                number.style.fill="black";
                // number.setAttribute("x", smallCircleX);
                // number.setAttribute("y", smallCircleY);

                const angle = 30 * i / 180 * Math.PI; 
                const radius = diameter / 2;
                const l = 0.85 * radius; //длина до цифр от центра циферблата


                let smallCircleX = radius+l*Math.sin(angle);
                let smallCircleY = radius-l*Math.cos(angle);

                smallCircle.setAttribute("cx", smallCircleX);
                smallCircle.setAttribute("cy", smallCircleY);

                let numX, numY;

                if (i>9){
                    numX = smallCircleX-fontNum/2;
                    numY = smallCircleY+fontNum/4
                } else {
                    numX = smallCircleX-fontNum/3;
                    numY = smallCircleY+fontNum/4;
                }

            

                number.setAttribute("x", numX);
                number.setAttribute("y", numY);
                number.textContent=i;
                
                
                clock.appendChild(smallCircle);
                clock.appendChild(number);

            }

            function updateTime() {
    
                const currTime=new Date();
                const timeStr=formatDateTime(currTime);
                time.textContent=timeStr;
                console.log(timeStr);
            
                //положение электронных часов
                let timeLeft= diameter / 2 - time.offsetWidth / 2; 

                time.setAttribute("x", diameter / 3);
                time.setAttribute("y", diameter / 4);
                
            
                const deg = 6;  // градус вращения секундной стрелки за 1 сек
                let h = currTime.getHours() * 30;   //находим градус вращения часовой стрелки
                let m = currTime.getMinutes() * deg;    //находим градус вращения минутной стрелки
                let s = currTime.getSeconds() * deg;    //находим градус вращения секундной стрелки
                
                hourArrow.style.transformOrigin =  "center";  
                minuteArrow.style.transformOrigin = "center";
                secondArrow.style.transformOrigin = "center";
                    hourArrow.style.transform = `rotate(${(h)+(m/12)}deg)`;
                    minuteArrow.style.transform = `rotate(${(m)+(s/60)}deg)`;
                    secondArrow.style.transform = `rotate(${(s)}deg)`;
            }
         
            
            clock.appendChild(minuteArrow);
            clock.appendChild(hourArrow);
            clock.appendChild(secondArrow);
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