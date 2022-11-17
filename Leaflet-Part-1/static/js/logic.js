// Store our API endpoint as queryUrl.

var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Creating the map object
var myMap = L.map("map", {
   center:[38, -120],
   zoom: 5
})

//Layer Group
var earthquakes = L.layerGroup();
//Tile Layer
var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Getting GeoJSON data
d3.json(queryUrl).then((data) => {
    function markerSize (magnitude) {
        return magnitude * 4
    };

// Color the earthquake magnitude
    function chooseColor(magnitude) {
        switch (true) {
            case magnitude > 5:
               return "red";
            case magnitude > 4:
              return "orangered";
            case magnitude > 3:
              return "orange";
            case magnitude > 2:
              return "gold";
            case magnitude > 1:
              return "yellow";
            default:
              return "lightgreen";
        }
    };
    
    // Create GeoJSON layer
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker (latlng);
        },
    
        // Apply style to the GeoJSON
        style: function (feature) {
            return {
            color: "gray",
            radius: markerSize(feature.properties.mag),
            fillColor: chooseColor(feature.geometry.coordinates[2]),
            fillOpacity: 0.5,
            weight: 1.5
            }
        },

        //Create your popup
        onEachFeature: function(feature, layer) {
         layer.bindPopup("Location: " + feature.properties.place + "<br>Magnitude: " + feature.geometry.coordinates[2])
        }
    }).addTo(earthquakes);

    earthquakes.addTo(myMap);
})
  
// Adding legend
var legend = L.control({position: "bottomright"});
legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend"),
        grades = [0, 1, 2, 3, 4, 5];
        var colors = ["red", "orangered", "orange", "gold", "yellow", "lightgreen"]
    
    div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML += 
            '<i style="background:' + colors[i] + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
};
    
legend.addTo(myMap);





