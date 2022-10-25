import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';

import {SmallCard} from '../../index';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import FilmDetailScreen from '../../pages/film-detail-screen/film-detail-screen';

type AppScreenProps = {
  filmTitle: string;
  filmGenre: string;
  filmYear: string;
  smallFilmCards: SmallCard[];
}

function App(props: AppScreenProps): JSX.Element {

  const {filmTitle, filmGenre, filmYear, smallFilmCards} = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainScreen
                filmTitle={filmTitle}
                filmGenre={filmGenre}
                filmYear={filmYear}
                smallFilmCards={smallFilmCards}
              />
            }
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <MyListScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReviewScreen />}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerScreen />}
          />
          <Route
            path={AppRoute.Film}
            element={<FilmDetailScreen />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
