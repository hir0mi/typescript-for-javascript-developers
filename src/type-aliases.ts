export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Noza',
  age: 76
};

type Profile = {
  name: string,
  age: number
};

const example2: Profile = {
  name: 'Noza',
  age: 76
};

type Profile2 = typeof example1;
