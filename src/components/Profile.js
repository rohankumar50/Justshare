import styled from '@emotion/styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import unsplash from '../api/unsplash'
import Header from './Header'
import './mainboard.css'


const Profile = () => {

    const [photos, getPhotos] = useState([])

    const userPinnedPhotos = () => unsplash.get('https://api.unsplash.com/photos?page=1').then((res) => {
        console.log(res.data);
        getPhotos(res.data)
    })

    useEffect(() => {
        userPinnedPhotos()
    }, [])

    // const userPin = axios.get(URL)

    return (
        <div>
            <Header />
            <ProfileSection>
                <ProfileImage>
                    <img src="https://images.unsplash.com/photo-1616817846957-aa2b827d600b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxwb3J0cmFpdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </ProfileImage>
                <UserName>
                    <h1>ROHAN KUMAR</h1>
                </UserName>
                <UserId>
                    <p>@rohankumar50</p>
                </UserId>
                <Follow>
                    <Followers>
                        <p>6 followers</p>
                        <p>27 following</p>
                    </Followers>
                </Follow>
                <SEButton>
                    <ShareButton>
                        <a href='profile'>Share</a>
                    </ShareButton>
                    <EditProfileButton>
                        <a href='profile'>Edit Profile</a>
                    </EditProfileButton>
                </SEButton>
                <Tabs>
                    <CreateTab>
                        <a href='#'>Created</a>
                    </CreateTab>
                    <SavedTab>
                        <a href='#'><span className='activated'>Saved</span></a>
                    </SavedTab>
                </Tabs>
            </ProfileSection>
            <Wrapper>
                <Container className='mainboard__container'>
                    {
                        photos.map((res) => {
                            return <img src={res.links.download} />
                        })
                    }
                </Container>
            </Wrapper>
        </div>
    )
}

export default Profile

const Tabs = styled.div`
    margin: 5rem 0 3px 0;
    display: flex;
    gap: 2rem;
`
const CreateTab = styled.div`
   a{
        text-decoration: none;
        color: rgb(17,17,17);
        font-weight: 500;
    }
`
const SavedTab = styled.div`
    a{
        text-decoration: none;
        color: rgb(17,17,17);
        font-weight: 500;
    }
    .activated{
        border-bottom: 2px solid;
    }
`

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`
const ProfileImage = styled.div`
   
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;

   img{
        width: 100%;
    }

`
const UserName = styled.div`

    h1{
        font-weight: 500;
    }

`
const UserId = styled.div`
    p{
        color: #767676;
        margin-top: 5px;
    }
`
const Follow = styled.div`
    display: flex;
    gap: 7px;
    margin-top: 5px;

    p{
        font-weight: 500;
    }
`
const Followers = styled.div`
    display: flex;
    gap: 1rem;
`
const SEButton = styled.div`
    display: flex;
    margin-top: 1rem;
    gap: 1rem;
`
const EditProfileButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    background-color: rgb(239,239,239);
    
    a{
        text-decoration: none;
        color: rgb(17,17,17);
        font-weight: 500;
    }
`
const ShareButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    background-color: rgb(239,239,239);
    
    a{
        text-decoration: none;
        color: rgb(17,17,17);
        font-weight: 500;
    }
`

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 15px;
    justify-content: center;
    padding: 8px;

`

const Container = styled.div`
    margin: 0 auto;
    height: 100%;
    img{
        display: flex;
        width: 100%;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;
        padding: 10px;
    }
`


