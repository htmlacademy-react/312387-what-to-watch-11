import * as EmailValidator from 'email-validator';
import cn from 'classnames';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import {FormEvent, useState, ChangeEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import Footer from '../../components/footer/footer';
import { ErrorMessage } from '../../const';

function LoginScreen(): JSX.Element {

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const dispatch = useAppDispatch();

  const checkPassword = (password: string) => password.match(/(?=.*[A-Za-zА-Яа-я])+(?=.*\d)+/);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    let isCorrect = true;

    if (!EmailValidator.validate(loginValue)) {
      isCorrect = false;
      setErrorEmail(true);
    }

    if (!checkPassword(passwordValue)) {
      isCorrect = false;
      setErrorPassword(true);
    }

    if (isCorrect) {
      onSubmit({
        login: loginValue,
        password: passwordValue,
      });
    }

  };

  const renderErrorMessage = (message: string): JSX.Element => (
    <div className="sign-in__message">
      <p>{message}</p>
    </div>
  );

  return (
    <div className="user-page">

      <Helmet>
        <title>Sign in</title>
      </Helmet>

      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleFormSubmit}
        >
          {errorEmail && renderErrorMessage(ErrorMessage.InvalidEmail)}
          {errorPassword && renderErrorMessage(ErrorMessage.InvalidPassword)}

          <div className="sign-in__fields">
            <div
              className={cn(
                'sign-in__field',
                {'sign-in__field--error': errorEmail}
              )}
            >
              <input
                className="sign-in__input"
                onChange={({target}: ChangeEvent<HTMLInputElement>) : void => {
                  if (errorEmail && EmailValidator.validate(target.value)) {
                    setErrorEmail(false);
                  }
                  setLoginValue(target.value);
                }}
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div
              className={cn(
                'sign-in__field',
                {'sign-in__field--error': errorPassword}
              )}
            >
              <input
                className="sign-in__input"
                onChange={({target}: ChangeEvent<HTMLInputElement>) : void => {
                  if (errorPassword && checkPassword(target.value)) {
                    setErrorPassword(false);
                  }
                  setPasswordValue(target.value);
                }}
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default LoginScreen;
