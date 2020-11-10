import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class Fin extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">

        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <div className="cajaGris">
                <h3>
                  GRACIAS
                </h3>
                <p>
                  Tratar las objeciones requiere práctica. Te invitamos a que pongas en practica lo aprendido
                  hoy para que mejores en el desempeño de tus llamadas.
              </p>
                <p>
                  Peter F. Drucker dijo:<br/>
                  “La calidad de un producto o servicio no es lo que has puesto en él, es lo que el cliente 
                  obtiene de él”.

              </p>
                <p>

                  Se trata de utilizar lo averiguado en la investigación y vender tu producto desde el 
                  beneficio para el cliente.

              </p>
              </div>
            </Col>
            <Col xs="9">
              <Row className="centrado-fila mt-3">
                <Col xs="12">
                  <div

                    className="cajaRoja
                   ml-2 mr-2"
                  >
                    {/* <h2 className="text-center">Gracias</h2> */}
                    <p className="text-center">
                      www.ccscontactcenter.com
                      <br />
                      CDMX
                      <br />
                      Amores 321 1° piso
                      <br />
                      Col. Del Valle
                      <br />
                      C.P. 03100 <br />
                      Tel. +52 (55) 5091.9160
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default Fin;
