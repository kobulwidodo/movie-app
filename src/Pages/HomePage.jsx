import React from 'react';
import { Container, Row } from 'react-bootstrap';
import popcornIcon from '../img/popcorn.svg'
import Jumbotron from '../Components/Jumbotron/Jumbotron';
import MovieList from '../Components/MoviesList/MovieList';
import Navigatebar from '../Components/Navbar/Navigatebar';
import TitleSection from '../Components/TitleSection/TitleSection';
import ButtonGrey from '../Components/ButtonGrey/ButtonGrey';

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
            <Container>
                <Row className="mt-5">
                    <div className="d-flex justify-content-between">
                        <TitleSection
                            img={popcornIcon}
                            title="Popular Movies"
                        />
                        <ButtonGrey 
                            text='Lihat Semua'
                        />
                    </div>
                </Row>
            </Container>
            <MovieList 
                isLimit4={true}
            />
        </>
    )
}

export default HomePage
