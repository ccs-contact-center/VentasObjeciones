import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import quice from '../../assets/img/v/quice.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaQuiceView extends Component {
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
                src={quice}
                style={{ width: 260 }}
                alt="quice "
                className="img-fluid "
              />
            </Col>
            <Col xs="7" md="8" className="centrado-fila">
              <div className="cajaRoja text-justify">
                <p>
                  <b>1. Es demasiado caro</b>
                </p>
                <p>
                  Las objeciones sobre el precio son las más comunes y pueden venir de
                  prospectos que realmente están interesados en comprar el producto.
            </p>
                <p>
                  Presta atención: si solo te basas en el precio para cerrar la venta,
                  te convertirás en un simple intermediario.
            </p>
                <p>
                  En cambio, debes hacer hincapié en el gran valor que ofrece el producto.
            </p>
              </div>
            </Col>



          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaQuiceView
