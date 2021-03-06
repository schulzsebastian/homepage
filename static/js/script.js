$('#fullpage').fullpage({
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Homepage', 'Skills', 'Interests', 'Contact']
});

$(document).ready(function() {
  var vm = new Vue({
    el: "#fullpage",
    data: {
      python: pythonSkills,
      pythonPrefix: 'py',
      js: jsSkills,
      jsPrefix: 'js',
      db: dbSkills,
      dbPrefix: 'db',
      other: otherSkills,
      otherPrefix: 'other',
      header1: 'SEBASTIAN SCHULZ',
      header2: 'Python & GIS Developer',
      h1: 'Python',
      h2: 'Javascript',
      h3: 'Databases',
      h4: 'Other',
      ilike: 'I like to travel'
    }
  })
  var map = L.map('map').setView([52.482780222078226, 18.676757812500004], 3);
  var osm =  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Travel map by Sebastian Schulz &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)
  var googleMaps = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: 'Travel map by Sebastian Schulz &copy <a href="http://www.maps.google.com">Google Maps</a>'
  });
  var citiesLayer = new L.FeatureGroup().addTo(map)
  var airportsLayer = new L.FeatureGroup().addTo(map)
  var overlayMaps = {'Visited cities': citiesLayer, 'Visited airports': airportsLayer}
  var baseMaps = {'OSM': osm, 'Google Maps': googleMaps}
  L.control.layers(baseMaps, overlayMaps).addTo(map);
  $.ajax({
    type:"GET",
    url:'../static/js/cities.geojson',
    dataType:'json',
    success: function(response){
      response.features.forEach(function(feature){
        var x = feature.geometry.coordinates[1]
        var y = feature.geometry.coordinates[0]
        var point = L.circle([x, y], 1000, {
          color: 'black',
          fillColor: '#333',
          fillOpacity: 0.5
        })
        citiesLayer.addLayer(point)
      })
      map.fitBounds(citiesLayer.getBounds())
    }
  });
  $.ajax({
    type:"GET",
    url:'../static/js/airports.geojson',
    dataType:'json',
    success: function(response){
      response.features.forEach(function(feature){
        var x = feature.geometry.coordinates[1]
        var y = feature.geometry.coordinates[0]
        var point = L.circle([x, y], 1000, {
          color: 'red',
          fillColor: '#333',
          fillOpacity: 0.5
        })
        airportsLayer.addLayer(point)
      })
    }
  });

});
