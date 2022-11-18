import {UserData} from './user-data';

export type Review = {
  id?: number;
  comment: string;
  rating: number;
  user?: UserData;
  date?: string;
}

export type Reviews = Review[];
