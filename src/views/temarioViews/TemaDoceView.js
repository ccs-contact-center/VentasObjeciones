import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import seis from '../../assets/img/v/seis.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDoceView extends Component {
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
                  Ignora la objeción
                </b><br />
                Otra estrategia puede ser ignorar la objeción, <b>aunque esta estrategia solo
                es válida cuando el cliente pretende ponernos en una situación ridícula para
                lucirse frente a sus compañeros, o cuando muestra una conducta y comentarios
                a todas luces groseros</b>; en ese caso, debemos interrumpirles, y luego continuar
                con la presentación o explicación como si no hubiera tenido lugar su comentario.
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
export default TemaDoceView
