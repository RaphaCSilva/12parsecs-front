import React from "react";
import styled from 'styled-components';


export default function MiniImages(props) {
  
   function atualiza(){
     props.voltaimg(props.src);
   }

    return (
    <Image onClick={atualiza} src={props.src} alt={props.alt}/>
  )
}
const Image = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-top: 10px;
`;
