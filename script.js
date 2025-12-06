const sensorData = [
  { temperature: 24.15, pressure: 904.02, humidity: 28.45, altitude: 951.94, timestamp: "2025-12-05T11:37:06" },
  { temperature: 24.17, pressure: 904.06, humidity: 28.63, altitude: 951.5, timestamp: "2025-12-05T11:47:06" },
  { temperature: 24.42, pressure: 904.06, humidity: 28.71, altitude: 951.58, timestamp: "2025-12-05T11:57:06" },
  { temperature: 24.34, pressure: 904.06, humidity: 28.46, altitude: 951.54, timestamp: "2025-12-05T12:07:06" },
  { temperature: 24.38, pressure: 904.04, humidity: 29.29, altitude: 951.68, timestamp: "2025-12-05T12:17:06" },
  { temperature: 24.35, pressure: 904.07, humidity: 28.64, altitude: 951.46, timestamp: "2025-12-05T12:27:06" }
];

// Convert timestamps to HH:MM
const timestamps = sensorData.map(d => {
  const date = new Date(d.timestamp);
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`;
});

const temperature = sensorData.map(d => d.temperature);
const pressure = sensorData.map(d => d.pressure);
const humidity = sensorData.map(d => d.humidity);
const altitude = sensorData.map(d => d.altitude);

// Chart creation function with gradient
function createChart(ctx, label, data, color) {
  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, color + '88');
  gradient.addColorStop(1, color + '11');

  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: timestamps,
      datasets: [{
        label: label,
        data: data,
        borderColor: color,
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'top', labels: { font: { size: 14 } } },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: '#333',
          titleColor: '#fff',
          bodyColor: '#fff',
          titleFont: { weight: 'bold' }
        }
      },
      scales: {
        x: { display: true, title: { display: true, text: 'Time (HH:MM)' }, grid: { color: '#eee' } },
        y: { display: true, title: { display: true, text: label }, grid: { color: '#eee' } }
      }
    }
  });
}

// Initialize all charts
createChart(document.getElementById('temperatureChart'), 'Temperature (°C)', temperature, '#FF5722');
createChart(document.getElementById('pressureChart'), 'Pressure (hPa)', pressure, '#3F51B5');
createChart(document.getElementById('humidityChart'), 'Humidity (%)', humidity, '#4CAF50');
createChart(document.getElementById('altitudeChart'), 'Altitude (m)', altitude, '#FFC107');









