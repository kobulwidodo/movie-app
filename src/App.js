import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage';
import TvShowsPage from './Pages/TvShowsPage';
import ScrollToTop from './Components/Utilites/ScrollToTop';
import MovieDetailPage from './Pages/MovieDetailPage';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" exact component={MoviesPage} />
            <Route path="/tv-shows" exact component={TvShowsPage} />
            <Route path="/movie/:id" exact component={MovieDetailPage} />
        </Switch>
    </Router>
  );
}

export default App;
