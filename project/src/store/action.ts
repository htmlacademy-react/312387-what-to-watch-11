import {createAction} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus} from '../const';
import {Film, Films} from '../types/film';
import { Reviews } from '../types/review';
import { UserData } from '../types/user-data';

export const setActiveGenre = createAction<{genre: string}>('film/setActiveGenre');

export const loadPromo = createAction<Film>('data/loadPromo');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadFilm = createAction<Film>('data/loadFilm');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loadUser = createAction<UserData>('user/loadUser');

export const redirectToRoute = createAction<AppRoute>('film/redirectToRoute');
