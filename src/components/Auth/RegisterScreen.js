/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import validator from 'validator';
// import { useDispatch, useSelector } from 'react-redux';
import { firebase } from '../../firebase/firebase-config';
import { useForm } from '../../hooks/useForm';
import { StyledLink } from '../../pages/Auth/styles/Auth';
import { Button, Input, Title } from './styles/AuthStyles';
// import { removeError, setError } from '../../actions/ui';
// import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';

export const RegisterScreen = () => {
  const { dispatch } = useContext(AppContext);
  //   const dispatch = useDispatch();
  //   const { ui } = useSelector((state) => state);
  //   const { msgError } = ui;
  //   console.log(msgError);

  const [{ name, email, password, password2 }, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const isFormValid = () => {
    // let error=false;

    // if (name.trim().length === 0) {
    // console.log('Name is required')
    // error=true;
    //   dispatch(setError('Name is required'));
    // return false;
    // }

    // if (!validator.isEmail(email)) {
    // console.log('Email is not valid')
    // error=true;
    //   dispatch(setError('Email is not valid'));
    // return false;
    // }

    // if (password !== password2 || password.length < 5) {
    // console.log('Password should be at least 6 characters and match eachother');
    // error=true;
    //   dispatch(setError('Password should be at least 6 characters and match eachother'));
    // return false;
    // }
    // dispatch(removeError());
    return true;
    // return error===false ? true : false
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      //   dispatch(startRegisterWithEmailPasswordName(email, password, name));
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({ user }) => {
          await user.updateProfile({ displayName: name });
          console.log(user);
          dispatch({
            type: types.login,
            payload: { displayName: user.displayName, uid: user.uid },
          });

          // dispatch(login(user.uid, user.displayName));
        })
        .catch((error) => {
          console.error(error.message);
        });
      console.log('Formulario correcto');
    }
    // console.log(name,email,password,password2,)
  };

  return (
    <>
      <Title className="auth__title">Register</Title>
      <form onSubmit={handleRegister}>
        {/* {msgError && <div className="auth__alert-error">{msgError}</div>} */}

        <Input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <Input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <Input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <Input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />

        <Button
          // disabled={true}
          className="btn btn-primary btn-block mb-5"
          type="submit"
        >
          Register
        </Button>
        <div>
          <StyledLink to="/auth/login" className="link">
            Already registered?
          </StyledLink>
        </div>
      </form>
    </>
  );
};
