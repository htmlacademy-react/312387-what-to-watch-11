import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import MyListButton from '../my-list-button/my-list-button';

type FilmCardButtonsProps = {
  filmId: number;
  isPromo?: boolean;
}

function FilmCardButtons({filmId, isPromo}: FilmCardButtonsProps) {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const renderPrivateButtons = (): JSX.Element => (
    <>
      <MyListButton filmId={filmId} />
      {!isPromo && <Link to={`/films/${filmId}/review`} className="btn film-card__button" >Add review</Link>}
    </>
  );

  return (
    <div className="film-card__buttons">
      <Link to={`/player/${filmId}`} className="btn btn--play film-card__button" >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>

      {authorizationStatus === AuthorizationStatus.Auth && renderPrivateButtons()}
    </div>
  );
}

export default memo(FilmCardButtons);
