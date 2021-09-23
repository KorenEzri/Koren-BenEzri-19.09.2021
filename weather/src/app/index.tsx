import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, HashRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage, Header } from './components';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Helmet
        titleTemplate="%s - Weather"
        defaultTitle="Weather"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A Weather application" />
      </Helmet>
      <Switch>
        <Route exact path="/:key">
          <HomePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <GlobalStyle />
    </HashRouter>
  );
}
