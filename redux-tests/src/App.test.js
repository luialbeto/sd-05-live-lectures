import React from 'react';
import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import renderWithRedux from './helpers/renderWithRedux';

import App from './App';

describe('clients enrolment', () => {
  const renderAppWithRouter = (initialEntries = ['/']) => (
    <Router history={createMemoryHistory({ initialEntries })}>
      <App />
    </Router>
  )
  
  test('renders initial page(HOME)', () => {
    const { getByText } = renderWithRedux(
      renderAppWithRouter(),
      { initialState: { registerReducer: [], loginReducer: {} } }
    )

    const textOfPage = getByText('Bem-vindo ao sistema de cadastramento!');
    expect(textOfPage).toBeInTheDocument();

    const linkElement = getByText('Faça seu Login');
    expect(linkElement).toBeInTheDocument();
  })

  test('clicks on link to page login and tests login', () => {
    const { getByText, getByTestId, queryByText } = renderWithRedux(
      renderAppWithRouter(),
      { initialState: { registerReducer: [], loginReducer: {} } },
    )

    fireEvent.click(getByText('Faça seu Login'));

    const inputEmail = getByTestId('input-email');
    const inputSenha = getByTestId('input-senha');
    const buttonLogin = getByTestId('btn-login');

    expect(inputEmail.value).toBe('');

    fireEvent.change(inputEmail, { target: { value: 'usuario001' } });
    expect(inputEmail.value).toBe('usuario001');

    expect(inputSenha.value).toBe('');

    fireEvent.change(inputSenha, { target: { value: '1234' } });
    expect(inputSenha.value).toBe('1234');

    fireEvent.click(buttonLogin);

    expect(queryByText('Nenhum cliente cadastrado')).toBeInTheDocument();
  })

  test('when there are no clients, show enrollment link', () => {
    const { getByText } = renderWithRedux(
      renderAppWithRouter(['/clients']),
      { initialState: { registerReducer: [], loginReducer: { email: 'usuario001', password: '1234' } } },
    )

    const clientsInfo = getByText('Nenhum cliente cadastrado');
    expect(clientsInfo).toBeInTheDocument();

    const buttonRegisterClient = getByText('Cadastre agora!');
    expect(buttonRegisterClient).toBeInTheDocument();
  })

  test('should register three users', () => {
    const { getByText, getByTestId } = renderWithRedux(
      renderAppWithRouter(['/register']),
      { initialState: { registerReducer: [], loginReducer: { email: 'usuario001', password: '1234' } } },
    )
    
    const givenUsers = [
      { name: 'Red', age: '11', email: 'kantochampion@pokemon.net' },
      { name: 'Ash', age: '10', email: 'ash@pokemon.net' },
      { name: 'Brock', age: '14', email: 'brock@pokemon.net' },
    ];

    const registerName = getByTestId(/input-register-nome/);
    const registerIdade = getByTestId(/input-register-idade/);
    const registerEmail = getByTestId(/input-register-email/);

    givenUsers.forEach((elem) => {
      expect(registerName.value).toBe('');
      expect(registerIdade.value).toBe('');
      expect(registerEmail.value).toBe('');

      fireEvent.change(registerName, { target: { value: elem.name }});
      expect(registerName.value).toBe(elem.name);

      fireEvent.change(registerIdade, { target: { value: elem.age }});
      expect(registerIdade.value).toBe(elem.age);

      fireEvent.change(registerEmail, { target: { value: elem.email }});
      expect(registerEmail.value).toBe(elem.email);

      fireEvent.click(getByText(/Registrar Cliente/i));
    })

  })

  test('enrolled client should appear after we return to Clients page', () => {
    const { getByText } = renderWithRedux(
      renderAppWithRouter(['/register']),
      {
        initialState: {
          registerReducer: [
            { name: 'Red', age: '11', email: 'kantochampion@pokemon.net' },
            { name: 'Ash', age: '10', email: 'ash@pokemon.net' },
            { name: 'Brock', age: '14', email: 'brock@pokemon.net' },
          ],
          loginReducer: { email: 'usuario001', password: '1234' },
        }
      },
    )

    fireEvent.click(getByText(/Ver clientes cadastrados/));

    const user1Name = getByText(/Nome: Red/)
    const user1Email = getByText(/kantochampion@pokemon.net/);
    const user2Name = getByText(/Nome: Ash/);
    const user2Idade = getByText(/10/);
    const user3Name = getByText(/Nome: Brock/);
    const user3Idade = getByText(/14/);
  })

})