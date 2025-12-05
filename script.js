// Sample sensor data including all values
const sensorData = [
  { "temperature": 24.15, "pressure": 904.02, "humidity": 28.45, "altitude": 951.94, "co2": 410, "pm": 12, "voc": 150, "timestamp": "2025-12-05T11:37:06.262534" },
  { "temperature": 24.17, "pressure": 904.06, "humidity": 28.63, "altitude": 951.5, "co2": 415, "pm": 15, "voc": 155, "timestamp": "2025-12-05T11:37:38.004651" },
  { "temperature": 24.42, "pressure": 904.06, "humidity": 28.71, "altitude": 951.58, "co2": 420, "pm": 13, "voc": 160, "timestamp": "2025-12-05T11:39:06.816952" },
  { "temperature": 24.34, "pressure": 904.06, "humidity": 28.46, "altitude": 951.54, "co2": 418, "pm": 14, "voc": 158, "timestamp": "2025-12-05T11:39:38.658312" },
  { "temperature": 24.38, "pressure": 904.04, "humidity": 29.29, "altitude": 951.68, "co2": 422, "pm": 16, "voc": 162, "timestamp": "2025-12-05T11:40:10.351629" },
  { "temperature": 24.35, "pressure": 904.07, "humidity": 28.64, "altitude": 951.46, "co2": 419, "pm": 15, "voc": 159, "timestamp": "2025-12-05T11:40:41.983399" }
];

// Extract data
const timestamps = sensorData.map(d => new Date(d.timestamp).toLocaleTimeString());
const temperature = sensorData.map(d => d.temperature);
const pressure = sensorData.map(d => d.pressure);
const humidity = sensorData.map(d => d.humidity);
const altitude = sensorData.map(d => d.altitude);
const co2 = sensorData.map(d => d.co2);
const pm = sensorData.map(d => d.pm);
const voc = sensorData.map(d => d.voc);

// Function to create charts
function createChart(ctx, label, data, color) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: timestamps,
      datasets: [{
        label: label,
        data: data,
        borderColor: color,
        backgroundColor: color + '33',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'top' },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: {
        x: { display: true, title: { display: true, text: 'Time' } },
        y: { display: true, title: { display: true, text: label } }
      }
    }
  });
}

// Initialize charts
createChart(document.getElementById('temperatureChart'), 'Temperature (°C)', temperature, '#FF5722');
createChart(document.getElementById('pressureChart'), 'Pressure (hPa)', pressure, '#3F51B5');
createChart(document.getElementById('humidityChart'), 'Humidity (%)', humidity, '#4CAF50');
createChart(document.getElementById('altitudeChart'), 'Altitude (m)', altitude, '#FFC107');
createChart(document.getElementById('co2Chart'), 'CO₂ Concentration (ppm)', co2, '#9C27B0');
createChart(document.getElementById('pmChart'), 'Particulate Matter (µg/m³)', pm, '#00BCD4');
createChart(document.getElementById('vocChart'), 'VOC & TVOC Index', voc, '#FF9800');

