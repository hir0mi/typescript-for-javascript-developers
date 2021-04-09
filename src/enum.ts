export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

const MonthJS = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  Jun: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
}
console.log(MonthJS.January);
console.log(MonthJS.December);

enum COLORS {
  RED = '#FF0000',
  WHITTE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  //YELLOW = '#FFFF00',
  BLACK = '#000000'
};

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}

COLORS.YELLOW;