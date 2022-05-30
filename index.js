/* --- Model --- */

/* --- View --- */

/* --- Controller --- */

const labels = [
  'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec'
]

const data = {
  labels: labels,
  datasets: [{
    label: 'OTD',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [
      0.8, 0.82, 0.79, 0.83,
      0.85, 0.87, 0.82, 0.81,
      0.8, 0.88, 0.91, 0.96
    ],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

const otdLineChart = new Chart(
  document.getElementById('otdLineChart').getContext('2d'),
  config
);