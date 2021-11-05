import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Área de inserção de E-mail', () => {
  it('Verifica se existe um input de Email', () => {
    render(<App />);
    // Acessar os elementos
    const inputEmail = screen.getByLabelText('Email:');
    // Interagir com os elementos (se necessário)
    // Fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  it('Verifica se existem dois botões na tela', () => {
    render(<App />);
    const btn = screen.getAllByRole('button');
    expect(btn).toHaveLength(2);
  })
  
  it('Verifica se existe o botão "Salvar"', () => {
    render(<App />)
    const sendBtn = screen.getByTestId('send-button');
    expect(sendBtn).toBeInTheDocument();
    expect(sendBtn).toHaveValue('Salvar')
  })
  
  it('Verifica que, ao digitar o email e clicar em "Enviar", o email é renderizado', () => {
    render(<App />);
    const EMAIL_USER = 'teste@teste.com';
    // Acessando os elementos
    const inputEmail = screen.getByLabelText("Email:");
    const btnSend = screen.getByTestId("send-button");
    const userEmail = screen.getByTestId("email-user");
    // Interagindo com os elementos
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
    // Testando elementos
    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});
