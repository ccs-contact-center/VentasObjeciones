import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaVeintiunoView extends Component {
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
                  <b>1 - Balanza</b>
                </p>
                <p>
                  Ante una objeción real que impide directamente el que se concrete la venta,
                  el vendedor deberá de minimizar la objeción señalando los beneficios del producto.
                </p>
              </div>
            </Col>
            <Col xs="6" md="4" style={{ alignSelf: "stretch" }} className="cajaGris centrado-fila">
              <div className=" text-justify">
                <p>
                  <b>2 - Resumen de beneficios</b>
                </p>
                <p>
                  Resumir junto al cliente, las dudas que el cliente podría tener,
                  así como los beneficios del producto.
                </p>
              </div>
            </Col>
            <Col xs="6" md="4" style={{ alignSelf: "stretch" }} className="cajaRoja centrado-fila">
              <div className=" text-justify">
                <p>
                  <b>3 - Boomerang</b>
                </p>
                <p>
                  Cuando el cliente mantiene una postura inmanejable,
                  está en el vendedor contrarrestar el argumento de manera positiva.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila mt-2">
            <Col xs="6" md="4" style={{ alignSelf: "stretch" }} className="cajaGris centrado-fila ">
              <div className=" text-justify">
                <p>
                  <b>4 - Argumento</b>
                </p>
                <p>
                  Reconocer los comentarios de los clientes y convertirlos en beneficios de tu producto.
                </p>
              </div>
            </Col>
            <Col xs="6" md="4" style={{ alignSelf: "stretch" }} className="cajaRoja centrado-fila ml-1">
              <div className=" text-justify">
                <p>
                  <b>5 - Espejo</b>
                </p>
                <p>
                  Mencionas la objeción que el cliente te ha dicho, de tal manera que
                  este se extienda más en su argumento de por qué no adquirir el producto.
                  Así, puedes encontrar las verdaderas causas y obtener beneficios de ellas.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeintiunoView
