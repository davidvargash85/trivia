import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Header } from './Components';
import { IntroPage, TriviaPage, ResultsPage } from './Pages';
import './App.css';

function App () {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Body>
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/trivia" component={TriviaPage} />
          <Route path="/results" component={ResultsPage} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </Layout.Body>
      {/* <Layout.Footer>
        <Footer />
      </Layout.Footer> */}
    </Layout>
  );
}

export default App;
