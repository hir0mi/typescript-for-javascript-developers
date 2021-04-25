export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Tottori' | 'Chiba' | 'Shiga';

type Covid19InfecttionInfo = {
  kanji_name: string;
  confirmed_case: number;
}

const covid19Japan: Record<Prefectures, Covid19InfecttionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_case: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_case: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_case: 2 },
  Shiga: { kanji_name: '滋賀', confirmed_case: 13 } ,
}