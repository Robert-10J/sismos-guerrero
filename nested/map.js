import coords from '../db/coords.json'

let map = L.map('map').setView([17.98, -100.01], 7.5);

let tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const coordinates = coords.map(point => [point.longitude, point.latitude]);

const geojsonFeatures = coordinates.map(coord => {
  return {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": coord
    },
    "properties": {}
  };
});

L.geoJson(geojsonFeatures).addTo(map);