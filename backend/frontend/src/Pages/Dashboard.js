import React from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Tabs,
  Table,
  Alert,
  Form,
  Button,
} from "react-bootstrap";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import PieChart from "../Charts/PieChart";
import PieChartTwo from "../Charts/PieChartTwo";
import PieChartThree from "../Charts/PieChartThree";
import BarChartTwo from "../Charts/BarChartTwo";

function Dashboard() {
  return (
    <Container className="py-5">
      <Row>
        <Col></Col>
        <Col>
          <h3 className="text-center py-5">Accompagnement des élèves </h3>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={12}>
          <Tabs
            defaultActiveKey="KPI"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Tableau" title="Aspects individuels">
              {/* DISPLAY DATA */}
              <Row className="py-3">
                <Col></Col>
                <Col md={10}>
                  {/* MESSAGES EXPLICATIFS */}
                  <Row className="py-3">
                    <Col sm={3}>
                      {" "}
                      <Alert variant="success">
                        <p className="text-center">
                          <strong>
                            Moyenne générale
                            <br />
                            Indicateur n°1
                          </strong>
                        </p>
                      </Alert>
                    </Col>
                    <Col sm={3}>
                      {" "}
                      <Alert variant="info">
                        <p className="text-center">
                          <strong>
                            Absentéisme
                            <br />
                            Indicateur n°2
                          </strong>
                        </p>
                      </Alert>
                    </Col>
                    <Col sm={3}>
                      {" "}
                      <Alert variant="success">
                        <p className="text-center">
                          <strong>
                            Temps d'étude <br />
                            Indicateur n°3
                          </strong>
                        </p>
                      </Alert>
                    </Col>
                    <Col sm={3}>
                      {" "}
                      <Alert variant="success">
                        <p className="text-center">
                          <strong>
                            Santé <br />
                            Indicateur n°4
                          </strong>
                        </p>
                      </Alert>
                    </Col>
                  </Row>
                  {/* TABLEAU DE L'ANALYSE */}
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th className="text-center">id</th>
                        <th className="text-center">Sexe</th>
                        <th className="text-center">Age</th>
                        <th className="text-center">Moy. Générale</th>
                        <th className="text-center">Absentéisme</th>
                        <th className="text-center">Rapport à l'alcool</th>
                        <th className="text-center">État de santé</th>
                        <th className="text-center">Temps de travail</th>
                        <th className="text-center">Lieu de résidence</th>
                        <th className="text-center">Niv. d'étude de la mère</th>
                        <th className="text-center">Niv. d'étude du père</th>
                        <th className="text-center">Bien être à la maison</th>
                        <th className="text-center">Statut de l'élève</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {bdd_data.map((data) => (
                        <tr key={data.id}>
                          <td className="text-center">{data.id}</td>
                          <td className="text-center">{data.produit_A}</td>
                          <td className="text-center">{data.produit_B}</td>
                          <td className="text-center">{data.support}</td>
                          <td className="text-center">{data.confidence}</td>
                          <td className="text-center">{data.lift}</td>
                        </tr>
                      ))} */}
                    </tbody>
                  </Table>
                </Col>
                <Col></Col>
              </Row>
            </Tab>

            {/* TENDANCE GÉNÉRALE */}
            <Tab eventKey="KPI" title="Tendance générale">
              {/* PREMIERE RANGÉE */}
              <Row className="py-3">
                <Col>
                  <Alert className="text-center" variant="success">
                    <h6>
                      <strong>Nombre d'élèves</strong>
                    </h6>
                    <h1>423</h1>
                  </Alert>
                </Col>
                <Col>
                  <Alert className="text-center" variant="danger">
                    <h6>
                      <strong>Moyenne générale</strong>
                    </h6>
                    <h1>12.23</h1>
                  </Alert>
                  <p className="text-center">
                    8.68 de moyenne pour les élèves en difficultés
                  </p>
                </Col>
                <Col>
                  <Alert className="text-center" variant="warning">
                    <h6>
                      <strong>Élèves en difficulté</strong>
                    </h6>
                    <h1>62</h1>
                  </Alert>
                </Col>
              </Row>{" "}
              {/* DEUXIEME RANGÉE */}
              <Row className="py-3">
                <Col>
                  <BarChart />
                </Col>
                <Col>
                  <BarChartTwo />
                </Col>
              </Row>
              {/* TROISIEME RANGÉE */}
              <Row className="py-3">
                <Row className="py-3">
                  <Col md={4}>
                    <PieChart />
                  </Col>
                  <Col md={4}>
                    <PieChartTwo />
                  </Col>
                  <Col md={4}>
                    <PieChartThree />
                  </Col>
                </Row>
              </Row>
            </Tab>
            {/* RECHERCHE PAR ID */}
            <Tab eventKey="student" title="Recherche">
              <h5 className="text-center">
                <strong>Recherche par élève 🔍</strong>
              </h5>
              <Row className="py-5">
                <Col></Col>
                <Col sm={8} md={6}>
                  <Form.Label htmlFor="inputPassword5">
                    <strong>Nom ou référence de l'élève</strong>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    <p></p>
                  </Form.Text>
                </Col>
                <Col></Col>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    {" "}
                    <Button className="center-element">Rechercher</Button>
                  </Col>
                </Row>
              </Row>
            </Tab>
          </Tabs>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
