import React from 'react';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

// função auxiliadora (helper), recebe o componente como parâmetro, o renderiza dentro do Router, passa a prop history
// para o componente e retorna o history criado para ter acesso a suas propriedades e possibilitar o teste da rota
const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return({
    ...render(<Router history={history}>{component}</Router>),
    history,
  });
};

export default renderWithRouter;
