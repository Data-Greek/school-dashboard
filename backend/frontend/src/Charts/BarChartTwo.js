import React from "react";
import { Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
Chart.register(ArcElement, CategoryScale, LinearScale, BarElement);

// Jeu de test
const data = {
  labels: ["Très faible", "Faible", "Modéré", "Très forte", "Forte"],
  datasets: [
    {
      label: ["Élèves en difficulté"],
      data: [35, 12, 9, 4, 2],
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

function BarChartTwo() {
  return (
    <Container>
      <h3 className="text-center py-3">Consommation d'alcool en semaine</h3>
      <Bar data={data} />
    </Container>
  );
}

export default BarChartTwo;
