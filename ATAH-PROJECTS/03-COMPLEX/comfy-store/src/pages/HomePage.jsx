import styled from "styled-components"
import {PageHero,Featured, Service} from '../components'
import NewsLetter from "../components/NewsLetter"


const HomePage = () => {
  return <Wrapper >

    <PageHero/>
    <Featured/>
    <Service/>
    <NewsLetter/>

      

  </Wrapper>
}

const Wrapper=styled.div`
    
`

export default HomePage