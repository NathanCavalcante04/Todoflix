import { createGlobalStyle } from "styled-components";
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import todos from "./Page/todos"

const OI = styled.h1`
  padding: 1vw;
  color: red;
`;
const PARAGRAFO = styled.p`
  padding: 1vw;
`;
const CATE = styled.p`
  padding: 1vw;
  display:flex;
  width:1vw;
  
`;
const PESQ = styled.input`
  width: 10vw;
  height: 3vw;
  border-radius: 5px 5px 5px 5px;
  color: white;
  margin-top: -0.4vw;
  font-size: 1vw;
  background: red;
`;
const BUT = styled.input`
  width: 27vw;
  height: 2vw;
  margin-left: 2vw;
  background: #2c2c2c;
  font-size: 1vw;
  border-radius: 0.5vw;
  color: white;
`;
const FILHO = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 10vw;
  align-items: center;
  width: 10vw;
  color: white;
`;
const FILHA = styled.div`
  display: flex;
  justify-content: space-around;
  justify-content: end;
  margin-top: -3.5vw;
`;
const REI = styled.img`
  width: 35vw;
  height: 20vw;
  margin-top: 10vw;
  margin-left: 2.5vw;
  p {
    font-weight: 400;
  }
`;
const LEAO = styled.div`
  display: flex;
  p {
    color: white;
    width: 30vw;
    font-weight: 200;
    font-size: 1vw;
    margin-top: 6vw;
    margin-left: 1vw;
  }
`;
const NAVEGACAO = styled.nav`
  position: absolute;
  display: none;
  cursor: pointer;
  margin-top: 2vw;
  padding: 1vw;
  background-color: #2c2c2c;
  border-radius: 0 0 0.4vw 0.4vw;
  border: none;
`;
const NAVH = styled.h4`
padding:1vw;
  background-color:#2c2c2c;
  color:grey;
  &:hover{
    cursor:pointer;
    color:white;
    font-weight:500 ;
    display:block;
    &:hover ${NAVEGACAO}{
      display:block;
    }
    }
`;

const NAVE = styled.div`
  &:hover ${NAVEGACAO} {
    display: block;
    margin-top: -0.7vw;
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <FILHO>
          <Router>
          <Link to="/">
            <OI>THANFLIX</OI>
          </Link>
          <Link to="/">
          <PARAGRAFO>Inicio</PARAGRAFO>
          </Link> 
          <NAVE>
            <CATE>Categorias&#9662; </CATE>
            <NAVEGACAO>
              <Link to="todos">
              <NAVH>todos</NAVH></Link>
              <NAVH>favoritos</NAVH>
              <NAVH>ja vistos</NAVH>
              <NAVH>adicionados</NAVH>
            </NAVEGACAO>
          </NAVE>
          <Routes>
            <Route path="todos"element={<todos/>}/>
            </Routes>
          </Router>
          
        </FILHO>
        
        <FILHA>
          <PESQ type="button" value="Adicionar Filme" />
          <BUT placeholder="Pesquisar"></BUT>
        </FILHA>
        <LEAO>
          <REI src="https://m.media-amazon.com/images/I/517DF3O-d5L.jpg" />

          <p>
            <p>visto recentemente</p>
            <h1>O REI LEAO</h1>
            Este desenho animado da Disney mostra as aventuras de um leão jovem
            de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de
            Simba, Oscar, planeja roubar o trono de Mufasa atraindo pai e filho
            para uma emboscada. Simba consegue escapar e somente Mufasa morre.
            Com a ajuda de seus amigos,Timon e Pumba, ele reaparece como adulto
            para recuperar sua terra, que foi roubada por seu tio Oscar.
          </p>
        </LEAO>
        )}
      </div>
    );
  }
}
