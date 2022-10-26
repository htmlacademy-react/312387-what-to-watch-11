import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="not-found">

      <Helmet>
        <title>WTW not found</title>
      </Helmet>

      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
        </header>

        <div className="user-page__content sign-in__reset-password">
          <img src="/img/notfound.png" alt="not-found" />
        </div>

        <footer className="page-footer">
          <Logo light />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default NotFoundScreen;
