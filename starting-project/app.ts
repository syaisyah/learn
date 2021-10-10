// array, object
interface Person {
  name: string;
  age: number;
  hobbies: string[]; // any[]  ---> array of any datatype,
  contohTuple: [ number, string] //tupe ---> array with fixed length and type
}

const person: Person = {
  name: "Aisyah",
  age: 20,
  hobbies: ["Eat", "Drink", "Sleep"],
  contohTuple: [1, 'hai']
};

person.contohTuple.push('hello') // untuk push itu pengecualian (dibolehin)

console.log(person.contohTuple)

