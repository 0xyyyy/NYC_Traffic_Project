// //create function to automatically update the setView when different segment_ID is selected from the dropdown menu
// // var url = "http://127.0.0.1:5000/api/v1.0/tpten"

// var mymap = L.map('mapid').setView([40.819896, -73.930559], 12);

// const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'; 

// const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const tiles = L.tileLayer(tileUrl, { attribution });
// // Create circle layers with radius and fill color depending on the amount of traffic that passes through that intersection.
// L.circle([40.72, -74.0070], {radius: 500}).addTo(mymap);
// tiles.addTo(mymap)


// function myMap(latitude, longitude) 
// need to have init function select reference to dropdown menu 

var mymap = null

function buildMap (Segment_ID) {



    var url = `http://127.0.0.1:5000/metadata/${Segment_ID}`
    d3.json(url, function(error, data) {
        document.getElementById('mapid').innerHTML = "<div id='mapid' style='width: 100%; height: 100%;'></div>" 
        if (error) return console.warn(error);
            var xCoord = data.latitude;
            var yCoord = data.longitude

    var mymap = L.map('mapid').setView([xCoord, yCoord], 15);

    const attribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    L.circle([xCoord, yCoord], {radius: 500}).addTo(mymap)
    tiles.addTo(mymap)
    
    
    });
};

function init() {

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

        buildMap(firstSegment)
        

    })
}

function changeView (Segment_ID) {

}

function optionChange(newSegment) {
    buildMap(newSegment)
}   


init();