import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {FaPlay} from 'react-icons/fa'

function AlbumCard({title,img,id}) {
    const navigate = useNavigate()

   
    
  return (
    <>
        <Countainer>
            <Thumbnail>
                <img src={img} width="390px" />
            </Thumbnail>
            
            <Desc>
                <Title>{title}</Title>
                <But onClick={()=> navigate("/Album/"+id)}>
                    <FaPlay style={{fontSize: "1.5em"}} />
                </But>
            </Desc>
        </Countainer>
    </>
  )
}

const Countainer = styled.div`
    cursor: pointer;
    position: relative;
    height: 350px;
    width: 400px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    background-color: black;
    
`
const Thumbnail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
    color: white;   
`
const But = styled.div`
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background-color: #ff8a04;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .6s;
    &:hover{
        transform: scale(1.1);
        transform-origin: 50% 50%;
    }
    
`
const Desc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 20px;
    background-color: black;
    height:60px;
`

export default AlbumCard