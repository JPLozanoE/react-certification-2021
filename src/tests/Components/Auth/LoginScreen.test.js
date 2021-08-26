/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/Auth/LoginScreen';

describe('Pruebas en <LoginScreen />', () => {
  test('Debe mostrarse correctamente', () => {
    const wrapper = shallow(<LoginScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
