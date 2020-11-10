import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import ReactPlayer from 'react-player'

import catorce from '../../assets/img/v/catorce.mp4'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCatorceView extends Component {
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
                Resumen
                </b>
              </h3>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="8" md="9" className="centrado-fila">
              <div className="cajaRoja">
              <ReactPlayer url={catorce} playing={true} controls={true} />
             
              </div>
            </Col>
          

          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCatorceView
