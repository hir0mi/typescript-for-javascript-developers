export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Noza',
  age: 65
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 18
}

// friend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
}
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;