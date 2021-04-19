export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [ index: string ]: string | number | boolean;
};

let profile: Profile = { name: 'Ham', underTwenty: false };

// How to write index signature
// { [ index: typeForIndex ]: TypeForValue }
profile.name = 'Ham';
profile.age = 55;
profile.nationality = 'Japan';
