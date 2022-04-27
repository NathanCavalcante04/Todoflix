import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
const MAE = styled.div``;
const CONTAINER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9vw;
  img {
    padding: 2vw;
    width: 25vw;
    height: 20vw;
  }
  h3,
  h2 {
    color: white;
    margin-left: 2vw;
    font-weight: 400;
  }
  h3 {
    font-size: 1vw;
    padding: 1vw;
  }
  h2 {
    margin-top: -2vw;
  }
`;
const CONTAINER2 = styled.div`
  color: white;
  width: 100%;
  margin-bottom: -10vw;
  p {
    width: 2vw;
    margin-top: 5vw;
  }
`;

export default class App extends React.Component {
  state = {
    listMovies: [
      {
        title: "shrek 2",
        overview:
          "Shrek e Fiona acabaram de voltar da lua de mel e vivem felizes em sua casa no pântano. O casal recebe um convite dos pais da princesa, que querem conhecer o novo genro, para um jantar no castelo. Eles ficaram sabendo que Fiona havia se casado com o seu verdadeiro amor, mas o que eles ainda não sabem é que este amor é um ogro mal-educado de mais de 300 quilos, que conta com um burro falante como melhor amigo.",

        poster:
          "https://upload.wikimedia.org/wikipedia/pt/7/78/Shrek_2_Poster.jpg"
      },
      {
        title: "Enrolados",
        overview:
          "O bandido mais procurado do reino, Flynn Rider, se esconde em uma torre e acaba prisioneiro de Rapunzel, residente de longa data do local. Dona de cabelos dourados e mágicos com 21 metros de comprimento, ela está trancada há anos e deseja desesperadamente a liberdade. A adolescente determinada faz um acordo com o rapaz, e, juntos, partem para uma aventura emocionante",

        poster:
          "https://upload.wikimedia.org/wikipedia/pt/9/99/Tangled_Disney.jpg"
      },
      {
        title: "Carros 2",
        overview:
          "O astro das corridas, Relâmpago McQueen, e o carro-guincho, Mate, viajam para disputar o primeiro Grand Prix Mundial, que irá revelar o carro mais veloz do planeta. Nessa jornada imperdível, Mate se envolve com um grupo de espionagem e vive grandes aventuras com seus amigos.",

        poster:
          "https://upload.wikimedia.org/wikipedia/pt/7/7e/Carros_2_P%C3%B4ster.jpg"
      },
      {
        title: "Frozen",
        overview:
          "Acompanhada por um vendedor de gelo, a jovem e destemida princesa Anna parte em uma jornada por perigosas montanhas de gelo na esperança de encontrar sua irmã, a rainha Elsa, e acabar com a terrível maldição de inverno eterno, que está provocando o congelamento do reino",

        poster: "https://upload.wikimedia.org/wikipedia/pt/e/e5/Frozen_2013.png"
      },
      {
        title: "Moana",
        overview:
          "Uma jovem parte em uma missão para salvar seu povo. Durante a jornada, Moana conhece o outrora poderoso semideus Maui, que a guia em sua busca para se tornar uma mestre em encontrar caminhos. Juntos, eles navegam pelo oceano em uma viagem incrível.",

        poster:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGT5Qbj1vt1y-S1-YgSpwEL2XVSgQ1iNvOeA26qzd2V0bs1tTQ"
      }
    ]
  };
  render() {
    return (
      <>
        <CONTAINER2>
          <p>destaques</p>
        </CONTAINER2>

        <CONTAINER>
          <Carousel wrapAround={true} slidesToShow={4}>
            {this.state.listMovies.map((item) => (
              <MAE>
                <img src={item.poster} />

                <div>
                  <h2> {item.title} </h2>
                  <h3> {item.overview} </h3>
                </div>
              </MAE>
            ))}
          </Carousel>
        </CONTAINER>
      </>
    );
  }
}
