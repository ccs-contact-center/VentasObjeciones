import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import seis from '../../assets/img/v/seis.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaSieteView extends Component {
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
                  ¿Cómo manejarlas ?
                </b>
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="8" md="9">
              <p className="text-justify">
                <b>
                  Mantener la calma.
                </b><br />
                 Ante una objeción, debemos controlarnos y mantener la calma,
                 nunca debemos polemizar ni discutir con el cliente, debemos
                 recordar que una objeción no es una invitación a polemizar,
                 sino que puede ser un reclamo vedado del cliente para que
                 le brindemos más información.
              </p>
            </Col>
            <Col xs="4" md="3">
              <img
                src={seis}
                style={{ width: 260 }}
                alt="seis "
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>

          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSieteView
