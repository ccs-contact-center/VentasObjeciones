import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
 
  Form,
} from 'reactstrap'
import Arrastrables from './componentsExtras/Arrastrables'


class Actividad1View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

 

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2>Evaluación 1: </h2>
            </CardHeader>
            <CardBody className="">
              <Row>
                <Col xs="12">
                  <p>
                  Relaciona las columnas de acuerdo a lo aprendido durante el curso:

                  </p>
                </Col>
                <Col xs="12">
                  <Row className="centrado-fila">
                    <Col xs="12" sm="11" md="10">
                      <Form>
                        <div
                          className="cajaA2 centrado-fila"
                          style={{ backgroundColor: '#d5d4d8' }}
                        >
                          <Arrastrables />
                        </div>
                       
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <p>{JSON.stringify(this.state)}</p>  */}
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Actividad1View
