import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import seis from '../../assets/img/v/seis.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDiezView extends Component {
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
                  Sondea más sobre la objeción.
                </b><br />
                  Hecha la objeción, podemos optar por pedirle al cliente más explicaciones,
                  interrogarlo sobre el particular, procurando conocer sus razones; de ese modo,
                  no sólo obtenemos información que nos permita adaptar la presentación o entrevista
                  al cliente, sino que también, humanizamos la relación, pues demostramos interés por
                  sus opiniones.
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
export default TemaDiezView
