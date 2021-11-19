import { render, screen } from '@testing-library/react';
import App from './App';

describe("Testa o componente 'App'", () => {
  it("Testa se a piada é renderizada ao carregar o elemento", async () => {
    const joke = {
      id:'eiyAXnWS0g',
      joke: "The biggest knight at King Arthur's round table was Sir Cumference. He acquired his size from eating too much pi.",
      status: 200,
    }
    //Uma forma de fazer o mock de uma API
    // No contexto do teste, onde estiver o fetch vou sob escrevê-lo com minha simulação. É o que o global faz.
    // global.fetch = (url) => {
    //   return Promise.resolve({
    //     json: () => Promise.resolve(joke)
    //   });
    // };

    //Outra forma usando o spyOn()
    //mockResolvedValue está substituindo o .then()
    // jest.spyOn(global, "fetch")
    // .mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(joke)
    // });

    //Outra forma com async await
    global.fetch = jest.fn(async () => await Promise.resolve({
      json: async () => await Promise.resolve(joke)
    }));


    render(<App />);
    const jokeEl = await screen.findByText(joke.joke);
    expect(jokeEl).toBeInTheDocument();
  });
});
