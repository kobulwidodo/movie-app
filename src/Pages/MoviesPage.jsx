import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import movieapi from '../api/movieapi'
import ButtonGrey from '../Components/ButtonGrey/ButtonGrey'
import Footer from '../Components/Footer/Footer'
import MovieList from '../Components/MoviesList/MovieList'
import Navigatebar from '../Components/Navbar/Navigatebar'
import SearchBar from '../Components/SearchBar/SearchBar'
import TitleSection from '../Components/TitleSection/TitleSection'
import popcornIcon from '../img/popcorn.svg'

const MoviesPage = () => {
    const [moviesList, setMoviesList] = useState({
        list: [],
        pageNumber: 1,
        search: ""
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDataDiscover = async () => {
            const res = await movieapi.get(`discover/movie?page=${moviesList.pageNumber}`)
            console.log(`data page ${moviesList.pageNumber} get`)
            const tempArr = res.data.results
            setMoviesList(m => ({ ...m, list: [...m.list, ...tempArr]}))
            setLoading(false)
        }
        const fetchDataSearch = async () => {
            const res = await movieapi.get(`search/movie?query=${moviesList.search}`)
            console.log(`search : ${moviesList.search}`)
            setMoviesList(m => ({ ...m, list: res.data.results }))
            setLoading(false)
        }
        if (moviesList.search === "") {
            fetchDataDiscover()
        } else {
            fetchDataSearch()
        }
    }, [moviesList.pageNumber, moviesList.search])

    const onChangeBro = (val) => {
        setMoviesList(mv => ({
            ...mv,
            search: val
        }))
        if (val === "") {
            setMoviesList(m => ({ 
                ...m, 
                list: [],
                pageNumber: 1
            }))
        }
    }

    return (
        <>
            <Navigatebar />
            <Container>
                <Row className="mt-5">
                    <Col md={6} className="order-md-responsive">
                        <TitleSection
                            img={popcornIcon}
                            title="Popular Movies"
                        />
                    </Col>
                    <Col md={6}>
                        <SearchBar onChange={(val) => onChangeBro(val)} />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <MovieList
                        moviesList={moviesList.list}
                        isLimit4={false}
                        loading={loading}
                    />
                </Row>
                <Row>
                    <div 
                        className="d-flex justify-content-center" 
                        onClick={() => setMoviesList(mv => ({
                            ...mv,
                            pageNumber: mv.pageNumber+1
                        }))}
                    >
                        <ButtonGrey text='Load Lagi' />
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default MoviesPage
