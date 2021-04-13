export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('のざ', 67);
console.log(me);