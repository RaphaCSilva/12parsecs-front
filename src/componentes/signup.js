import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Topo from "./topo.js"

dotenv.config();

export default function SignUp() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmaPassword: "",
    erro: false,
  });

  const [buttonSignUp, setbuttonSignUp] = useState({
    desabilitado: true,
    className: "botaoDesabilitado",
  });

  const [loadingData, setloadingData] = useState({
    loading: false,
    className: "",
  });

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();

    setloadingData({
      ...loadingData,
      loading: true,
      className: "inputDesabilitado",
    });

    const URL = `http://localhost:5000.com/sign-up`;

    axios
      .post(URL, {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response.data);
        setloadingData({
          ...loadingData,
          loading: false,
          className: "",
        });
        navigate("/sign-in");
      })
      .catch((erro) => {
        console.log({ message: "Deu ruim", erro });
        setloadingData({
          ...loadingData,
          loading: false,
          className: "",
        });
      });
  };

  useEffect(() => {
    if (
      data.confirmaPassword !== "" &&
      data.password !== data.confirmaPassword
    ) {
      setdata({ ...data, erro: true });
      setbuttonSignUp({
        ...buttonSignUp,
        desabilitado: true,
        className: "botaoDesabilitado",
      });
    }
    if (
      data.confirmaPassword !== "" &&
      data.password === data.confirmaPassword
    ) {
      setdata({
        ...data,
        erro: false,
      });
      setbuttonSignUp({
        ...buttonSignUp,
        desabilitado: false,
        className: "",
      });
    }
  }, [data.confirmaPassword, data.password]);

  return (
    <>
      <Topo />
      <CadastroContainer>
        <Form onSubmit={signUp}>
          <input
            type="text"
            disabled={loadingData.loading}
            className={loadingData.className}
            placeholder="Nome"
            required
            value={data.name}
            onChange={(e) => setdata({ ...data, name: e.target.value })}
          />
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
            placeholder="Senha"
            required
            value={data.password}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
          <input
            type="password"
            disabled={loadingData.loading}
            className={loadingData.className}
            placeholder="Confirme a senha"
            required
            value={data.confirmaPassword}
            onChange={(e) =>
              setdata({ ...data, confirmaPassword: e.target.value })
            }
          />

          {data.erro ? (
            <span className="msg">As senhas não são iguais</span>
          ) : null}

          {loadingData.loading === false ? (
            <button
              type="submit"
              className={buttonSignUp.className}
              disabled={buttonSignUp.desabilitado}
            >
              Cadastrar
            </button>
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
        <Link to="/sign-in">
          <p>já tem conta? Entre agora!</p>
        </Link>
      </CadastroContainer>
    </>
  );
}

const CadastroContainer = styled.div`
  p {
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    margin-top: 32px;
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
  button {
    width: 326px;
    height: 46px;
    background-color: rgb(163, 40, 214);
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
  .botaoDesabilitado {
    background-color: rgba(93, 93, 94, 0.5);
  }
  .inputDesabilitado {
    background-color: rgba(212, 212, 212, 1);
    color: rgba(175, 175, 175, 1);
  }
  .msg {
    color: #ffffff;
    margin-bottom: 13px;
  }
`;