import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage';
import TvShowsPage from './Pages/TvShowsPage';
import ScrollToTop from './Components/Utilites/ScrollToTop';
import MovieDetailPage from './Pages/MovieDetailPage';
import SearchPage from './Pages/SearchPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" exact component={MoviesPage} />
            <Route path="/tv-shows" exact component={TvShowsPage} />
            <Route path="/:type/:id" exact component={MovieDetailPage} />
            <Route path="/search" exact component={SearchPage} />
            <Route path='/person' exact component={NotFoundPage} />
        </Switch>
    </Router>
  );
}

export default App;
