import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cinco from '../../assets/img/v/cinco.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCincoView extends Component {
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
                  Tipos de objeción
                </b>
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="8" md="8">
              <p>
                <b>
                  Dudas
                </b>
                : se dan cuando el cliente da objeciones, pero aún así,
                 está interesado en el producto o servicio.
              </p>
              <p>
                <b>
                  Excusas
                </b>
                  : se dan como pretexto para no realizar la compra, en ese caso debemos
                   poner punto final a la presentación o entrevista de venta pues, en caso
                    contrario, estaríamos perdiendo el tiempo.
              </p>
            </Col>
            <Col xs="4" md="3">
              <img
                src={cinco}
                style={{ width: 260 }}
                alt="cinco "
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>

          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView
