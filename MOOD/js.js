function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
const colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

console.log( 'цветов: ' + colorsCount );
    

    for ( let i=1; i<=colorsCount; i++ ) {
        const n=randomDiap(1,7);
        const colorName=colors[n];
        console.log( colorName );
            if ( n==colors.length)
            delete colors[n-i-1]; else
            delete colors[n-i]
        
    }
}

mood(3);