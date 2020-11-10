import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import seis from '../../assets/img/v/seis.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaOnceView extends Component {
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
                  Demora tu respuesta ante la objeción.
                </b><br />
                  Una estrategia ante una objeción puede ser demorar la respuesta,
                  hay clientes que objetan desde el inicio del contacto sin contar
                  con toda la información, en esos casos, podemos hacer un comentario
                  como el siguiente: «su objeción es interesante, pero permítame explicarle
                  algo que aún no le he comentado…».
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
export default TemaOnceView
