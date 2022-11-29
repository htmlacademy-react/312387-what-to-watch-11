import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Film, Films} from '../../types/film';
import { Reviews } from '../../types/review';

export const getActiveGenre = (state: State): string => state[NameSpace.Data].activeGenre;

export const getPromo = (state: State): Film|undefined => state[NameSpace.Data].promo;

export const getFilm = (state: State): Film|undefined => state[NameSpace.Data].film;
export const getFilmDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmDataLoading;

export const getFilms = (state: State): Films => state[NameSpace.Data].films;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsDataLoading;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;

export const getReviews = (state: State): Reviews => state[NameSpace.Data].reviews;
export const getReviewDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isReviewDataLoading;

export const getFavorites = (state: State): Films => state[NameSpace.Data].favorites;
export const getFavoriteDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFavoriteDataLoading;
