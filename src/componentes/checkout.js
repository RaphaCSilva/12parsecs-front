import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Topo from "./topo";
import UserContext from "./context";
import ListaCarrinho from "./listacarrinho";


export default function ProdutoComprar() {
  
    const {carrinho} = useContext(UserContext);
    
    function somar(){
        return carrinho.reduce((anterior, atual) => {
            return (anterior) + (atual.price);
        }, 0);
    }
    
    const soma = somar();

    return (
    <>
    <Topo/>
    <Container>  
    <Esquerda>
     <h1>
        Produtos selecionados
     </h1>
     {carrinho.map((produto, index) => <ListaCarrinho key={index} src={produto.image} name={produto.name} price={produto.price}/>)}
    </Esquerda>
    <Direita>
      <h1>
         RESUMO
      </h1>
      <ul>
        {carrinho.map((produto, index) => <li key={index}> <span> {produto.name} - valor R$ </span> <span> {produto.price} </span> </li>)}
      </ul>
      <h1>
        <span> Total a pagar R$</span> <span> {soma} </span>
      </h1>
      {(carrinho.length>0) ? <button>COMPRAR AGORA !</button> : <h1> Seu carrinho esta vazio, por favor clique em continuar comprando e preencha seu carrinho</h1>}
      <Link to={"/"}>
      <button>
        CONTINUAR COMPRANDO !
      </button>
      </Link>
    </Direita>
    </Container>
    </>
  )
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Esquerda = styled.div`
  background-color: white;
  margin-left: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  width: 400px;
  h1 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: black;
    margin-left: 20px;
    margin-top: 40px;
  }
`;
const Direita = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 5px;
  background-color: white;
  padding-bottom: 50px;
  ul{
    margin:auto;
    li{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: black;
        margin: auto;
        margin-top: 10px;
    }
  }
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
    margin-left: 50px;
    margin-top: 100px;
  }
`;
