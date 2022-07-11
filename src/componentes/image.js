import React from "react";
import styled from 'styled-components';

export default function Image(props) {
  
  function devolveimg(){
    props.voltaimg(props.src)
  }

    return (
    <ImageeBolinha onClick={devolveimg}>
    </ImageeBolinha>
  )
}

const ImageeBolinha = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-left: 20px;
  background-color: black;
  }
`;