import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import movieapi from '../api/movieapi'
import MovieDetail from '../Components/MovieDetail/MovieDetail'
import Navigatebar from '../Components/Navbar/Navigatebar'

const MovieDetailPage = () => {
    const [movieData, setMovieData] = useState([])
    const [genres, setGenres] = useState([])
    const [crewData, setCrewData] = useState([])
    const [loading, setLoading] = useState(true)
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await movieapi.get(`movie/${id}`)
            setMovieData(res.data)
            setGenres(res.data.genres)
            const resActor = await movieapi.get(`movie/${id}/credits`)
            setCrewData(resActor.data)
            setLoading(false)
        }
        fetchData()
    }, [id])
    return (
        <>
            <Navigatebar />
            <MovieDetail 
                img={movieData.poster_path}
                title={movieData.original_title}
                year={movieData.release_date}
                procedure={movieData.production_companies && (movieData.production_companies.length === 0 ? 'NaN' : movieData.production_companies[0].name)}
                tagline={movieData.tagline}
                synopsis={movieData.overview}
                genres={genres}
                date={movieData.release_date}
                rating={movieData.vote_average}
                director={crewData.crew && crewData.crew.filter((n) => n.job === 'Director')}
                loading={loading}
            /> 
        </>
    )
}

export default MovieDetailPage
