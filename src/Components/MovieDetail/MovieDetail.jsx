import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const Poster = styled.img`
    border-radius: 15px;
    width: 100%;
    @media screen and (max-width: 767px) {
        padding-left: 5rem;
        padding-right: 5rem;
    }
`

const Title = styled.div`
    font-weight: 600;
    color: #3E3E3E;
    font-size: 1.5rem;
    margin-bottom: 3px;
    @media screen and (max-width: 767px) {
        margin-top: 30px;
    }
`

const Procedure = styled.div`
    font-weight: normal;
    color: #3F3F3F;
    font-size: 0.875rem;
    margin-bottom: 3px;
`

const Tagline = styled.div`
    font-style: italic;
    color: #747474;
    font-size: 0.875rem;
`

const ItemGroup = styled.div`
    margin-bottom: 20px;
`

const ItemTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #4A4A4A;
`

const ItemSubtitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #424242;
`

const SkeletonMovie = styled(Skeleton)`
    border-radius: 15px;
    margin: 22px;
`

const MovieDetail = (props) => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                    {props.loading ? (
                        <SkeletonMovie animation="wave" variant="rect" widht="100%" height={400} />
                    ) : (
                        <Poster src = {"http://image.tmdb.org/t/p/w342/" + props.img} />
                    )}
                </Col>
                <Col md={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                    <ItemGroup>
                        <Title>{props.loading ? <Skeleton variant="text" /> : props.title }</Title>
                        <Procedure>{props.loading ? <Skeleton variant="text" /> : props.procedure}</Procedure>
                        <Tagline>{props.loading ? <Skeleton variant="text" /> : props.tagline}</Tagline>
                    </ItemGroup>
                    <ItemGroup>
                        <ItemTitle>Genres</ItemTitle>
                        <ItemSubtitle>{props.loading ? <Skeleton variant="text" /> : props.genres.map((n, idx, arr) => {
                            if (arr.length - 1 === idx) {
                                return n.name
                            } else {
                                return n.name + ', '
                            }
                        })}</ItemSubtitle>
                    </ItemGroup>
                    <ItemGroup>
                        <ItemTitle>Synopsis</ItemTitle>
                        <ItemSubtitle>{props.loading ? <Skeleton variant="text" /> : props.synopsis}</ItemSubtitle>
                    </ItemGroup>
                    <div className="col-12" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', gap: '1rem' }}>
                        <div className="d-block me-5">
                            <ItemTitle>Released Date</ItemTitle>
                            <ItemSubtitle>{props.loading ? <Skeleton variant="text" /> : props.date}</ItemSubtitle>
                        </div>
                        <div className="d-block me-5">
                            <ItemTitle>Rating</ItemTitle>
                            <ItemSubtitle>{props.loading ? <Skeleton variant="text" /> : (props.rating + ' / 10')}</ItemSubtitle>
                        </div>
                        <div className="d-block me-5">
                            <ItemTitle>Director</ItemTitle>
                            <ItemSubtitle>{props.loading ? <Skeleton variant="text" /> : props.director.map((n, idx, arr) => arr.length - 1 === idx ? n.original_name : n.original_name + ', ')}</ItemSubtitle>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetail
