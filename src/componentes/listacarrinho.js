import React from "react";
import styled from 'styled-components';

export default function ListaCarrinho(props) {
 
    return (
    <Item>
      <img src={props.src} alt={props.name}/>
      <Textos>
        <span>
            Nome do produto
        </span>
        <p>
          {props.name}
        </p>
      </Textos>
      <Preco>
        <span>
            valor do produto
        </span>
        <p>
            R${props.price}
        </p>   
      </Preco>
    </Item>
  )
}

const Item = styled.div`
  display: flex;  
  width: 370px;
  height: 100px;
  border-radius: 5px;
  margin-left: 15px;
  margin-top 20px;
  background-color: #d9d9d9;

  img{
      width: 50px;
      height: 50px;
      margin-left: 10px;
      margin-top: 25px;
    }
  span{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: black;
    margin-left: 15px;
  }
  p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: black;
    margin-top:20px;
    margin-left: 20px;
  }
`;
const Textos = styled.div`
  margin-top: 20px;
`;

const Preco = styled.div`
  margin-top: 20px;
`;