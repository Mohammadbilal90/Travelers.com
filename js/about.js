
  // Create the map
  var map = L.map('map').setView([25.276987, 55.296249], 2); // [Latitude, Longitude], Zoom

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Example marker for Dubai
  var marker = L.marker([25.276987, 55.296249]).addTo(map);
  marker.bindPopup("<b>Karachi</b><br>Click to explore!").openPopup();

  // Another marker
  var marker2 = L.marker([48.8566, 2.3522]).addTo(map);
  marker2.bindPopup("<b>Canada</b><br>The City of Light!");










  marker.bindPopup("<b>Karachi</b><br><img src='assets/images/map.jfif' width='100%' />");
