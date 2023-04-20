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

:root {
    /* colors */
    --primary-100: #eee4df;
    --primary-200: #ddcabf;
    --primary-300: #cdaf9f;
    --primary-400: #bc957f;
    --primary-500: #ab7a5f;
    --primary-600: #89624c;
    --primary-700: #674939;
    --primary-800: #443126;
    --primary-900: #221813;

    /* grey */
    --grey-50: #dfe5ea;
    --grey-100: #c0cbd6;
    --grey-200: #e2e8f0;
    --grey-300: #a0b1c1;
    --grey-400: #8197ad;
    --grey-500: #617d98;
    --grey-600: #4e647a;
    --grey-700: #3a4b5b;
    --grey-800: #27323d;
    --grey-900: #13191e;
    /* rest of the colors */
    --black: #222;
    --white: #fff;
    --red-light: #f8d7da;
    --red-dark: #842029;
    --green-light: #d1e7dd;
    --green-dark: #0f5132;

    --small-text: 0.875rem;
    --extra-small-text: 0.7em;
    /* rest of the vars */
    --backgroundColor: var(--grey-50);
    --textColor: var(--grey-900);
    --borderRadius: 0.25rem;
    --letterSpacing: 1px;
    --transition: 0.3s ease-in-out all;
    --max-width: 1120px;
    --fixed-width: 600px;

    /* box shadow*/
    --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
}


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