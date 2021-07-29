import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import movieapi from '../../api/movieapi'
import CardMovies from '../CardMovies/CardMovies'

const MovieList = (props) => {
    const [moviesList, setMoviesList] = useState([])
    const moviesArray = JSON.stringify(moviesList)
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await movieapi.get(`/discover/movie`, {
                params: { },
            })
            setMoviesList(res.data.results)
        }
        fetchData()
    }, [moviesArray])

    return (
        <>
            <Container>
                <Row>
                    { props.isLimit4 ? moviesList.slice(0, 4).map((movie) => (
                        <Col lg={3} sm={6} key={movie.id}>
                            <CardMovies
                                key={movie.id}
                                ImagePoster={movie.poster_path}
                                TitlePoster={movie.title}
                                DatePoster={movie.release_date}
                            />
                        </Col>
                    )) : moviesList.map((movie) => (
                        <Col lg={3} sm={6} key={movie.id}>
                            <CardMovies
                                key={movie.id}
                                ImagePoster={movie.poster_path}
                                TitlePoster={movie.title}
                                DatePoster={movie.release_date}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default MovieList
