// Store our API endpoint urls.

var earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
vartecplatesURL = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"

// Create layerGroups

var earthquakes = L.layerGroup();
var tectonicplates = L.layerGroup();

