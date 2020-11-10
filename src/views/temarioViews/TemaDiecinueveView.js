import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import diecinueve from '../../assets/img/v/diecinueve.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDiecinueveView extends Component {
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
                  Ejemplos
                </b>
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="5" md="4" className="centrado-fila">
              <img
                src={diecinueve}
                style={{ width: 260 }}
                alt="diecinueve "
                className="img-fluid  bordeImagen"
              />
            </Col>
            <Col xs="7" md="8" className="centrado-fila">
              <div className="cajaRoja text-justify">
                <p>
                  <b>5. Ahora no tengo tiempo.</b>
                </p>
                <p>
                  Esto es algo muy común entre los profesionales en la actualidad.
                  Explica que tu intención no es iniciar una conversación extensa,
                  sino determinar brevemente si el producto que ofreces es adecuado
                  para su empresa.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiecinueveView
