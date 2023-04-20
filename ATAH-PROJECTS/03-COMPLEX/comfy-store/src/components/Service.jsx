import styled from "styled-components"
import articles from "../utils/article"


const Service = () => {
  return <Wrapper>



    <div className="section-center">



    <div className="title-container">
       <h5 className="service-title">Custom Furniture<br/> Built Only For You</h5>

       <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde in. 
        Error aliquid nulla ea! Praesentium, vitae iste. Consequatur, laborum.
       </p>

    </div>


    <div className="article-container">
       
        {
            articles.map((item,index)=>{

                const {icon,text,name}=item;

                return <div key={index} className="single-article">

                  <img src={icon} alt={name}  className="icon"/>
                  <h5 className="name">{name}</h5>
                  <p className="article-text">{text}</p>
                
                </div>
            })
        }


    </div>


    


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
background:var(--primary-400);
text-align: center;
padding:3rem 0;

.title-container{
    margin-bottom:2rem;
    p{
        color: #050000;
    }
}


.service-title{
    font-size:2rem;
    text-transform: capitalize;
    margin-bottom:1rem;
}


.article-container{
    text-align: center;
}

.single-article{
    border: 2px solid white;
    margin-bottom:1rem;
    padding:1rem;
    background:var(--primary-100);
    border-radius:8px;
}

.single-article img{
    width:3rem;
}

.name{
    font-weight: bold;
}


.article-text{
    color:var(--primary-800);
}


@media screen and (min-width:600px){

  
    .title-container{
        max-width:40rem;
        margin: 0 auto;
        margin-bottom:2rem;
    }
    .article-container{
        display: grid;
        grid-template-columns:1fr 1fr;
        gap: 1rem;
    }

    .single-article{
        margin-bottom: 0;
    }
  
}

@media screen and (min-width:900px){

    .section-center{
        padding:2rem 0;
    }

    .article-container{
        grid-template-columns:1fr 1fr 1fr;

        .name{
            font-size:1.6rem;
        }

        .article-text{
            font-size:1.3rem;
        }
    }

    .service-title{
        font-size:2.5rem;
    }

    .title-container{
        .text{
        font-size:1.3rem;
        color:var(--primary-700);
        }
    }


  
}



    
`

export default Service