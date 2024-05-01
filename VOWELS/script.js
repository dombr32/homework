

function vowels(text){

const vowel = {У:true, у:true, е:true, Е:true, Ы:true, ы:true, О:true, о:true, Э:true, э:true, я:true, Я:true, И:true, 
    и:true, Ю:true, ю:true, Ё:true, ё:true, А:true, а:true};
let total = 0

for (let i=0; i<text.length; i++){
    const word=textarr[i];
    if (word in vowel)
        total += 1;
    
}
    return total
}

let text = prompt('Введите текст');
let textarr = text.split("");

 console.log (vowels(text))