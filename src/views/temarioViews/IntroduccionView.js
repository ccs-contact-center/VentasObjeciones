import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";



class IntroduccionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
           
            <Col xs="12" sm="8" md="9" lg="9">
              <p className="cajaRoja text-center pb-3">
                Al terminar este curso, queremos que tengas mayor visión de como manejar
                las negativas del cliente cuando realizas tus llamadas y que te impide cerrar una venta.
                En este curso te daremos algunos tips para que logres manejar las objeciones del cliente
                y poder encaminar al cierre tu venta.
              </p>
            </Col>
          
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default IntroduccionView;
