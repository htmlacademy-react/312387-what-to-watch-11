import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

enum FilmCard {
  Title = 'The Grand Budapest Hotel',
  Genre = 'Drama',
  Year = '2014'
}

export interface SmallCard {
  id: number;
  title: string;
  img: string;
}

const smallFilmCards: SmallCard[] = [
  {id: 1, title: 'Fantastic Beasts: The Crimes of Grindelwald', img: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'},
  {id: 2, title: 'Bohemian Rhapsody', img: 'img/bohemian-rhapsody.jpg'},
  {id: 3, title: 'Macbeth', img: 'img/macbeth.jpg'},
  {id: 4, title: 'Aviator', img: 'img/aviator.jpg'},
  {id: 5, title: 'We need to talk about Kevin', img: 'img/we-need-to-talk-about-kevin.jpg'},
  {id: 6, title: 'What We Do in the Shadows', img: 'img/what-we-do-in-the-shadows.jpg'},
  {id: 7, title: 'Revenant', img: 'img/revenant.jpg'},
  {id: 8, title: 'Johnny English', img: 'img/johnny-english.jpg'},
  {id: 9, title: 'Shutter Island', img: 'img/shutter-island.jpg'},
  {id: 10, title: 'Pulp Fiction', img: 'img/pulp-fiction.jpg'},
  {id: 11, title: 'No Country for Old Men', img: 'img/no-country-for-old-men.jpg'},
  {id: 12, title: 'Snatch', img: 'img/snatch.jpg'},
  {id: 13, title: 'Moonrise Kingdom', img: 'img/moonrise-kingdom.jpg'},
  {id: 14, title: 'Seven Years in Tibet', img: 'img/seven-years-in-tibet.jpg'},
  {id: 15, title: 'Midnight Special', img: 'img/midnight-special.jpg'},
  {id: 16, title: 'War of the Worlds', img: 'img/war-of-the-worlds.jpg'},
  {id: 17, title: 'Dardjeeling Limited', img: 'img/dardjeeling-limited.jpg'},
  {id: 18, title: 'Orlando', img: 'img/orlando.jpg'},
  {id: 19, title: 'Mindhunter', img: 'img/mindhunter.jpg'},
  {id: 20, title: 'Midnight Special', img: 'img/midnight-special.jpg'}
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmTitle={FilmCard.Title}
      filmGenre={FilmCard.Genre}
      filmYear={FilmCard.Year}
      smallFilmCards={smallFilmCards}
    />
  </React.StrictMode>,
);
