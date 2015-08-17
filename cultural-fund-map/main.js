var map = L.map('map').setView([39.949669, -75.164361], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'cahdeemer.n2p8d0mj',
    accessToken: 'pk.eyJ1IjoiY2FoZGVlbWVyIiwiYSI6ImIwYzM3OGYyZTBmYmZlMWJmMzQ5OTNmZWRjMTA3NjNmIn0.4lMKKySybu846ym7-BNbYA'
}).addTo(map);

var dataSuccess = function(jsonData) {
    console.log(jsonData);
    var layerOptions = {
        pointToLayer: function(featureData, latlng) {

            var getColor = function(x) {
            var color = '#99c5c3';

			if (x > 49999) {
			  color = '#002C35';
			} else if (x > 24999) {
			  color = '#006e85';
			} else if (x > 14999) {
			  color = '#4d9aaa';
			}

			return color;
			},

			getRadius = function(x) {
			var radius = 3;

			if (x > 1500000) {
			  radius = 15;
			} else if (x > 400000) {
			  radius = 12;
			} else if (x > 150000) {
			  radius = 9;
			} 

			return radius;
			},

			markerOptions = {
				color: '#f1f2f2',
				fillOpacity: 0.8,
				fillColor: getColor(featureData.properties.grantAmount),
				radius: getRadius(featureData.properties.orgBudget),
			}

			var popupOptions = {
				maxWidth: 220,
			};

			var popupContent = "<span class='org-name'><a href='" + (featureData.properties.website) + "'>" + (featureData.properties.name) + "</a></span> <br> Grant amount: $" + (featureData.properties.grantAmount) + "<br> Budget: $" + (featureData.properties.orgBudget);


			return L.circleMarker(latlng, markerOptions).bindPopup(popupContent, popupOptions);

		}
	};

	var inventoryLayer = L.geoJson(jsonData, layerOptions);
	map.addLayer(inventoryLayer);

}; 

$.getJSON('data/inventory.json', dataSuccess);