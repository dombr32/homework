
  function sumArray (array){
    let sum = 0
    for (let i=0; i < array.lenght; i++)
      if (Array.isArray(i)){
      sum += sumArray(i)} else{
      sum += i}
    return sum 
  }
 
  console.log(sumArray([ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8 ]))

