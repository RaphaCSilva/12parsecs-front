import React, { useEffect, useContext } from "react";
import styled from 'styled-components';
import Topo from "./topo";
import { useNavigate, useParams } from "react-router-dom";
import MiniImages from "./mini-images";
import axios from "axios";
import UserContext from "./context";

export default function ProdutoComprar() {
  
  const [principal, setPrincipal] = React.useState("");  
  const [product, setProduct] = React.useState({});  
  const {idproduto} = useParams();

  const {carrinho, setCarrinho} = useContext(UserContext);

  let navigate = useNavigate();

    useEffect(() => {
      const request = axios.get(`http://localhost:5000.com/products/${idproduto}`);
      request.then( response => {
       setProduct(response.data);
      })
    }, []);

    function recebeimg(img){
      setPrincipal(img);
    }
    
    function montarobj(){
      const obj = {
        name: product.name,
        price: product.price,
        image: product.images[0]
      }
      setCarrinho([...carrinho, obj]);
      navigate("/checkout");
    }

    return (
    <>
    <Topo/>
    <Container>  
    <Esquerda>
      {(product.name)? <ImagemPrincipal src={(principal === "") ? product.images[0] : principal} alt={product.name}/> : <h1> ERRO DE CONEXÃO</h1>}
      <Miniaturas>
        {(product.name)? product.images.map((img, index) => <MiniImages src={img} alt = {product.name} key={index} voltaimg = {recebeimg} />): <h1> ERRO DE CONEXÃO</h1>}
      </Miniaturas>
    </Esquerda>
    <Direita>
      <h1>
        {product.name}
      </h1>
      <p>
        R$ {product.price}
      </p>
      <button onClick={montarobj}>
        COMPRAR AGORA !
      </button>
    </Direita>
    </Container>
    <Descricao>
      <p>
        {product.description}
      </p>
    </Descricao>
    </>
  )
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Descricao = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  border-radius: 5px;

  p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: black;
  }
`;
const Esquerda = styled.div`
  background-color: white;
  margin-left: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
`;
const Direita = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 5px;
  background-color: white;
  padding-bottom: 50px;
  h1 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: black;
    margin: auto;
    margin-top: 40px;
  }
  p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: black;
    margin: auto;
    margin-top: 100px;
  }
  button{
    width: 300px;
    height: 70px;
    margin: auto;
    margin-top: 100px;
    background-color: green;
    border: none; 

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: black;
    margin: auto;
    margin-top: 100px;
  }
`;
const ImagemPrincipal = styled.img`
  width: 400px;
  height: 400px;
  margin-left: 50px;
  margin-top: 50px;

`;
const Miniaturas = styled.div`
  margin-left: 40px;
img{
    width: 50px;
    height: 50px;
    margin-left: 10px;
    margin-top: 10px;
  }

`;