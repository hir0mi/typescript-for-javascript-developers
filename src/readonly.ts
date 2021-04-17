export {};

class VisaCard {
  // readonly owner: string;

  // constructor(owner: string) {}
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('のざさん');
console.log(myVisaCard.owner);
//myVisaCard.owner = 'ベーコン';