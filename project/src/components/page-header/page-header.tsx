import Logo from '../logo/logo';
import cn from 'classnames';
import UserBlock from '../user-block/user-block';

type PageHeaderProps = {
  filmCount?: number;
}

function PageHeader({filmCount}: PageHeaderProps): JSX.Element {

  return (
    <header
      className={cn(
        'page-header',
        {'film-card__head': !filmCount},
        {'user-page__head': filmCount}
      )}
    >
      <Logo />

      {filmCount &&
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{filmCount}</span></h1>}

      <UserBlock />
    </header>
  );
}

export default PageHeader;
