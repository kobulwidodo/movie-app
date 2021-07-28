import React from 'react'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'

const Jmb = styled.div`
    background-image: url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,017594)/8s4h9friP6Ci3adRGahHARVd76E.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh / 2.5);
    width: 100%;
`

const Text = styled.div`
    padding-top: 5rem;
    padding-left: 3rem;
    padding-right: 3rem;
`
const TitleJumb = styled.div`
    font-weight: 500;
    color: white;
    font-size: 1.875rem;
    line-height: 37px;
`
const SubTitleJumb = styled.div`
    margin-top: 10px;
    font-weight: 200;
    color: white;
    font-size: 1.125rem;
`

const Jumbotron = (props) => {
    return (
        <Jmb>
            <Text>
                <TitleJumb>{props.title}</TitleJumb>
                <SubTitleJumb>{props.subtitle}</SubTitleJumb>
            </Text>
        </Jmb>
    )
}

export default Jumbotron
