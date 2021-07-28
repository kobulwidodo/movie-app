import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from '../Components/Jumbotron/Jumbotron';
import MovieList from '../Components/MoviesList/MovieList';
import Navigatebar from '../Components/Navbar/Navigatebar';

const HomePage = () => {
    return (
        <>
            <Navigatebar />
            <Container fluid="xxl" className="mt-4">
                <Jumbotron 
                    title="Selamat Datang di Movies App"
                    subtitle="Cari dan temukan lebih dari 1000 film dan series favorit disini."
                />
            </Container>
            <MovieList />
        </>
    )
}

export default HomePage
