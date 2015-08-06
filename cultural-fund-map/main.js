var map = L.map('map').setView([39.949669, -75.164361], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'cahdeemer.n2p8d0mj',
    accessToken: 'pk.eyJ1IjoiY2FoZGVlbWVyIiwiYSI6ImIwYzM3OGYyZTBmYmZlMWJmMzQ5OTNmZWRjMTA3NjNmIn0.4lMKKySybu846ym7-BNbYA'
}).addTo(map);

var dataSuccess = function( jsonData ) {
	console.log(jsonData);
	var layerOptions = {
		pointToLayer: function(featureData, latlng) {
			var markerOptions = {
				fillColor: '#f00',
				radius: (function(x) {
					return x / 1000;
				}(featureData.properties.grantAmount))
			};
			return L.circleMarker(latlng, markerOptions);
		}
	};
	var inventoryLayer = L.geoJson(jsonData, layerOptions);
	map.addLayer(inventoryLayer);

}; 

$.getJSON('data/inventory.json', dataSuccess);