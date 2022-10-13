mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFyaWhhb3JuYSIsImEiOiJjbDk2aHh3YW0wNHF5M3ZxYWhsa2syem5uIn0.8VIZI6MhZfO3ZMThSMp60Q";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
  projection: "globe" // display the map as a 3D globe
});
map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});
