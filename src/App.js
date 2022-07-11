import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Home from "./componentes/home";
import UserContext from "./componentes/context";
import ProdutoComprar from "./componentes/produtocomprar";
import SignIn from "./componentes/signin";
import SignUp from "./componentes/signup";
import Checkout from "./componentes/checkout";

export default function App() {
  const [user, setUser] = useState(
    localStorage.getItem("userdata")
      ? JSON.parse(localStorage.getItem("userdata"))
      : null
  );
  const [carrinho, setCarrinho] = useState([]);

  return (
    <UserContext.Provider value = {{user, setUser, carrinho, setCarrinho}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/produto/:idproduto" element={<ProdutoComprar/>}/>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
