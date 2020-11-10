import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaVeintidosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Manejo de Objeciones </h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col>
              <h3>
                <b>
                  Técnicas de manejo de objeción
                </b>
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="6" md="4" style={{ alignSelf: "stretch" }} className="cajaRoja centrado-fila">
              <div className=" text-justify">
                <p>
                  <b>6 - Silencio</b>
                </p>
                <p>
                  No decir nada. Esto si ya se han aclarado varias objeciones y el cliente
                  aun se encuentra indeciso, dejarlo hablar hará que responda a sus confusiones internas.
                </p>
              </div>
            </Col>
            <Col xs="6" md="4" style={{ alignSelf: "stretch" }} className="cajaGris centrado-fila">
              <div className=" text-justify">
                <p>
                  <b>7 - Exagerar</b>
                </p>
                <p>
                  Utilizas la objeción dada por el cliente de una manera exagerada, abriéndole los ojos
                  al mismo de que no es una objeción con tanto poder como este creía.
                </p>
              </div>
            </Col>
            <Col xs="6" md="4" style={{ alignSelf: "stretch" }} className="cajaRoja centrado-fila">
              <div className=" text-justify">
                <p>
                  <b>8 - Colaboración</b>
                </p>
                <p>
                  Relacionas al cliente en la resolución del problema, haciéndolo así partícipe y
                  evitar respuestas o actitudes evasivas.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila mt-2">
            <Col xs="6" md="4" style={{ alignSelf: "stretch" }} className="cajaGris centrado-fila ">
              <div className=" text-justify">
                <p>
                  <b>9 - Telescopio</b>
                </p>
                <p>
                  Consiste en hacer que el cliente mire más allá del precio y que compare el costo
                  real con el tiempo de la oferta es menos cara  de lo que cree.
                </p>
              </div>
            </Col>
            <Col xs="6" md="4" style={{ alignSelf: "stretch" }} className="cajaRoja centrado-fila ml-1">
              <div className=" text-justify">
                <p>
                  <b>10– Compensación </b>
                </p>
                <p>
                  Consiste en mostrar ventajas superiores  a las que el cliente mencione.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeintidosView
