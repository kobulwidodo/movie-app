import { Col, Row } from 'react-bootstrap'
import CardMovies from '../CardMovies/CardMovies'

const MovieList = (props) => {
    return (
        <>
            <Row>
                { props.isLimit4 ? props.moviesList.slice(0, 4).map((movie) => (
                    <Col lg={3} sm={6} key={movie.id}>
                        <CardMovies
                            key={movie.id}
                            ImagePoster={movie.poster_path}
                            TitlePoster={movie.title ?? movie.name}
                            DatePoster={movie.release_date ?? movie.first_air_date}
                        />
                    </Col>
                )) : props.moviesList.map((movie) => (
                    <Col lg={3} sm={6} key={movie.id}>
                        <CardMovies
                            key={movie.id}
                            ImagePoster={movie.poster_path}
                            TitlePoster={movie.title ?? movie.name}
                            DatePoster={movie.release_date ?? movie.first_air_date}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default MovieList
