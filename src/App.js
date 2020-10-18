import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import PageHeader from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SecondContent from './components/SecondContent';

class DefaultApp extends React.Component {
  render(){
    return (
      <Router>
        <PageHeader></PageHeader>
        <div>
            <br/>
            <Switch>
              <Route exact path='/' component={Content} />
              <Route exact path='/footer' component={Footer} />
              <Route exact path='/header' component={SecondContent}/>
            </Switch>
        </div>
      </Router>
    )
  }
}

export default DefaultApp;
