export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
      ) {}
  }
}

const Me = new Japanese.Tokyo.Person('のざさん');
console.log(Me.name);

const meOsaka = new Japanese.Osaka.Person('のざやん');
console.log(meOsaka.name);

const Micheal = new English.Person('Micheal', 'Joseph', 'Jackson');
console.log(Micheal);