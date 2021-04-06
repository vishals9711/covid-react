import React from 'react';
import Container from 'react-bootstrap/Container';
import './PageLayout.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import DetailsPage from '../DetailsPage/DetailsPage';
const PageLayout = (): React.ReactElement => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/:id">
            <DetailsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default PageLayout;
