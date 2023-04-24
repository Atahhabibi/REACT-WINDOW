import { Link } from "react-router-dom";
import styled from "styled-components";

import img1 from '../assets/hero-bcg.jpeg';
import img2 from '../assets/hero-bcg-2.jpeg';


const PageHero = () => {
  return <Wrapper className="section-center">

         <div className="info-container">

          <h4 className="home-title">Design Your <br/> Comfort Zone</h4>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, earum quae cum quas eaque quam eveniet ea cupiditate 
            sequi, eius exercitationem. Magni repudiandae fugit, quo, iusto molestiae omnis voluptas, quae dignissimos natus suscipit libero
             officia eaque consectetur illo odit.
            </p>
            <button className="btn-primary"><Link to='/products' className="Link-btn">shop now</Link></button>

        </div>

        <div className="image-container">
            <img src={img1} alt="person-working"  className="img-1"/>
            <img src={img2} alt="table and chaier" className="person-img"/>
        </div>


  </Wrapper>
}

const Wrapper=styled.div`

min-height:calc(100vh - 4rem);
text-align: center;
display: grid;
place-items: center;

.home-title{
    font-size:3rem;
    margin:2rem 0;
}

.info{
    margin-bottom:2rem;
}

.Link-btn{
    color:white;
 
    &:hover{
        color:black;
    }
}

.btn-primary{
    margin-top:1rem;
    display: inline;
}

.image-container{
    display: none;
}



@media screen and (min-width:900px){

    .image-container{
        display: block;
        background:var(--primary-300);
        position: relative;
        width:100%;
        z-index:-1;
        width:26rem;
        height:25rem;
        border-radius:8px;
    }

    .person-img{
        position: absolute;
        left:-10%;
        object-fit: cover;
        width:15rem;
        border-radius:8px;
        z-index:3;
        top:80%;
        width:50%;
        height:30%;

    }

    .img-1{
        object-fit: cover;
        position: absolute;
        top:-10%;
        left:20%;
        z-index:3;
        width: 100%;
        height:110%;

    }

    .home-title{
        font-size:3.4rem;
    }

    .info{
        font-size:1.2rem;
    }

    

    grid-template-columns: 1fr 2fr;
  
}










    
`

export default PageHero;