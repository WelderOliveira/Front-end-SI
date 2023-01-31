<template>
  <div class="container">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'BarChart',
  mounted() {
    const ctx = document.getElementById('myChart');
    const labels = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Registro de chamados HelpDelivery',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
    });
    myChart;
  }
}
</script>