import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <Switch>
            <Route path="/" exact component={HomePage} />
        </Switch>
    </Router>
  );
}

export default App;
