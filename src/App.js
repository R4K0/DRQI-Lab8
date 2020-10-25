import React from 'react';
import Content from './components/Content';
import PageHeader from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Read from './components/Read';
import Create from './components/Create';
import { Container } from 'react-bootstrap';

class DefaultApp extends React.Component {
  render(){
    return (
      <Router>
        <PageHeader></PageHeader>
        <br />
        <Container>
            <Switch>
              <Route exact path='/' component={Content} />
              <Route exact path='/read' component={Read} />
              <Route exact path='/create' component={Create}/>
            </Switch>
        </Container>
      </Router>
    )
  }
}

export default DefaultApp;
