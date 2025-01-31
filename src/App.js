import React from 'react';
import Home from './pages/home';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Register from './pages/register';
import { NewArticle } from './pages/article';
import Search  from './pages/search'
import { GlobalStyleByIconfont } from './statics/iconfont/iconfont';
import Personnel from './pages/personnel';
import Information from './pages/personnel/pages/information';
import ArticleDetails from './pages/article/pages/articleDetails';
import UserHomePage from './pages/personnel/pages/userHomePage';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GlobalStyleByIconfont />
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/newArticle" exact component={NewArticle}></Route>
        <Route path="/search" exact component={Search}></Route>
        <Route path="/personnel" exact component={Personnel}></Route>
        <Route path="/information" exact component={Information}></Route>
        <Route path="/articleDetails" exact component={ArticleDetails}></Route>
        <Route path="/userHomePage" exact component={UserHomePage}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
