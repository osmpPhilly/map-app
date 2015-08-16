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
				color: '#f1f2f2',
				fillOpacity: 0.9,
				fillColor: (function(x) {
					if (x > 49999)
					return '#002C35';
					if (x > 24999)
					return '#006e85';
					if (x > 14999)
					return '#4d9aaa'
					else
					return '#99c5c3';
				}
				(featureData.properties.grantAmount)),
				radius: (function(x) {
					if (x > 1500000)
					return 15;
					if (x > 400000)
					return 12;
					if (x >150000)
					return 9;
					if (x > 50000)
					return 6
					else 
					return 3;
				}
				(featureData.properties.orgBudget))
			}
			return L.circleMarker(latlng, markerOptions);
		}
	};

	var inventoryLayer = L.geoJson(jsonData, layerOptions);
	map.addLayer(inventoryLayer);

}; 

$.getJSON('data/inventory.json', dataSuccess);