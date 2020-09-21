var mymap = L.map('mapid').setView([40.7209, -74.0007], 11);

const attribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
// L.circle([xCoord, yCoord], {radius: 500}).addTo(mymap)
tiles.addTo(mymap)

L.marker([40.819896, -73.930559]).addTo(mymap)
    .bindPopup("Yearly Total: 1121449")
    .openPopup();

L.marker([40.817924, -73.856217]).addTo(mymap)
    .bindPopup("Yearly Total: 606923")
    .openPopup();

L.marker([40.775536, -73.991474]).addTo(mymap)
    .bindPopup("Yearly Total: 550750")
    .openPopup();

L.marker([40.685333, -73.9980713]).addTo(mymap)
    .bindPopup("Yearly Total: 360178")
    .openPopup();

L.marker([40.665558, -73.729787]).addTo(mymap)
    .bindPopup("Yearly Total: 346751")
    .openPopup();

L.marker([40.718437, -74.000535]).addTo(mymap)
    .bindPopup("Yearly Total: 337027")
    .openPopup();

L.marker([40.674311, -73.801369]).addTo(mymap)
    .bindPopup("Yearly Total: 328747")
    .openPopup();

L.marker([40.737574, -74.009815]).addTo(mymap)
    .bindPopup("Yearly Total: 313441")
    .openPopup();

L.marker([40.675206, -73.862901]).addTo(mymap)
    .bindPopup("Yearly Total: 311427.0")
    .openPopup();