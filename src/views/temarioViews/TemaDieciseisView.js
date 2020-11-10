import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import dieciseis from '../../assets/img/v/dieciseis.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDieciseisView extends Component {
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
                src={dieciseis}
                style={{ width: 260 }}
                alt="dieciseis "
                className="img-fluid  bordeImagen"
              />
            </Col>
            <Col xs="7" md="8" className="centrado-fila">
              <div className="cajaRoja text-justify">
                <p>
                  <b>2. No tengo dinero</b>
                </p>
                <p>
                  La empresa del prospecto podría no ser lo suficientemente grande o
                  no estar generando los ingresos necesarios para poder comprar el producto
                  en ese momento. Monitoriza su crecimiento y determina cómo puedes ayudar a
                  que la empresa llegue al estado ideal en el que pueda adquirir tu producto.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciseisView
