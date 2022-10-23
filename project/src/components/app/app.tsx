import MainScreen from '../../pages/main-screen/main-screen';

import {SmallCard} from '../../index';

type AppScreenProps = {
  filmTitle: string;
  filmGenre: string;
  filmYear: string;
  smallFilmCards: SmallCard[];
}

function App(props: AppScreenProps): JSX.Element {

  const {filmTitle, filmGenre, filmYear, smallFilmCards} = props;

  return (
    <MainScreen
      filmTitle={filmTitle}
      filmGenre={filmGenre}
      filmYear={filmYear}
      smallFilmCards={smallFilmCards}
    />
  );
}

export default App;
