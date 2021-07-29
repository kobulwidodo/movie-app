import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    background: #EDEDED;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border-color: unset;
    border: unset;
    color: #5F5F5F;
    font-weight: 500;
`

const ButtonGrey = (props) => {
    return (
        <StyledLink
            to={props.link}
            className="btn btn-primary"
        >{props.text}</StyledLink>
    )
}

export default ButtonGrey
