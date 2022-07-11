import React, { useState, useContext } from "react";
import dotenv from "dotenv";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./context";
import Topo from "./topo.js"

dotenv.config();

export default function SignIn() {
  const navigate = useNavigate();
  const [data, setdata] = useState({ email: "", password: "" });
  const [loadingData, setloadingData] = useState({
    loading: false,
    className: "",
  });

  const { user, setUser } = useContext(UserContext);

  const login = (e) => {
    e.preventDefault();

    setloadingData({
      ...loadingData,
      loading: true,
      className: "inputDesabilitado",
    });

    const URL = `https://project12parsecs.herokuapp.com/sign-in`;

    axios
      .post(URL, { email: data.email, password: data.password })
      .then((response) => {
        localStorage.setItem(
          "userdata",
          JSON.stringify({
            name: response.data.name,
            token: response.data.token,
          })
        );
        const { data } = response;
        setUser({
          ...user,
          name: data.name,
          token: data.token,
        });
        setloadingData({
          ...loadingData,
          loading: false,
          className: "",
        });
        navigate("/");
      })
      .catch((erro) => {
        console.log({ message: "erro no login" });
        setloadingData({
          ...loadingData,
          loading: false,
          className: "",
        });
      });
  };

  return (
    <>
      <Topo />
      <LoginContainer>
        <Form onSubmit={login}>
          <input
            type="email"
            disabled={loadingData.loading}
            className={loadingData.className}
            placeholder="E-mail"
            required
            value={data.email}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            disabled={loadingData.loading}
            className={loadingData.className}
            placeholder="senha"
            required
            value={data.password}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />

          {loadingData.loading === false ? (
            <button type="submit">Entrar</button>
          ) : (
            <button type="button" disabled>
              <ThreeDots
                color="rgba(255, 255, 255, 1)"
                height={13}
                width={51}
              />
            </button>
          )}
        </Form>
        <Link to="/sign-up">
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  p {
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    margin-top: 36px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 95px;
  input {
    width: 326px;
    height: 58px;
    border-radius: 5px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    padding-left: 15px;
    margin-bottom: 13px;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-style: regular;
      font-weight: 400;
      font-size: 20px;
      color: #000000;
    }
  }
  input:focus::placeholder {
    color: transparent;
  }
  .inputDesabilitado {
    background-color: rgba(212, 212, 212, 1);
    color: rgba(175, 175, 175, 1);
  }
  button {
    width: 326px;
    height: 46px;
    background-color: #a328d6;
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;
    border: 1px solid #a328d6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;