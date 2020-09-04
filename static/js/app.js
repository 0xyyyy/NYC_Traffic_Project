var mymap = L.map('mapid').setView([40.7128, -74.0060], 12);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'; 

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
// Create circle layers with radius and fill color depending on the amount of traffic that passes through that intersection.
L.circle([40.72, -74.0070], {radius: 500}).addTo(mymap);
tiles.addTo(mymap)