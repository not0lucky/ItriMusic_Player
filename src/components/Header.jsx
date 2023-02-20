import React from 'react'
import styled from 'styled-components'
import {MdStarRate} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

function Header() {
  return (
    <>
    <Countainer>
      <Logo>
        <MdStarRate style={{fontSize: "8.5em",color:"#ff9011"}}/>
        <Name>Itri Music Production</Name>
        <Desc>Experience the soulful rhythms of Amazigh music</Desc>
        <Links>
          <Link href='https://web.facebook.com/profile.php?id=100063715591251' target='_blank' >
            <BsFacebook style={{fontSize: "1.9em",color:"#ebebeb"}}/>
          </Link>
          <Link href='https://www.youtube.com/@itrimusic5935' target='_blank'>
          <BsYoutube style={{fontSize: "2.1em",color:"#ebebeb"}}/>
          </Link>
          
        </Links>
      </Logo>
    </Countainer>
    </>
  )
}

const Countainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0 0;
    border-radius: 10px;
    height: 400px;
    background: linear-gradient(rgba(0,0,0,0.8),rgba(56, 31, 3,0.9) 76%,rgba(122, 67, 4,0.9) 100%),url("https://thumbs.dreamstime.com/b/tribal-art-seamless-pattern-ethnic-geometric-print-berber-repeating-background-texture-abstract-tribal-pattern-repeated-ethnic-117390991.jpg") top left  / cover;
    margin: 10px 10px;
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
`

const Name = styled.p`
  font-size: 45px;
  font-weight: 600;
  color: #f3f1f1;
  margin-bottom: 10px;
`
const Desc = styled.p`
  font-size: 23px;
  font-weight: 500;
  color: #ebebeb;
  margin-bottom: 40px;
  text-align: center;
`
const Links = styled.div`
  display: flex;
  gap: 50px;
`
const Link = styled.a`
  cursor: pointer;
`

export default Header