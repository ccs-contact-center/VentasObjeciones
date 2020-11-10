import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import dos from '../../assets/img/v/dos.png'
import dos1 from '../../assets/img/v/dos1.png'

class TemaDosView extends Component {
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
                  Pueden ser dirigidas a:
              </b>
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="8" md="9">
              <p>
                <b>El producto:</b>
              </p>
              <p>
                Cuando el cliente se resiste a cambiar el producto o la marca que usualmente compra,
                el producto no está dentro de sus prioridades de compra,
                o el cliente no encuentra razones suficientes para realizar la comprar.
              </p>
            </Col>
            <Col xs="4" md="3">
              <img
                src={dos}
                style={{ width: 260 }}
                alt="dos "
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>

          </Row>
          <Row className="centrado-fila">
            <Col xs="4" md="3" >
            <img
                src={dos1}
                style={{ width: 260 }}
                alt="dos1 "
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>
            <Col xs="5" md="5">
            <p>
                <b>El precio:</b>
              </p>
              <p>
                Cuando el cliente no reúne las exigencias de orden económico.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
