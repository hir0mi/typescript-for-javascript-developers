export {};

let profile1: object = { name: 'noza' };
profile1 = { birthYear: 1991 };

let profile2: {} = { name: 'noza' };
profile2 = { birthYear: 1991 };

let profile3: {
  name: string;
} = { name: 'noza' };
//profile3 = { birthYear: 1991 };
profile3 = { name: 'Hoge' };


