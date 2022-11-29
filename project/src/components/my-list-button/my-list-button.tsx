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

  function handleAddButtonClick() {
    dispatch(setFavoriteAction([filmId, true]));
  }

  function handleRemoveButtonClick() {
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
      onClick={inMyList ? handleRemoveButtonClick : handleAddButtonClick}
    >
      {renderIcon()}
      <span>My list</span>
      <span className="film-card__count">{isFavoriteDataLoading ? '...' : favorites.length}</span>
    </button>
  );
}

export default memo(MyListButton);
