import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';

import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import FilmDetailScreen from '../../pages/film-detail-screen/film-detail-screen';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

import {getAuthorizationStatus, getAuthCheckedStatus} from '../../store/user-process/selectors';
import {getFilmsDataLoadingStatus, getErrorStatus} from '../../store/film-data/selectors';
import ErrorScreen from '../../pages/error-screen/error-screen';
import {store} from '../../store';
import {fetchFavoritesAction} from '../../store/api-actions';
import {useEffect} from 'react';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  useEffect(() => {
    let isMyListMounted = true;

    if (isMyListMounted && authorizationStatus === AuthorizationStatus.Auth) {
      store.dispatch(fetchFavoritesAction());
    }

    return () => {
      isMyListMounted = false;
    };
  }, [authorizationStatus]);

  if (!isAuthChecked || isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorScreen />);
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainScreen />
            }
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <MyListScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <AddReviewScreen />
              </PrivateRoute>
            }
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
