import React from 'react';
import Home from './pages/home';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Home/>
    </Provider>
  );
}

export default App;
