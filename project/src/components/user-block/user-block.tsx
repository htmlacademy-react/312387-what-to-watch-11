import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';

function UserBlock(): JSX.Element {

  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <Link
            to="/"
            className="user-block__link"
            onClick={(evt: React.MouseEvent) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >
            Sign out
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <Link to="/login" className="user-block__link">Sign in</Link>
    </ul>
  );
}

export default UserBlock;
