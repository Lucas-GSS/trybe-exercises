import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from './App';

test('Renderiza o componente App', () => {
  renderWithRouter(<App />);
  const titleEl = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(titleEl).toBeInTheDocument();

});

test('Testa se o link Sobre, ao ser clicado, rediciona para a a página Sobre', () => {
  const { history } = renderWithRouter(<App />);
  const LINK_ABOUT = screen.getByRole('link', {
    name: 'Sobre',
  });
  expect(LINK_ABOUT).toBeInTheDocument();
  userEvent.click(LINK_ABOUT);
  expect(history.location.pathname).toBe('/about');
});

test('Testa se o link Início, ao ser clicado, redireciona para a página Início', () => {
  const { history } = renderWithRouter(<App />)
  const LINK_HOME = screen.getByRole('link', {
    name: /início/i,
  });
  userEvent.click(LINK_HOME);
  expect(history.location.pathname).toBe('/')
});

test('Testa se ao receber um caminho de url inexistente, renderiza o componente NotFound', () => {
  const { history } = renderWithRouter(<App />)
  history.push('/blabla');
  const notFound = screen.getByRole('heading', {
    name: /página não encontrada/i,
  });
  expect(notFound).toBeInTheDocument();
});
