import {createAction} from '@reduxjs/toolkit';
import { Films } from '../types/film';

export const setActiveGenre = createAction<{genre: string}>('film/setActiveGenre');

export const setFilmsByGenre = createAction<{filmsByGenre: Films}>('film/setFilmsByGenre');
