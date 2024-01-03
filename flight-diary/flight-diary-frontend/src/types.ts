export enum Weather {
  Windy = "windy",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Sunny = "sunny"
}

export enum Visibility {
  Poor = "poor",
  Good = "good"
}

export interface Diary {
  id: number,
  date: string,
  weather: Weather,
  visibility: Visibility,
  comment?: string
}