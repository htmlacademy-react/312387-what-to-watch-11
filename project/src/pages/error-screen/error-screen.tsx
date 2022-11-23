import {useAppDispatch} from '../../hooks';
import {fetchFilmsAction} from '../../store/api-actions';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <p className="error__text">Не удалось загрузить Фильмы</p>
      <button
        onClick={() => {
          dispatch(fetchFilmsAction());
        }}
        className="replay replay--error"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </>
  );
}

export default ErrorScreen;
