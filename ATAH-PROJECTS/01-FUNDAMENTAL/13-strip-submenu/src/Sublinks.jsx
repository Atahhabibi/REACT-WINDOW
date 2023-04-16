import styled from "styled-components"

const Sublinks = ({page,links,linksContainerRef}) => {


    let tempClass;

    if(links.length===3){
         tempClass='links-container col-3';
    }
    if(links.length>=4){
        tempClass='links-container col-4';
    }


  
  return <Wrapper>


      <button className="title">{page}</button>

      <div className={tempClass} ref={linksContainerRef}>
      {
        links.map((item)=>{
            const {label,icon,url}=item;
            return <button key={label} >
                <a href={url}><span className="icon">{icon}</span><span className="label">{label}</span></a>
            </button>
        })
      }

      </div>




  </Wrapper>
}

const Wrapper=styled.article`
margin-bottom:3rem;

.title{
    margin-bottom:1rem;
    color:#220c17;
    font-size: 1.5rem;
    text-transform: capitalize;
}

.links-container{
   display: grid;
   grid-template-columns:1fr 1fr;
   gap:1rem;
}

button{
    background:transparent;
    border: transparent;
}

a{
    display: flex;
    font-size:1.2rem;
    margin-right: 1rem;
    color:#78294f ;
}

.icon{
    margin-right:1rem;
}

.label{
    text-transform: capitalize;
}



@media screen and (min-width:800px) {

    .title{
        font-size:1.5rem;
    }

    
}

    

`


export default Sublinks