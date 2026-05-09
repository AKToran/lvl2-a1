type numberArray = number[];

const filterEvenNumbers = (array:numberArray): numberArray=>{
  let result:numberArray = array.filter((elem:number) => elem % 2 ===0 )
  return result;
}

