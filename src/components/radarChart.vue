<script>
  import {
    Radar
  } from 'vue-chartjs'
  
  export default {
    extends: Radar,
    data() {
      return {
        chartdata: {
          labels: ['Management', 'Programming', 'Design', 'Communication', 'Marketing'],
          datasets: [{
            backgroundColor: 'rgba(0, 188, 212,0.5)',
            data: [4, 3, 4, 5, 4]
          }]
        },
        options: {
          pointLabels: {
            fontSize: 20
          },
          legend: {
            display: false,
          },
          scale: {
            pointLabels: {
              fontSize: 13,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 5,
              stepSize: 1,
              fontSize: 0
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted() {
      this.renderChart(this.chartdata, this.options)
    }
  }
</script>

<style>
  
</style>