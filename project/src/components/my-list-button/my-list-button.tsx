import {memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setFavoriteAction} from '../../store/api-actions';
import {getFavoriteDataLoadingStatus, getFavorites} from '../../store/film-data/selectors';

type MyListButtonProps = {
  filmId: number;
}

function MyListButton({filmId}: MyListButtonProps): JSX.Element {

  const favorites = useAppSelector(getFavorites);
  const isFavoriteDataLoading = useAppSelector(getFavoriteDataLoadingStatus);

  const dispatch = useAppDispatch();

  function handelerAddButtonClick() {
    dispatch(setFavoriteAction([filmId, true]));
  }

  function handelerRemoveButtonClick() {
    dispatch(setFavoriteAction([filmId, false]));
  }

  const inMyList = favorites.some((item) => filmId === item.id);

  const renderIcon = (): JSX.Element => (
    <svg viewBox="0 0 19 20" width="19" height="20">
      {inMyList ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
    </svg>
  );

  return (
    <button
      className="btn btn--list film-card__button"
      disabled={isFavoriteDataLoading}
      type="button"
      onClick={inMyList ? handelerRemoveButtonClick : handelerAddButtonClick}
    >
      {renderIcon()}
      <span>My list</span>
      <span className="film-card__count">{isFavoriteDataLoading ? '...' : favorites.length}</span>
    </button>
  );
}

export default memo(MyListButton);
