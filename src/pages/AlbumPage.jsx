import React,{useState,useEffect,useContext} from 'react'
import { LeftAlbumPage,AlbumPlayer, AlbumCard } from '../components'
import styled from 'styled-components'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Context } from "../utils/context";



function AlbumPage() {
  const {id} = useParams()
  const [songs,setSongs] = useState('')
  const [loading,setLoading] = useState(true)
  const {albums,setAlbums,selectedPlaylist,setSelectedPlaylist,albumInfo,setAlbumInfo} = useContext(Context)

  console.log('albymmms',albums)
  const MyAlbum = albums.filter((Album)=> Album.id === id)
  console.log('my album with title',MyAlbum[0].snippet.title,'isss',MyAlbum[0])
  setAlbumInfo(MyAlbum[0])


  const YOUTUBE_PLAYLIST_API ='https://www.googleapis.com/youtube/v3/playlistItems';
 
  useEffect(()=>{
    getSongs()
  },[id])

  const getSongs = async () => {
    try{
        const {data} = await axios.get(`${YOUTUBE_PLAYLIST_API}?part=snippet,contentDetails&playlistId=${id}&maxResults=25&key=AIzaSyBbEl6whjXn_z5e7NmCOUkbHrIRATzsA6U`)
        console.log('songs',data.items)
        setSongs(data.items)
        setSelectedPlaylist(data.items)
        
        
    }catch (err){
        console.log(err)
        return err
    }
  }


  return (
    <>
      <Layout>
          <LeftAlbumPage>
            
          </LeftAlbumPage>

          <AlbumPlayer></AlbumPlayer>
          
      </Layout>
    </>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
`

export default AlbumPage