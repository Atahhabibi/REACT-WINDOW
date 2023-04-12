import React from 'react';
import styled from 'styled-components';

const Menu = ({title,price,img,desc}) => {
  return <Wrapper>

    <img src={img} alt={title} className='img'/>

    <div className="info-container">

      <div className="info-title">
        <h5 className='name'>{title}</h5>
        <h5 className="price">${price}</h5>
      </div>

      <hr />

      <div className="text">{desc}</div>


    </div>





  </Wrapper>;
};


const Wrapper=styled.article`



margin: 0 auto;
box-shadow: var(--shadow-2);
margin-bottom:1.5rem;
border-radius:10px;
overflow: hidden;
max-width:500px;



.img{
  height:15rem;
}


.info-container{
  background:var(--primary-100);
  padding: 1rem;

}

.info-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:0.2rem;


}

.name{
  font-size:1.1rem;
  font-weight:600;
  letter-spacing:1px;
}




.price{
  background:var(--primary-500);
  padding:0.3rem;
  font-size:1rem;
  font-weight:600;
  border-radius:3px;
}

.text{
  margin-top:1rem;
}


@media screen and (min-width:1000px){
 .text{
  min-height:8rem;
  }

  margin-bottom:0;
}


@media screen and (min-width:1300px){
  
  max-width:22rem;
   min-width:22rem;


}





`





export default Menu;
