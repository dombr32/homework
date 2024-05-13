function vowelsForEach (text){
    const vowels = ('аяоёуюэеыи');
    const arr = text.toLowerCase().split('');
    const f = word => {
        if (vowels.includes(word))
        totalVowel ++
    }
    let totalVowel = 0;
    arr.forEach(f);
    console.log(totalVowel);

}

function vowelsFilter (text){
    const vowels = ('аяоёуюэеыи');
    const arr = text.toLowerCase().split('');
    //const ff = word => vowels.includes(word)
    //const totalVowel = arr.filter(word => vowels.includes(word)).length;
    console.log(arr.filter(word => vowels.includes(word)).length)
}

function vowelsReduce (text){
    const vowels = ('аяоёуюэеыи');
    const arr = text.toLowerCase().split('');    
    //const fm = (r, word) => {
    //    return r+=vowels.includes(word)
    //}
    console.log(arr.reduce((r, word) => {
        return r+=vowels.includes(word)
    }, 0))
}

const text = prompt("Введите текст")
vowelsForEach (text);
vowelsFilter (text);
vowelsReduce (text)
