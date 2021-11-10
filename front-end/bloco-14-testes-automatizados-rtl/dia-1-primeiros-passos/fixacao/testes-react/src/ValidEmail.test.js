import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testa a validação de Email', () => {
  it('Testando um componente caso o email seja válido', () => {
    const EMAIL_USER = 'user@user.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Valido');
    expect(isValid).toBeInTheDocument();
  });
  it('Testando o componente caso o email seja inválido', () => {
    const WRONG_EMAIL = 'emailerrado';
    render(<ValidEmail email={ WRONG_EMAIL } />);
    const notValid = screen.getByText('Email Inválido');
    expect(notValid).toBeInTheDocument();
  })
});