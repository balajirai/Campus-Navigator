// Initialize map
var map = L.map('map').setView([12.9716, 77.5946], 16);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);


// ✅ ICONS BASED ON TYPE
var icons = {
  academic: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/167/167707.png',
    iconSize: [30, 30]
  }),
  food: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
    iconSize: [30, 30]
  }),
  department: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    iconSize: [30, 30]
  }),
  lab: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png',
    iconSize: [30, 30]
  }),
  default: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [30, 30]
  })
};


// ✅ LOAD LOCATIONS FROM JSON
fetch('locations.json')
  .then(response => response.json())
  .then(data => {

    data.forEach(place => {

      var icon = icons[place.type] || icons.default;

      L.marker([place.lat, place.lng], { icon: icon })
        .addTo(map)
        .bindPopup(`<b>${place.name}</b><br>Type: ${place.type}`);

    });

  })
  .catch(error => {
    console.error("Error loading locations:", error);
  });


// ✅ USER LOCATION
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(pos) {

    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup("📍 You are here")
      .openPopup();

    map.setView([lat, lng], 17);
  });
}


// ✅ DEBUG: CLICK TO GET COORDINATES
map.on('click', function(e) {
  console.log("Lat:", e.latlng.lat, "Lng:", e.latlng.lng);
});