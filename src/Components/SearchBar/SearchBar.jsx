import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

const FormControlStyled = styled(InputBase)`
    /* box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1); */
    border-radius: 40px;
    padding: 0.75rem 1.3rem;
    font-weight: 300;
    color: #6B6B6B;
    font-size: 1.125rem;
`

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '40px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const SearchBar = () => {
    const classes = useStyles();
    return (
        <>
            <Paper component="form" className={classes.root}>
                <FormControlStyled
                    className={classes.input}
                    placeholder="Search movies, tv show, series, people...."
                    inputProps={{ 'aria-label': 'Search movies, tv show, series, people....' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </>
    )
}

export default SearchBar

