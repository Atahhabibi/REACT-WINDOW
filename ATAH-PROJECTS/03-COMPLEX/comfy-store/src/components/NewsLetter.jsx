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