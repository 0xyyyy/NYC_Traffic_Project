var mymap = L.map('mapid').setView([40.819896, -73.930559], 12);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'; 

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
// Create circle layers with radius and fill color depending on the amount of traffic that passes through that intersection.
L.circle([40.72, -74.0070], {radius: 500}).addTo(mymap);
tiles.addTo(mymap)


// function myMap(latitude, longitude) 