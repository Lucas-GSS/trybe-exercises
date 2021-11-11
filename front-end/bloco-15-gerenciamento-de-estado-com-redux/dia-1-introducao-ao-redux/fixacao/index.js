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
