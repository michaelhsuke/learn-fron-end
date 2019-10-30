import { createStore } from 'redux';
import reducer from './reducers'

export default function configureStore(initalState) {
  const store = createStore(reducer, initalState);
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
