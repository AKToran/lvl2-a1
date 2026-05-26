# Generics: Variable for types

In TypeScript Generics allows us to create classes and functions that work with a variety of types while maintaining full type integrity. Just as we pass arguments to a function, we pass types to a Generic. This ensures that the relationship between input and output remains type safe. 

By using a type parameter (conventionally <T>), we can capture our provided type so that we can use it later. This keeps a component or function type safe while also being dynamic.  

```
type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["Fahim", "Rafi", "Arafat"];

const rollNumbers: GenericArray<number> = [8, 4, 2];

```
Here we made a Generic for arrays which we can use to for any types of arrays. We simply say the type when making the array. 

Using Generic in functions: Let's say we need a function to add pets to Abid's collection. Type of pet is not fixed because it can have varying properties. 
```
const addPetsToCollection = <T>(petInfo: T) => {
  return {
    owner: "Abid",
    ...petInfo,
  };
};

const pet1 = {
  id: 1,
  name: "Tiger",
  petType: "Dog",
};

const pet2 = {
  id: 2,
  name: "Mitu",
  petType: "Bird"
  canTalk: true,
};

```
Here we made a generic function to add an owner property to any type of data structures passed into it. The function does not have a fixed type. When we pass an object to the function, Typescript looks at the passed object and infers the type based on the passed object. 

Generics are the way to go when we need a type dynamic component or function. It makes our code clean, reduces redundancy while also being type safe. 