import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import tres from '../../assets/img/v/tres.png'
import tres1 from '../../assets/img/v/tres1.png'
import tres2 from '../../assets/img/v/tres2.png'

class TemaTresView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Manejo de Objeciones </h3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <h3>
                <b>
                  Pueden ser dirigidas a:
              </b>
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="6" md="5">
              <p>
                <b>La empresa: </b>
              </p>
              <p>
                Cuando el cliente no confía en el negocio o empresa al cual representamos.
              </p>
            </Col>
            <Col xs="4" md="3">
              <img
                src={tres}
                style={{ width: 260 }}
                alt="tres "
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" md="3">
              <img
                src={tres1}
                style={{ width: 260 }}
                alt="tres1 "
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="6" md="5">
              <p>
                <b>Servicios de post-venta:</b>
              </p>
              <p>
                Al respaldo y soporte del producto: cuando no está conforme con los servicios
                de post venta que le ofrecemos.
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="6" md="5">
              <p>
                <b>El vendedor: </b>
              </p>
              <p>
                Cuando el cliente no confía en la persona que le ofrece el producto.
              </p>
            </Col>
            <Col xs="4" md="3">
              <img
                src={tres2}
                style={{ width: 260 }}
                alt="tres2 "
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
