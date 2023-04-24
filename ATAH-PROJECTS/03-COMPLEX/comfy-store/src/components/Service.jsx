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