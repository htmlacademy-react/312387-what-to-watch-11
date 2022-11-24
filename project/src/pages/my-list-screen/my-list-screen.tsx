import {Helmet} from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import PageHeader from '../../components/page-header/page-header';
import {useAppSelector} from '../../hooks';
import {getFavorites, getFavoriteDataLoadingStatus} from '../../store/film-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

function MyListScreen(): JSX.Element {

  const smallFilmCards = useAppSelector(getFavorites);
  const isFavoriteDataLoading = useAppSelector(getFavoriteDataLoadingStatus);

  if (isFavoriteDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">

      <Helmet>
        <title>WTW my list</title>
      </Helmet>

      <PageHeader filmCount={smallFilmCards.length} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList smallFilmCards={smallFilmCards} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
