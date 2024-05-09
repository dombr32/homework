
function f (word) {
        
    const vowel = {У:true, у:true, е:true, Е:true, Ы:true, ы:true, О:true, о:true, Э:true, э:true, я:true, Я:true, И:true, 
        и:true, Ю:true, ю:true, Ё:true, ё:true, А:true, а:true};
    let total = 0;
    const used = {}
    if (word in vowel){
        used[word]=true
        console.log(Object.keys(used).length)
    }
    
}

function ff (word) {
    const vowel = {У:true, у:true, е:true, Е:true, Ы:true, ы:true, О:true, о:true, Э:true, э:true, я:true, Я:true, И:true, 
        и:true, Ю:true, ю:true, Ё:true, ё:true, А:true, а:true};
    return (word in vowel)
}

function fm (r, word){
    const vowel = {У:true, у:true, е:true, Е:true, Ы:true, ы:true, О:true, о:true, Э:true, э:true, я:true, Я:true, И:true, 
        и:true, Ю:true, ю:true, Ё:true, ё:true, А:true, а:true};
    
    if (word in vowel)
    word = 1; else 
    word=0
    return r+word
}
    
    let text = prompt('Введите текст');
    let textarr = text.split("");
    textarr.forEach(f);
    console.log(textarr.filter(ff))
    console.log(textarr.reduce(fm, 0))