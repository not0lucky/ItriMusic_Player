import React from 'react'
import { AlbumList,Header } from '../components'
import styled from 'styled-components'

function HomePage() {
  return (
    <>
    <Header/>
    <Countainer>
       <AlbumList></AlbumList>
    </Countainer>
        
    </>
  )
}

const Countainer = styled.div`
    margin-top: 50px;
    
`


export default HomePage