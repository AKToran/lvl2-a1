type numberArray = number[];

const filterEvenNumbers = (array:numberArray): numberArray=>{
  let result:numberArray = array.filter((elem:number) => elem % 2 ===0 )
  return result;
}


const reverseString= (str: string):string =>{
  let reversed = [...str].reverse().join("");
  return reversed;
}


type StringOrNumber = string | number;

const checkType = (param: StringOrNumber): string =>{
  if(typeof param === "number") {
    return "Number";
  }
  else{
    return "String";
  }
}


const getProperty = <T> (object:T, key: keyof T) =>{
  return object[key];
}



interface IBook {
  title: string;
  author: string;
  publishedYear: number;
}

interface IBookWithReadStatus extends IBook {
  isRead: boolean;
}

const toggleReadStatus = (book: IBook):IBookWithReadStatus =>{
  return {
    ...book, 
    isRead: true
  };
}
