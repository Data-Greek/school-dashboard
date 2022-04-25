import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import {
  Container,
  Row,
  Col,
  Tab,
  Tabs,
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
  // dispatch function + navigate (redirection)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // selection du state (données chargées)
  const studentsData = useSelector((state) => state.studentReducers);
  const { students } = studentsData;

  // Chargement des paramètres de connexion
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    // Display database information
    dispatch(studentsActions());

    // Redirection des utilisateurs non authentifié
    if (!userInfo || userInfo === undefined || userInfo === null) {
      navigate("/");
    } else {
      console.log(students.map((student) => student.id));
    }
  }, [userInfo, navigate]);

  // Test Boostrap Table
  const columns = [
    {
      dataField: "id",
      text: "id",
      sort: true,
      // filter: textFilter(),
    },
    {
      dataField: "sex",
      text: "sexe",
      sort: true,
    },
    {
      dataField: "age",
      text: "age",
      sort: true,
    },
    {
      dataField: "address",
      text: "Lieu de vie",
      sort: true,
    },
    {
      dataField: "aggregated_notation",
      text: "Moy. Générale",
      sort: true,
    },
    {
      dataField: "studytime",
      text: "Temps de travail personnel",
      sort: true,
    },
    {
      dataField: "Dalc",
      text: "Consommation d'alcool",
      sort: true,
    },
    {
      dataField: "Medu",
      text: "Niveau d'étude de la mère",
      sort: true,
    },
    {
      dataField: "Fedu",
      text: "Niveau d'étude du père",
      sort: true,
    },
    {
      dataField: "health",
      text: "État de santé",
      sort: true,
    },
    {
      dataField: "famrel",
      text: "Relation familiale",
      sort: true,
    },
    {
      dataField: "famsup",
      text: "Aide familiale",
      sort: true,
    },
  ];

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
                    <h5 className="text-center" style={{ color: "green" }}>
                      Cliquez sur les colonnes afin de filtrer les informations
                    </h5>
                  </Row>
                  {/* TABLEAU DE DONNÉES */}
                  <BootstrapTable
                    keyField="id"
                    data={students}
                    columns={columns}
                    striped
                    hover
                    condensed
                    pagination={paginationFactory()}
                    filter={filterFactory()}
                    wrapperClasses="table-responsive"
                  />
                </Col>
                <Col></Col>
              </Row>
            </Tab>

            {/* TENDANCES GÉNÉRALES */}
            <Tab eventKey="KPI" title="Tendances générales">
              {/* PREMIERE RANGÉE */}
              <Row className="py-3">
                <Col>
                  <Alert className="text-center" variant="success">
                    <h6>
                      <strong>Nombre d'élèves</strong>
                    </h6>
                    <h1>{students.length}</h1>
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
              <p className="text-center">
                ⚠️idée future - non fonctionnelle / la recherche par nom ou ID
                peut également être intégrée dans le tableau de l'onglet
                relatifs aux aspects individuels
              </p>
            </Tab>
          </Tabs>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
