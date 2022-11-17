import {Helmet} from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import PageHeader from '../../components/page-header/page-header';
import {useAppSelector} from '../../hooks';

function MyListScreen(): JSX.Element {

  const smallFilmCards = useAppSelector((state) => state.films);

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

      <footer className="page-footer">
        <Logo light />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
