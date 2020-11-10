import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import veinte from '../../assets/img/v/veinte.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaVeinteView extends Component {
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
                src={veinte}
                style={{ width: 260 }}
                alt="veinte "
                className="img-fluid  bordeImagen"
              />
            </Col>
            <Col xs="7" md="8" className="centrado-fila">
              <div className="cajaRoja text-justify">
                <p>
                  <b>6. No me interesa.</b>
                </p>
                <p>
                  Durante la  1ª llamada al prospecto, aún es muy pronto para que el
                  contacto sepa de manera definitiva si le interesa o no el producto. 
                </p>
                <p>
                  Ofrece enviar algunos materiales y programa una llamada de seguimiento.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaVeinteView
