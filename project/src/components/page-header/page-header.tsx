import Logo from '../logo/logo';
import cn from 'classnames';
import UserBlock from '../user-block/user-block';
import {memo} from 'react';

type PageHeaderProps = {
  filmCount?: number;
}

function PageHeader({filmCount}: PageHeaderProps): JSX.Element {

  const isMyListPage = filmCount !== undefined;

  return (
    <header
      className={cn(
        'page-header',
        {'film-card__head': !isMyListPage},
        {'user-page__head': isMyListPage}
      )}
    >
      <Logo />

      {isMyListPage &&
        <h1 className="page-title user-page__title">
          My list {Number(filmCount) > 0 && <span className="user-page__film-count">{filmCount}</span>}
        </h1>}

      <UserBlock />
    </header>
  );
}

export default memo(PageHeader, (prevProps, nextProps) => prevProps.filmCount === nextProps.filmCount);
