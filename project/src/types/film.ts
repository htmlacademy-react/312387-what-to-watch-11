
export type Film = {
  id: number;
  title: string;
  genre: string;
  year: string;
  img: string;
  bgImage?: string;
  time: string;
  src: string;
  director: string;
  starring: string[];
  description: string;
}

export type Films = Film[];
