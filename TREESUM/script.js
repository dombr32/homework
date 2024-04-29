
  function sumArray (array){
    let sum = 0
    for (let i=0; i < array.length; i++) {
      const item = array[i]
      if (Array.isArray(item)){
      sum += sumArray(item)} else{
      sum += item}
    }
    return sum 
  }

console.log(sumArray ([4, 5, [13, [4, 5]]]))

// console.log(sumArray([ 5, 7, 
//   [ 4, [2], 8, [1,3], 2 ], 
//   [ 9, [] ], 
//   1, 8 ]))
