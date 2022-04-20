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
} from "react-bootstrap";

function Dashboard() {
  return (
    <Container className="py-5">
      <Row>
        <Col></Col>
        <Col>
          <h3 className="text-center">Accompagnement des élèves 🎓</h3>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md={12}>
          <Tabs
            defaultActiveKey="Tableau"
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
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th className="text-center">#</th>
                        <th className="text-center">Produit A</th>
                        <th className="text-center">Produit B</th>
                        <th className="text-center">Support</th>
                        <th className="text-center">Confidence</th>
                        <th className="text-center">lift</th>
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
                <h6 style={{ color: "black" }}>Le total des deux écoles</h6>
                <Col>
                  <Alert className="text-center" variant="success">
                    <h6>
                      <strong>Nombre d'élèves</strong>
                    </h6>
                    <h1>649</h1>
                  </Alert>
                </Col>
                <Col>
                  <Alert className="text-center" variant="danger">
                    <h6>
                      <strong>Moyenne générale</strong>
                    </h6>
                    <h1>11.80</h1>
                  </Alert>
                </Col>
                <Col>
                  <Alert className="text-center" variant="warning">
                    <h6>
                      <strong>Élèves en difficulté</strong>
                    </h6>
                    <h1>256</h1>
                  </Alert>
                </Col>
              </Row>{" "}
              {/* DEUXIEME RANGÉE */}
              <Row className="py-3">
                <h6 style={{ color: "black" }}>Gabriel Pereira (GP)</h6>
                <Col>
                  <Alert className="text-center" variant="success">
                    <h6>
                      <strong>Nombre d'élèves</strong>
                    </h6>
                    <h1>300</h1>
                  </Alert>
                </Col>
                <Col>
                  <Alert className="text-center" variant="danger">
                    <h6>
                      <strong>Moyenne générale</strong>
                    </h6>
                    <h1>10.63</h1>
                  </Alert>
                </Col>
                <Col>
                  <Alert className="text-center" variant="warning">
                    <h6>
                      <strong>Élèves en difficulté</strong>
                    </h6>
                    <h1>156</h1>
                  </Alert>
                </Col>
              </Row>
              {/* TROISIEME RANGÉE */}
              <Row className="py-3">
                <h6 style={{ color: "black" }}>Mousinho da Silveira (MS)</h6>
                <Col>
                  <Alert className="text-center" variant="success">
                    <h6>
                      <strong>Nombre d'élèves</strong>
                    </h6>
                    <h1>349</h1>
                  </Alert>
                </Col>
                <Col>
                  <Alert className="text-center" variant="danger">
                    <h6>
                      <strong>Moyenne générale</strong>
                    </h6>
                    <h1>12.03</h1>
                  </Alert>
                </Col>
                <Col>
                  <Alert className="text-center" variant="warning">
                    <h6>
                      <strong>Élèves en difficulté</strong>
                    </h6>
                    <h1>100</h1>
                  </Alert>
                </Col>
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
