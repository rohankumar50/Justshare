import React, { useState } from 'react'
import styled from 'styled-components'
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { Face, KeyboardArrowDown, Notifications, Textsms } from '@material-ui/icons';
import { Link } from 'react-router-dom';




function Header(props) {

    const [input, setInput] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input)
        console.log("this is the inpur", input);
    }

    return (
        <Wrapper>
            <LogoWrapper>
                <PinterestIcon />
            </LogoWrapper>
            <HomePageButton>
                <a href="/">Home</a>
            </HomePageButton>
            <FollowingButton>
                <a href="/">Today</a>
            </FollowingButton>
            <CreateButton>
                <a href="/">Create</a>
                <KeyboardArrowDown />
            </CreateButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <Textsms />
                </IconButton>
                <IconButton>
                    <Link to="/profile">
                        <Face />
                    </Link>
                </IconButton>
                <IconButton>
                    <KeyboardArrowDown />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header


const Wrapper = styled.div`
    display:flex;
    align-items: center;
    height: 80px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`
const LogoWrapper = styled.div`
        width: 48px;
        text-align: center;

    .MuiSvgIcon-root{
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }
`

const HomeButtons = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`

const HomePageButton = styled(HomeButtons)`
    background-color: rgb(17,17,17);
    
    a{
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`

const FollowingButton = styled(HomeButtons)`
    
    background-color: white;

    a{
        text-decoration: none;
        color: black;
        font-weight: 700;
    }

    :hover{
        background-color: #e1e1e1;
    }
`
const CreateButton = styled(HomeButtons)`
    
    background-color: white;

    a{
        text-decoration: none;
        color: black;
        font-weight: 700;
    }

    :hover{
        background-color: #e1e1e1;
    }
`

const SearchWrapper = styled.div`
    flex: 1;
`
const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form{
        display: flex;
        flex: 1;
    }


    form>input{
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
        outline: none;
    }

    form>button{
        display: none;
    }
`

const IconsWrapper = styled.div`
    .MuiSvgIcon-root{
        color: #757575;
    }
`




