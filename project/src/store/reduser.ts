import {createReducer} from '@reduxjs/toolkit';
import {setActiveGenre, loadFilms, setFilmsDataLoadingStatus, loadPromo} from './action';
import {FilmValue} from '../const';
import {Film, Films} from '../types/film';

type InitalState = {
  promo: Film|null;
  films: Films;
  activeGenre: string;
  isFilmsDataLoading: boolean;
}

const initialState: InitalState = {
  promo: null,
  films: [],
  activeGenre: FilmValue.DefaultStateGenre as string,
  isFilmsDataLoading: false
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
    });
});

export {reducer};
