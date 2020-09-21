var mymap = L.map('mapid').setView([40.7209, -74.0007], 11);

const attribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
// L.circle([xCoord, yCoord], {radius: 500}).addTo(mymap)
tiles.addTo(mymap)

function initCircles () {
    var selector = d3.select("#selDataset")

    d3.json("http://127.0.0.1:5000/Segment_ID", function(error, data) {
        if (error) return console.warn(error);
        data.forEach((Segment) => {
            selector
                .append("option")
                .text(Segment)
                .property("value", Segment);
        });

        const firstSegment = data[0];

        // renderCircles(firstSegment)
    })
}

initCircles()