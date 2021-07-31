import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import movieapi from '../api/movieapi'
import MovieDetail from '../Components/MovieDetail/MovieDetail'
import MovieList from '../Components/MoviesList/MovieList'
import Navigatebar from '../Components/Navbar/Navigatebar'
import TitleSection from '../Components/TitleSection/TitleSection'
import TrailerCard from '../Components/TrailerCard/TrailerCard'
import popcornIcon from '../img/popcorn.svg'

const MovieDetailPage = () => {
    const [movieData, setMovieData] = useState([])
    const [genres, setGenres] = useState([])
    const [crewData, setCrewData] = useState([])
    const [trailerData, setTrailerData] = useState([])
    const [similiar, setSimiliar] = useState([])
    const [loading, setLoading] = useState(true)
    let { id, type } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await movieapi.get(`${type}/${id}`)
            setMovieData(res.data)
            setGenres(res.data.genres)
            const resActor = await movieapi.get(`${type}/${id}/credits`)
            setCrewData(resActor.data)
            const resTrailer = await movieapi.get(`${type}/${id}/videos`)
            setTrailerData(resTrailer.data.results)
            const resSimiliar = await movieapi.get(`${type}/${id}/similar`)
            setSimiliar(resSimiliar.data.results)
            setLoading(false)
        }
        fetchData()
    }, [id, type])
    return (
        <>
            <Navigatebar />
            <MovieDetail 
                img={movieData.poster_path}
                title={movieData.original_title ?? movieData.name}
                procedure={movieData.production_companies && (movieData.production_companies.length === 0 ? 'NaN' : movieData.production_companies[0].name)}
                tagline={movieData.tagline}
                synopsis={movieData.overview}
                genres={genres}
                date={movieData.release_date ?? movieData.first_air_date}
                rating={movieData.vote_average}
                director={crewData.crew && crewData.crew.filter((n) => n.job === 'Director')}
                loading={loading}
                isMovie={movieData.original_title ? true : false}
                episodeCount={movieData.number_of_episodes && movieData.number_of_episodes}
            />
            <Container>
                <div style={{ fontSize: '24px', textAlign: 'center', marginTop: '30px' }}>Trailer</div>
                <Row className="mt-4">
                    {trailerData.filter((n) => n.type === 'Trailer').slice(0, 2).map((n, idx) => (
                        <Col md={6} className="mb-3" key={idx}>
                            <TrailerCard
                                url={n.key}
                                title={n.name}
                                date={n.published_at}
                            />
                        </Col>
                    )) }
                </Row>
                <div className="mt-3">
                    <TitleSection
                        img={popcornIcon}
                        title="You May Like It"
                    />
                </div>
                <Row>
                    <MovieList
                        moviesList={similiar}
                        isLimit4={true}
                        loading={loading}
                    />
                </Row>
            </Container>
        </>
    )
}

export default MovieDetailPage
