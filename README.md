# leaflet-challenge

## Part 1: Create the Earthquake Visualization

Your first task is to visualize an earthquake dataset. Complete the following steps:

Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed Links to an external site.page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:
3-Data

When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
4-JSON

Import and visualize the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

![image](https://user-images.githubusercontent.com/105513598/202333604-f824776d-2934-42f4-970f-22e262c69ba6.png)

Your visualization should look something like the preceding map.

## Part 2: Gather and Plot More Data (Optional with no extra points earning)

Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates

The following image is an example screenshot of what you should produce:

Perform the following tasks:

<ul><li>Plot the tectonic plates dataset on the map in addition to the earthquakes.</li>

<li>Add other base maps to choose from.</li>

<li>Put each dataset into separate overlays that can be turned on and off independently.</li>

<li>Add layer controls to your map.</li></ul>
