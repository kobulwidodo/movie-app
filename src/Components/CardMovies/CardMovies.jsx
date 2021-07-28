import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const PosterWrap = styled.div`
    /* max-width: 222px; */
    text-align: center;
    margin-top: 30px;
    padding: 22px;
`

const ImagePoster = styled.img`
    width: 100%;
    border-radius: 15px;
`

const TitlePoster = styled.div`
    font-weight: 500;
    font-size: 0.8125rem;
    color: #434343;
    margin-top: 15px;
`

const DatePoster = styled.div`
    font-weight: 300;
    font-size: 0.8125rem;
    color: #6D6D6D;
    margin-top: 6px;
`

const CardMovies = (props) => {
    return (
        <PosterWrap>
            <Link to="#" style={{ textDecoration: 'none' }}>
                <ImagePoster src={"http://image.tmdb.org/t/p/w342/" + props.ImagePoster} />
                <TitlePoster>{props.TitlePoster}</TitlePoster>
                <DatePoster>{props.DatePoster}</DatePoster>
            </Link>
        </PosterWrap>
    )
}

export default CardMovies
