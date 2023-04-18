import styled from "styled-components"
import projects from "./project";
import SingleProjects from "./SingleProject";


const Container = () => {

  return <Wrapper>

    <div className="section-center">
        <h2 className="title">complex projects</h2>

        <div className="projects-container">
            {
                projects.map((item,index)=>{
                    return <SingleProjects key={index} {...item}/>
                })
            }
        </div>

    </div>



  </Wrapper>
}

const Wrapper=styled.div`


.section-center{
    padding-top: 1rem;
}

.title{
    text-align: center;
    font-size:1.8rem;
    color:black;
    margin-top:1rem;
    padding-bottom:0.5rem;
}

.projects-container{
    margin-top:2rem
}


@media screen and (min-width:650px){

    .projects-container{
        display: grid;
        grid-template-columns:1fr 1fr;
        gap:2rem;
    }

    .title{
        font-size:2rem;
    }

  

}

    
@media screen and (min-width:1000px){

    .projects-container{
        grid-template-columns:1fr 1fr 1fr;

    }

    .title{
        font-size: 3rem;
    }
  
}

    
`

export default Container;