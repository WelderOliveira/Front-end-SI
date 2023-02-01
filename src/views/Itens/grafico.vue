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
    const labels = ["01/2020", "02/2020", "01/2021", "02/2021", "01/2022", "02/2022"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Doações 2020 - 2023',
        data: [10, 70, 5, 0, 0, 3],
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