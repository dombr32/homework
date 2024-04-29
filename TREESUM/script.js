function treesum (arr) {
  let sum=0;
  for (let i=0; i < arr.length; i++) {

  let item = arr[i]
  if ( Array.isArray(item)){
    sum += treesum (item)
  } else {
    sum += item
  }
} 
  return sum  
}

console.log (treesum([0,5,[4],7]))