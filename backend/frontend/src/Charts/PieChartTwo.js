import React from "react";
import { Container } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);
// Jeu de test
const data = {
  labels: ["Féminin", "Masculin"],
  datasets: [
    {
      label: "# of Votes",
      data: [42, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function PieChartTwo() {
  return (
    <Container>
      <h3 className="text-center py-3">Répartition par sexe</h3>
      <Doughnut
        data={data}
        // options={{ maintainAspectRatio: false }}
      />
    </Container>
  );
}

export default PieChartTwo;
