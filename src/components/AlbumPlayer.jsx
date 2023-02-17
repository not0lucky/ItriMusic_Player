import React,{useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { Context } from "../utils/context";
import {FaPlay} from 'react-icons/fa'




function AlbumPlayer() {
    const {albums,setAlbums,selectedPlaylist,setSelectedPlaylist,albumInfo,setAlbumInfo} = useContext(Context)
    const [selectedPosition,setSelectedPosition] = useState(0)
    const [loading,setLoading] = useState(true)
    const [width,setWidth] = useState(window.innerWidth,'px')
    const [height,setHeight]= useState(width/2 ,'px')
    const [windowSize, setWindowSize] = useState([
    window.innerWidth
  ]);
    
  const w = `${width}px`
  const h = `${height}px`

   useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
      if(windowSize >= 1200){
        setWidth(windowSize * 0.6 )
      }
      else{
       setWidth(windowSize - 30) 
      }
      
      console.log('window sizee',windowSize)
      console.log('idkkk',w)
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  
    useEffect(()=>{
         if(selectedPlaylist.length >0){
            setLoading(false)
            
         }
         console.log('selected playlist', selectedPlaylist)
    },[])
    
        //console.log('playlisttt player', selectedPlaylist)
         //console.log('video id 0', selectedPlaylist[selectedPosition].contentDetails.videoId)
        //let VideoId = selectedPlaylist[selectedPosition].contentDetails.videoId
        //let SongUrl = `https://www.youtube.com/watch?v=${VideoId}&list=${albumInfo.id}&index=${selectedPosition}`
        //console.log('song urll ', SongUrl)
    
    
    

  return (
    <>
    { loading == false ?
        <Countainer>
            <Player>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${selectedPlaylist[selectedPosition].contentDetails.videoId}`} controls={true} width={w} height={h} playing={true} />
                <SongDesc>
                    <Title>{selectedPlaylist[selectedPosition].snippet.title}</Title>   
                    <Position>{selectedPosition + 1}/{selectedPlaylist.length}</Position>
                    
                </SongDesc>
                <Line/>
                <SongsList>
                    {
                    selectedPlaylist.map((item,index)=> (
                        <>
                        
                        <SongCard key={item.snippet.position} onClick={() => setSelectedPosition(index)}>
                            <img src={item.snippet.thumbnails.maxres.url} width="100px" height="60px"/>
                            <SongTitle>{item.snippet.title}</SongTitle>
                            
                            <PlayBut  >
                                <FaPlay/>
                            </PlayBut>
                        </SongCard>
                        </>
                    ))}
                </SongsList>
            </Player>
        </Countainer>
    : <h1>Loading</h1>}
    </>
  )
}



const Countainer = styled.div`
    height: calc(100vh - 20px);
    width: 65vw;
    margin: 10px;
    border-radius: 10px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

     @media (max-width: 1200px) {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  
`
const Player = styled.div`
    
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SongDesc = styled.div`
    
    width: 900px;
    margin: 60px auto 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1200px) {
     width: calc(100vw - 50px);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`

const Title = styled.h1`
    font-size: 36px;
    color: white;
`
const Position = styled.h1`
    font-size: 22px;
    color: white;
`

const Line = styled.span`
    &:after {
    content: "";
    display: block;
    
    width: 900px;
    height: 1px;
    background-color: #464646;
    }
`

const SongsList = styled.div`
    margin: 40px auto 50px;
    background-color: #464646;
    width: 900px;
    height: fit-content;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    @media (max-width: 1200px) {
    width: calc(100vw - 100px);
  }
`

const SongCard = styled.div`
    position: relative;
    background-color: black;
    color: white;
    display: flex;
    height: 80px;
    align-items: center;
    border: 1px solid #2e2e2e;
    padding-left: 20px;

    @media (max-width: 768px) {
    height: 100%;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px ;
  }
`
const SongTitle = styled.h1`
    font-size: 25px;
    padding-left: 20px;
`
const PlayBut = styled.div`
cursor: pointer;
position: absolute;
right: 20px;
display: flex;
align-items: center;
justify-content: center;
color: black;
background-color: #ff8a04;
padding: 20px;
border-radius: 50%;
`


export default AlbumPlayer