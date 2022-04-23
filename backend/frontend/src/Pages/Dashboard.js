import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { studentsActions } from "../Redux/Actions/studentsActions";

// Charts
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import PieChartTwo from "../Charts/PieChartTwo";
import PieChartThree from "../Charts/PieChartThree";
import BarChartTwo from "../Charts/BarChartTwo";

function Dashboard() {
  // dispatch function
  const dispatch = useDispatch();

  // selection du state (données chargées)
  const studentsData = useSelector((state) => state.studentReducers);
  const { error, loading, students } = studentsData;

  useEffect(() => {
    dispatch(studentsActions());
  }, []);

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
                            Indicateurs socio-démo'
                            <br />
                          </strong>
                        </p>
                      </Alert>
                    </Col>
                    <Col sm={3}>
                      {" "}
                      <Alert variant="danger">
                        <p className="text-center">
                          <strong>
                            Investissement personnel
                            <br />
                          </strong>
                        </p>
                      </Alert>
                    </Col>
                    <Col sm={3}>
                      {" "}
                      <Alert variant="primary">
                        <p className="text-center">
                          <strong>
                            Environnement familial
                            <br />
                          </strong>
                        </p>
                      </Alert>
                    </Col>
                    <Col sm={3}>
                      {" "}
                      <Alert variant="warning">
                        <p className="text-center">
                          <strong>
                            État de santé général <br />
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
                        <th className="text-center">School</th>
                        <th className="text-center">Sexe</th>
                        <th className="text-center">Age</th>
                        <th className="text-center">Localité</th>
                        <th className="text-center">Temps de travail</th>
                        <th className="text-center">Nbre d'abscences</th>
                        <th className="text-center">Rapport à l'alcool</th>
                        <th className="text-center">Niv. d'étude de la mère</th>
                        <th className="text-center">Niv. d'étude du père</th>
                        <th className="text-center">État de santé</th>
                        <th className="text-center">Bien être à la maison</th>
                        <th className="text-center">Assistance à la maison</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((data) => (
                        <tr key={data.id}>
                          <td className="text-center">{data.id}</td>
                          <td className="text-center">{data.school}</td>
                          <td className="text-center">{data.sex}</td>
                          <td className="text-center">{data.age}</td>
                          <td className="text-center">{data.address}</td>
                          <td className="text-center">{data.studytime}</td>
                          <td className="text-center">{data.absences}</td>
                          <td className="text-center">{data.Dalc}</td>
                          <td className="text-center">{data.Medu}</td>
                          <td className="text-center">{data.Fedu}</td>
                          <td className="text-center">{data.health}</td>
                          <td className="text-center">{data.famrel}</td>
                          <td className="text-center">{data.famsup}</td>
                          <td className="text-center">
                            {data.aggregated_notation}
                          </td>
                        </tr>
                      ))}
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
