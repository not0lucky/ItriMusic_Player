import React,{useContext} from 'react'
import styled from 'styled-components'
import {AlbumCard} from '../components'
import {BiArrowBack} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
import { Context } from "../utils/context";



function LeftAlbumPage() {
    const navigate = useNavigate()
    const {albums,setAlbums,selectedPlaylist,setSelectedPlaylist,albumInfo,setAlbumInfo} = useContext(Context)

    
    console.log('albummm infooo ', albumInfo)
  return (
    <>
        <Countainer>
            <BackBut onClick={()=> navigate("/")}>
                <BiArrowBack style={{fontSize: "1.8em",color:"white"}}/>
                <BackText>Back</BackText>
            </BackBut>
            <Playlists>
                <AlbumCard img={albumInfo.snippet.thumbnails.maxres.url} title={albumInfo.snippet.title} id={albumInfo.id} />
                <MorePlaylists>
                    <Title>More Albums</Title>
                    <AlbumCountainer>
                    {albums.filter((alb)=> alb.id !== albumInfo.id).map((item)=>(
                        <AlbumCard title={item.snippet.title} key={item.id} id={item.id} img={item.snippet.thumbnails.maxres.url} />
                    ))}
                    </AlbumCountainer>
                </MorePlaylists>
            </Playlists>
        </Countainer>
    </>
  )
}

const Countainer = styled.div`
    height: calc(100vh - 20px);
    width: 30vw;
    margin: 10px 30px;
    overflow: auto;

    @media (max-width: 1200px) {
    width: 100vw;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const BackBut = styled.div`
    cursor: pointer;
    width: 120px;
    height: 40px;
    padding: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: blue;
`
const BackText = styled.h2`
    color: white;
    font-size: 27px;
    font-weight: 500;
`
const Playlists = styled.div`
    margin-top: 40px ;
` 

const MorePlaylists = styled.div`
    margin-top: 80px;
`

const Title = styled.h1`

    font-size: 40px;
    margin-bottom: 40px;
    &:after {
    content: "";
    display: block;
    margin-top: 1px;
    width: 100px;
    height: 4px;
    background-color: #00bbf9;
}
`

const AlbumCountainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`


export default LeftAlbumPage