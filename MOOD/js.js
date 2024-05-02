function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
const colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

console.log( 'цветов: ' + colorsCount );
    
const usedColors = {}
    for ( let i=1; i<=colorsCount; i++ ) {
        const n=randomDiap(1,7);
        const colorName=colors[n];
            if (!(colorName in usedColors)){
                usedColors[colorName]=1
                console.log( colorName )} else {
                colorsCount++
                }        
    }
}

mood(3);