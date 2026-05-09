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


class Person {
  name: string;
  age: number;

  constructor(name:string, age: number){
    this.name = name;
    this.age = age;
  }
}

type Grade = "A" | "B" | "C" | "D" | "E" | "F";

class Student extends Person {
  grade: Grade;

  constructor(name:string, age: number, grade: Grade) {
    super(name, age)
    this.grade = grade
  }

  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
  }
}
