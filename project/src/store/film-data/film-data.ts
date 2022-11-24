import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilmValue, NameSpace} from '../../const';
import {FilmData} from '../../types/state';
import {fetchFilmsAction, fetchPromoAction, fetchFilmAction, fetchReviewsAction, fetchFavoritesAction} from '../api-actions';

const initialState: FilmData = {
  films: [],
  reviews: [],
  favorites: [],
  activeGenre: FilmValue.DefaultStateGenre as string,
  isFilmDataLoading: false,
  isFilmsDataLoading: false,
  isFavoriteDataLoading: false,
  hasError: false,
};


export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setActiveGenre: (state, action: PayloadAction<{genre: string}>) => {
      const {genre} = action.payload;
      state.activeGenre = genre;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(fetchPromoAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmDataLoading = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isFilmDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoriteDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoriteDataLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isFavoriteDataLoading = false;
        state.hasError = true;
      });
  }
});

export const {setActiveGenre} = filmData.actions;
