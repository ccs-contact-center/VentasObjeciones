import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cuatro from '../../assets/img/v/cuatro.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCatroView extends Component {
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
                  ¿Qué es el manejo de objeciones?
                </b>
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" md="3">
              <img
                src={cuatro}
                style={{ width: 260 }}
                alt="cuatro "
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="6" md="5">
              <p>
                Se define como la capacidad que tiene un vendedor para hacer frente
                a las objeciones del cliente potencial.
             </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCatroView
