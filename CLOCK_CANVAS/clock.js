let clock = document.createElement('canvas');

clockBuild ();

function clockBuild (eo){
    eo=eo||window.event;

// document.body.removeChild(div);
let diameter = 400; //diameterInput.value;
const radius = diameter / 2;

clock.setAttribute("width", diameter);
clock.setAttribute("height", diameter);
        
function updateTime() {

        const context = clock.getContext('2d');
        context.beginPath();
        context.arc(radius, radius, radius, 0,Math.PI*2, false);
        context.fillStyle='yellow';
        context.fill();

        //часовые круги
        for (let i=1; i<=12; i++){

            const angle = 30 * i / 180 * Math.PI; 
            const radius = diameter / 2;
            const l = 0.85 * radius; //длина до цифр от центра циферблата
        
            let smallCircleX = radius+l*Math.sin(angle);
            let smallCircleY = radius-l*Math.cos(angle);
            let fontNum = diameter / 14;

            context.beginPath();
            context.arc(smallCircleX, smallCircleY, diameter / 20, 0,Math.PI*2, false);
            context.fillStyle='green';
            context.fill();
            
            context.fillStyle="black";
            context.textAlign='center';
            context.font= fontNum + 'px arial'; //
            const numberInCircleY = smallCircleY + fontNum / 3; 
            context.fillText(i, smallCircleX, numberInCircleY);
        }

            const currTime=new Date();
            const timeStr=formatDateTime(currTime);
            let fontTime = diameter / 12;
            context.font= fontTime + 'px arial'; 
            context.fillStyle="black";
            context.textAlign='center';
            context.fillText(timeStr, diameter / 2, diameter / 3);
            console.log(timeStr);
            
            //стрелки 
            const handDown = diameter / 20; //находим расстояние смещения стрелки относительно центра

            const deg = 6;  // градус вращения секундной стрелки за 1 сек
            let h = currTime.getHours() * 30;   //находим градус вращения часовой стрелки
            let m = currTime.getMinutes() * deg;    //находим градус вращения минутной стрелки
            let s = currTime.getSeconds() * deg;    //находим градус вращения секундной стрелки
            
            //часовая
            const lHour = 0.5 * radius; //длина до секундной стрелки
            //координаты смещения начальной точки стрелки
            let hourXStart = radius-handDown*Math.sin(((h)+(m/12))/ 180 * Math.PI);
            let horYStart = radius+handDown*Math.cos(((h)+(m/12))/ 180 * Math.PI);
            //координаты смещения конечной точки стрелки
            let hourXEnd = radius+lHour*Math.sin(((h)+(m/12))/ 180 * Math.PI);
            let hourYEnd = radius-lHour*Math.cos(((h)+(m/12))/ 180 * Math.PI);

            context.beginPath();
            context.strokeStyle="black";
            context.moveTo(hourXStart, horYStart);
            context.lineTo(hourXEnd, hourYEnd);
            context.lineWidth=diameter / 50;
            context.stroke();

            //минутная 
            const lMin = 0.7 * radius; //длина до секундной стрелки
            let minXStart = radius-handDown*Math.sin(((m)+(s/60))/ 180 * Math.PI);
            let minYStart = radius+handDown*Math.cos(((m)+(s/60))/ 180 * Math.PI);
            let minXEnd = radius+lMin*Math.sin(((m)+(s/60))/ 180 * Math.PI);
            let minYEnd = radius-lMin*Math.cos(((m)+(s/60))/ 180 * Math.PI);

            context.beginPath();
            context.strokeStyle="black";
            context.moveTo(minXStart, minYStart);
            context.lineTo(minXEnd, minYEnd);
            context.lineWidth=diameter / 70;
            context.stroke();

            //секундная
            const lSecond = 0.9 * radius; //длина до секундной стрелки
            let secondXStart = radius-handDown*Math.sin(s/ 180 * Math.PI);
            let secondYStart = radius+handDown*Math.cos(s/ 180 * Math.PI);
            let secondXEnd = radius+lSecond*Math.sin(s/ 180 * Math.PI);
            let secondYEnd = radius-lSecond*Math.cos(s/ 180 * Math.PI);

            context.beginPath();
            context.lineWidth=diameter / 100;
            context.strokeStyle="red";
            context.moveTo(secondXStart, secondYStart);
            context.lineTo(secondXEnd, secondYEnd);
            context.stroke();
        
        }

        //запускаем функцию для отображения текущего времени сразу, и далее для продолжения работы времени
        updateTime();
        setInterval(updateTime,1000);

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

document.body.appendChild(clock);