export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Takeshi';
  static lastName: string = 'Ishida';

  static work() {
    //     "Hey, guys! This is Takeshi. Are you interested in TypeScript?"
    return `Hey, guys! This is ${this.firstName}. Are you interested in TypeScript?`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
