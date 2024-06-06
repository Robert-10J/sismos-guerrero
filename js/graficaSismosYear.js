import Chart from 'chart.js/auto';
import sismosForYear from '../db/sismosForYear.json';

async function drawGraphicSismosForYear() {
  new Chart(
    document.getElementById('lugares'), {
      type: 'bar',
      data: {
        labels: sismosForYear.map(row => row.year),
        datasets: [
          {
            label: 'Cantidad de Sismos por Año 2000-2023',
            data: sismosForYear.map(row => row.total)
          }
        ]
      }
    }
  )
}

export default drawGraphicSismosForYear;