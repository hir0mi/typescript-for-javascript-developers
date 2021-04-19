export {};

let name = 'Takashi';

let nickname = 'Ham' as const;
nickname = 'Ham';

let profile = {
  name: 'Takashi',
  height: 198
} as const;

// profile.name = 'Ham';
// profile.height = 188;