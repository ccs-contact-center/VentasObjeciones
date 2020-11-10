import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import uno from '../../assets/img/v/uno.png'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Manejo de Objeciones</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <h3>
                <b>¿Qué es una objeción?</b>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>¿Qué es una objeción?</b>
              </h2>
            </Col>

          </Row>
          <Row className="centrado-fila">
            <Col xs="8" md="9">
              <p>
                Es una etapa del proceso de ventas en donde, luego de haber presentado un producto a un cliente potencial,
                se hace frente a las posibles objeciones que éste pueda realizar.
              </p>
              <p>
                Pueden aparecer durante 3 etapas de la venta:
              </p>
              <ul>
                <li className="ulli">
                  Durante el contacto inicial
                </li>
                <li className="ulli">
                  En la fase de argumentación
                </li>
                <li className="ulli">
                  En el cierre de la venta
                </li>
              </ul>
            </Col>
            <Col xs="4" md="3">
              <img
                src={uno}
                style={{ width: 260 }}
                alt="uno "
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
