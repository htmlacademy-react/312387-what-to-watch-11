import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {Film, Films} from './film';
import {Reviews} from './review';
import {UserData} from './user-data';

export type FilmData = {
  promo?: Film;
  film?: Film;
  reviews: Reviews;
  activeGenre: string;
  isFilmDataLoading: boolean;
  films: Films;
  isFilmsDataLoading: boolean;
  hasError: boolean;
};

export type UserProcess = {
  user?: UserData;
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
