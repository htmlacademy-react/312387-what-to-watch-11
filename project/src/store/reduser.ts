import {createReducer} from '@reduxjs/toolkit';
import {setActiveGenre, setFilmsByGenre} from './action';
import {films} from '../mocks/films';
import {FilmValue} from '../const';

const initialState = {
  activeGenre: FilmValue.DefaultStateGenre as string,
  filmsByGenre: films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      const {genre} = action.payload;
      state.activeGenre = genre;
    })
    .addCase(setFilmsByGenre, (state, action) => {
      const {filmsByGenre} = action.payload;
      state.filmsByGenre = filmsByGenre;
    });
});

export {reducer};
