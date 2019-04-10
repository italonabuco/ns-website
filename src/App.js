import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Company from './containers/Company/Company';
import NotFound from './containers/NotFound/NotFound';
import {BrowserRouter, Route, Switch}from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/empresa" component={Company}/>
              <Route component={NotFound}/>
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
