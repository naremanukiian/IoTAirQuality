const sensorData = [
  { temperature: 24.15, pressure: 904.02, humidity: 28.45, altitude: 951.94, timestamp: "2025-12-05T11:37:06" },
  { temperature: 24.17, pressure: 904.06, humidity: 28.63, altitude: 951.5, timestamp: "2025-12-05T11:47:06" },
  { temperature: 24.42, pressure: 904.06, humidity: 28.71, altitude: 951.58, timestamp: "2025-12-05T11:57:06" },
  { temperature: 24.34, pressure: 904.06, humidity: 28.46, altitude: 951.54, timestamp: "2025-12-05T12:07:06" },
  { temperature: 24.38, pressure: 904.04, humidity: 29.29, altitude: 951.68, timestamp: "2025-12-05T12:17:06" },
  { temperature: 24.35, pressure: 904.07, humidity: 28.64, altitude: 951.46, timestamp: "2025-12-05T12:27:06" }
];

const timestamps = sensorData.map(d => new Date(d.timestamp).toLocaleTimeString());
const temperature = sensorData.map(d => d.temperature);
const pressure = sensorData.map(d => d.pressure);
const humidity = sensorData.map(d => d.humidity);
const altitude = sensorData.map(d => d.altitude);

function createChart(ctx, label, data, color) {
  return new Chart(ctx, {
    type: 'line',
    data: { labels: timestamps, datasets: [{ label, data, borderColor: color, backgroundColor: color + '33', fill: true, tension: 0.4 }] },
    options: {
      responsive: true,
      plugins: { legend: { display: true, position: 'top' }, tooltip: { mode: 'index', intersect: false } },
      scales: { x: { title: { display: true, text: 'Time' } }, y: { title: { display: true, text: label } } }
    }
  });
}

// Create charts
createChart(document.getElementById('temperatureChart'), 'Temperature (°C)', temperature, '#FF5722');
createChart(document.getElementById('pressureChart'), 'Pressure (hPa)', pressure, '#3F51B5');
createChart(document.getElementById('humidityChart'), 'Humidity (%)', humidity, '#4CAF50');
createChart(document.getElementById('altitudeChart'), 'Altitude (m)', altitude, '#FFC107');







