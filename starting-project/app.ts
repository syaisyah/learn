// array, object
interface Person {
  name: string;
  age: number;
  hobbies: string[]; // any[]  ---> array of any datatype 
};

const person: Person = {
  name: "Aisyah",
  age: 20,
  hobbies: ["Eat", "Drink", "Sleep"],
};

for (let hobby of person.hobbies) {
  console.log(hobby)
}