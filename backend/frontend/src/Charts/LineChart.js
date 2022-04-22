import React from "react";
import { Container } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
Chart.register(CategoryScale, LinearScale, LineElement, PointElement);

// Jeu de test
const data = {
  labels: ["", "", "", "", "", ""],
  datasets: [
    {
      label: "Élèves en difficultés",
      data: ["1", "3", "4", "10", "11", "12"],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
    },
  ],
};

function LineChart() {
  return (
    <Container>
      <h3 className="text-center py-3">Tendance des jours d'absences</h3>
      <Line data={data} />
    </Container>
  );
}

export default LineChart;
