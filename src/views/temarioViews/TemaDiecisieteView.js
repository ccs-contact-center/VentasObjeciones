import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import diecisiete from '../../assets/img/v/diecisiete.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDiecisieteView extends Component {
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
                src={diecisiete}
                style={{ width: 260 }}
                alt="diecisiete "
                className="img-fluid  bordeImagen"
              />
            </Col>
            <Col xs="7" md="8" className="centrado-fila">
              <div className="cajaRoja text-justify">
                <p>
                  <b>3. Tengo otro proveedor</b>
                </p>
                <p>
                  Aunque parezca extraño, es excelente que un prospecto trabaje con un competidor,
                  dado que ya identificó una necesidad y una solución, por lo que no tendrás que 
                  ocuparte de educarlo. Puedes aprovechar el tiempo que sueles dedicar a esa tarea
                  para hablarle sobre las ventajas de tu producto.
                </p>
                <p>
                  Por otro lado, el hecho de que un prospecto trabaje con un competidor no implica
                  que esté satisfecho con el servicio que recibe. Hazle preguntas sobre su relación 
                  con el competidor: 
                </p>
                <p>
                  ¿Por qué eligió ese servicio? ¿Cuáles son los aspectos positivos de trabajar con esa empresa?
                  ¿Cuáles son los aspectos negativos? Presta mucha atención a los problemas que tu producto podría
                  resolver.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiecisieteView
