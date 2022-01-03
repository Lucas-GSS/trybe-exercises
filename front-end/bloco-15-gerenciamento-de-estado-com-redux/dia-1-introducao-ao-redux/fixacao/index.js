<<<<<<< HEAD
// Após instalar o redux, importá-lo
const Redux = require('redux');

// reducer, que recebe estado inicial e uma action, como no type da action realiza uma mudança no estado
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return({
        ...state, 
        login: !state.login,
        email: action.email,
      })
    default:
      return state
  }
};

// Como boa prática definir o estado inicial numa variável
const initialState = { login: false, email: '' };

// actionCreator, uma função que retorna um objeto action com pelo menos a propriedade type
const logar = (email) => ({ type: 'LOGIN', email });

// criando a store com o reducer
const store = Redux.createStore(reducer);

// O método subscribe executa uma callback sempre que uma action é disparada
store.subscribe(() => console.log(store.getState()));

// acessando o estado na store
//console.log(store.getState());

// enviando a action para o reducer
store.dispatch(logar('lucas@gmail.com'));

=======
const Redux = require('redux');
const INITIAL_STATE = { login: false, email:"" };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Login':
      return({
        ...state,
        login: !state.login,
        email: action.email
      })

    default:
      return state;
  }
};

const myAction = (email) => ({type: 'Login', email});

const store = Redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(myAction('lucas@gmail.com'));
>>>>>>> 08ae79361d387175d264c876a0e3559f519335f1
