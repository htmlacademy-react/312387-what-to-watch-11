import {createReducer} from '@reduxjs/toolkit';
import {setActiveGenre, loadFilms, setFilmsDataLoadingStatus, loadPromo, requireAuthorization, loadUser} from './action';
import {AuthorizationStatus, FilmValue} from '../const';
import {Film, Films} from '../types/film';
import { UserData } from '../types/user-data';

type InitalState = {
  promo?: Film;
  films: Films;
  activeGenre: string;
  isFilmsDataLoading: boolean;
  user?: UserData;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  films: [],
  activeGenre: FilmValue.DefaultStateGenre as string,
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      const {genre} = action.payload;
      state.activeGenre = genre;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(loadUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
