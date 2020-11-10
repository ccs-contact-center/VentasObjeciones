import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import dieciocho from '../../assets/img/v/dieciocho.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDieciochoView extends Component {
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
                src={dieciocho}
                style={{ width: 260 }}
                alt="dieciocho "
                className="img-fluid  bordeImagen"
              />
            </Col>
            <Col xs="7" md="8" className="centrado-fila">
              <div className="cajaRoja text-justify">
                <p>
                  <b>4. He visto el producto más barato en otro lado.</b>
                </p>
                <p>
                  Primero debes determinar a qué se refiere con esa frase.
                  ¿El prospecto intenta persuadirte para que ofrezcas un precio
                  más bajo que un competidor real? ¿O cree que puede conseguir un
                  producto similar y más económico que le brinde todo lo que necesita?
                </p>
                <p>
                  Si se trata de la primera opción, ofrece el mejor descuento que puedas
                  y resalta las características únicas de tu producto. Si solicita un precio
                  inferior, no insistas. En el segundo caso, lo mejor es aprovechar la comparación
                  con otro producto. ¿Cuáles son los aspectos diferenciales de tu servicio que resultan
                  más significativos para el prospecto? Haz hincapié en ellos y en su valor general, 
                  en lugar de centrarte en el precio.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciochoView
