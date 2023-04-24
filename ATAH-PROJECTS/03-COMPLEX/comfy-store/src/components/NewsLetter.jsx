import styled from "styled-components"


const NewsLetter = () => {
  return <Wrapper>

    <div className="section-center">

        <div className="info-container">
            <h4 className="title">Join our newsletter and get 20% off</h4>
            <p className="news-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique deserunt adipisci voluptatum necessitatibus aut.
            </p>
        </div>

        <form>
            <input type="text" placeholder="Enter Email" />
            <button type="submit" className="btn-primary">Subscribe</button>
        </form>


    </div>


  </Wrapper>
}

const Wrapper=styled.div`


padding:3rem 0;
background-color: var(--primary-200);
text-align: center;

.info-container{
    .title{
        font-size:1.4rem;
        font-weight: bold;
        margin-bottom:1rem;
    }

    p{
        color: var(--primary-800);
        margin-bottom:1rem;
    }
}


form{
    input,button{
        padding:0.3rem 1rem;
        border:1px solid var(--primary-900);
        border-radius:3px;
    }

    button{
        background:var(--primary-700);
        color: white;
        cursor: pointer;
        border-top-left-radius:0;
        border-bottom-left-radius:0;

        &:hover{
            color:black;
        }

    }

    input{
        border-top-right-radius:0;
        border-bottom-right-radius:0;
    }
}


@media screen and (min-width:1000px){


    padding:4rem 0;

    .info-container{
        max-width:50rem;

        .title{
            font-size:1.8rem;
        }
        
    }

    form{
        margin: 0 auto;
        input{
            width:17rem;
            font-size:1.4rem;
        }
    }

    .section-center{
        padding:1rem  4rem;
        text-align:left;
        display: grid;
        grid-template-columns:1fr 1fr;

    }
  
}

    
`

export default NewsLetter