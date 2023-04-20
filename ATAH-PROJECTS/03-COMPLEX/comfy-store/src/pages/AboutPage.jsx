import styled from "styled-components"
import { Heading, PageNavigate } from "../components"
import img from '../assets/hero-bcg.jpeg';


const AboutPage = () => {
  return <Wrapper>

         <PageNavigate title="about"/>

        <div className="section-center">

          <img src={img} alt="table"  className="img"/>

          <div className="info-container">
            <Heading title="our story"/>
            <p className="about-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem natus sequi error iure quam debitis ea illo eaque sed maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, corrupti!
            </p>
          </div>




        </div>


  </Wrapper>
}

const Wrapper=styled.div`

min-height:calc(100vh - 174px);

.section-center{
  padding:4rem 0;
}

.img{
  height:39rem;
  border-radius:8px;
}

.info-container{
  margin-top:1rem;
  text-align: center;

  .about-info{
    font-size:1.1rem;
  }
}

@media screen and (min-width:800px) {

  .section-center{
    display: grid;
    grid-template-columns:1fr 1fr;
    column-gap:3rem;
  }
    
}

    
`

export default AboutPage