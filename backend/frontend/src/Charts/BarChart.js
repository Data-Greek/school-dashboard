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
  labels: ["2 à 5 heures", "Moins de 2h ", "5 à 10 heures", "Plus de 10h "],
  datasets: [
    {
      label: ["Élèves en difficultés"],
      data: ["206", "119", "71", "27"],
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

function BarChart() {
  return (
    <Container>
      <h3 className="text-center py-3">
        Temps de travail des élèves en difficultés
      </h3>
      <Bar data={data} />
    </Container>
  );
}

export default BarChart;
