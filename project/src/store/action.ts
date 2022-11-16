import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';

export const setActiveGenre = createAction<{genre: string}>('film/setActiveGenre');

export const loadPromo = createAction<Film>('data/loadPromo');

export const loadFilms = createAction<Films>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
