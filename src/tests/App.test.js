import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';

describe('Pruebas en <App/>', () => {
  test('Renders without crashing', () => {
    const root = document.createElement('div');
    ReactDOM.render(
      // eslint-disable-next-line react/jsx-filename-extension
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root
    );
  });

  test('Debe mostrarse correctamente', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
