import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/users/:id' component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
