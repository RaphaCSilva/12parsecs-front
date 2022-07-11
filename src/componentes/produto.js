import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Image from "./image";

export default function Produto(props) {
  
  const [principal, setPrincipal] = React.useState("");  
  
  function recebeimg(img){
    setPrincipal(img);
  }

    return (
    <Card>
        <Link to= {`/produto/${props.id}`}>
          <img src={(principal !== "")? principal : props.images[0]} alt={props.name}/>
        </Link>
        <div>
        {props.images.map((img, index) => <Image key = {index} src={img} alt={props.name} voltaimg={recebeimg}/>)}
        </div>
        <span>
            {props.name}
        </span>
        <Price>
          <h2>
            R$ {props.price}
          </h2>
        </Price>
    </Card>
  )
}

const Card = styled.div`
    height: 300px;
    width: 220px;
    background-color: white;
    margin-right: 20px;
    margin-bottom: 20px;
    
    img {
    margin-left: 20px;
    margin-top: 20px;
    height: 180px;
    width: 180px;
    overflow: hidden;
    }
    div {
      display: flex;
      margin-left: 30px;
    }
    span {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 31px;
        color: black;
        margin-left: 20px;
    }
`;
const Price = styled.div`
  diplay: flex;
   h2{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 31px;
    color: black;
   }
`;