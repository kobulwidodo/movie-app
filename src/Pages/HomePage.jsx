import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import popcornIcon from '../img/popcorn.svg'
import Jumbotron from '../Components/Jumbotron/Jumbotron';
import MovieList from '../Components/MoviesList/MovieList';
import Navigatebar from '../Components/Navbar/Navigatebar';
import TitleSection from '../Components/TitleSection/TitleSection';
import ButtonGrey from '../Components/ButtonGrey/ButtonGrey';
import movieapi from '../api/movieapi';

const HomePage = () => {
    const [moviesList, setMoviesList] = useState([])
    const moviesArray = JSON.stringify(moviesList)
    const [tvList, setTvList] = useState([])
    const tvArray = JSON.stringify(tvList)

    useEffect(() => {
        const fetchData = async () => {
            const res = await movieapi.get(`discover/movie`, {
                params: {},
            })
            setMoviesList(res.data.results)
        }
        fetchData()
    }, [moviesArray])

    useEffect(() => {
        const fetchData = async () => {
            const res = await movieapi.get(`trending/tv/week`, {
                params: {},
            })
            setTvList(res.data.results)
        }
        fetchData()
    }, [tvArray])

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
                <MovieList
                    moviesList={moviesList}
                    isLimit4={true}
                />
                <Row className="mt-5">
                    <div className="d-flex justify-content-between">
                        <TitleSection
                            img={popcornIcon}
                            title="Popular TV Shows"
                        />
                        <ButtonGrey
                            text='Lihat Semua'
                        />
                    </div>
                </Row>
                <MovieList
                    moviesList={tvList}
                    isLimit4={false}
                />
            </Container>
        </>
    )
}

export default HomePage
