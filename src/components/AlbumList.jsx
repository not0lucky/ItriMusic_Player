import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import AlbumCard from './AlbumCard'
import { Context } from "../utils/context";
import axios from 'axios'

function AlbumList() {
    const [playlists, setPlaylists] = useState('')
    const [loading,setLoading] = useState(true)
    const {albums,setAlbums,selectedPlaylist,setSelectedPlaylist} = useContext(Context)

    console.log('testing context',albums)

    const YOUTUBE_PLAYLIST_API ='https://www.googleapis.com/youtube/v3/playlists';
    const chanID ='UCICRRvnqY2XxwadrzljLyHw'

    useEffect(()=>{
        getPlaylists()
    },[])

    

    const getPlaylists = async () => {
        try{
        const {data} = await axios.get(`${YOUTUBE_PLAYLIST_API}?part=snippet&channelId=${chanID}&maxResults=25&key=AIzaSyBbEl6whjXn_z5e7NmCOUkbHrIRATzsA6U`)
        console.log(data.items)
        setPlaylists(data.items)
        
        setLoading(false)
        setAlbums(data.items)
        console.log('playy',albums)
    }catch (err){
        console.log(err)
        return err
    }
    }
  return (
    <>
        <Layout>
        <Title>Albums</Title>
        <Countainer>
            {loading == false ? playlists.map((item) =>(
                <AlbumCard title={item.snippet.title} key={item.id} id={item.id} img={item.snippet.thumbnails.maxres.url} />
            )) : null }
        </Countainer>
        </Layout>
    </>
  )
}

const Layout = styled.div`
    margin: 100px 50px;
    @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Countainer = styled.div`
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    row-gap: 80px;
    justify-items: center;

    @media (max-width: 768px) {
    
  }
  
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 80px;
    justify-content: center;
    align-items: center;
  }
`
const Title = styled.h1`
    font-size: 48px;
    &:after {
    content: "";
    display: block;
    margin-top: 1px;
    width: 100px;
    height: 4px;
    background-color: #00bbf9;

    
}
`

export default AlbumList