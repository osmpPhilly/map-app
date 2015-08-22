
var map = L.map('map').setView([39.969, -75.216], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'danaecmobley.93c497b4',
    accessToken: 'pk.eyJ1IjoiZGFuYWVjbW9ibGV5IiwiYSI6ImI4NTk0YWM4MWJlYjJiY2Y5ZWZmNjlmM2ViMGExYzk4In0.Lo6VOcZ5ZkTq9VVYDJo4Ew'
    }).addTo(map);

    //start Census Tracts
    function addTractsToMap(data, map) {
        var layerOptions= { 
            style: function(featureData) {
                console.log(featureData.properties.median_age);
                var x = featureData.properties.median_age;
            }
        };
        var dataLayer = L.geoJson(data, layerOptions);
        dataLayer.addTo(map);
        }

    $.getJSON("data/Census_Tracts_2010.json", function(data) { addTractsToMap(data, map); });
    //end Census tracts

    //start Philadelphia farmers market locations 
            var dataFarmers = function(jsonData) {
                console.log(jsonData);
                var layerOptions = {
                    pointToLayer: function(featureData, latlng) {            

                        markerOptions = {
                            color: '#54FF1E',
                            fillOpacity: 0.8,
                            };
                        return L.circleMarker(latlng, markerOptions);
                        }
                    };
                var farmerLayer = L.geoJson(jsonData, layerOptions);
                map.addLayer(farmerLayer);
            }; 

            $.getJSON("data/Philadelphia_Farmers_Markets.json", dataFarmers);
    //end Philadelphia farmers market locations

    //start Philadelphia older adult centers
            var dataOldercenters = function(jsonData) {
                console.log(jsonData);
                var layerOptions = {
                    pointToLayer: function(featureData, latlng) {            

                        markerOptions = {
                            color: '#FFBA1E',
                            fillOpacity: 0.8,
                            };
                        return L.circleMarker(latlng, markerOptions);
                        }
                    };
                var OlderLayer = L.geoJson(jsonData, layerOptions);
                map.addLayer(OlderLayer);
            }; 

            $.getJSON("data/Older_Adult_Centers_point.geojson", dataOldercenters);
    //end Philadelphia older adult centers


    //start Philadelphia health centers  
        var dataCenters = function(jsonData) {
            console.log(jsonData);
            var layerOptions = {
                pointToLayer: function(featureData, latlng) {            

                    markerOptions = {
                        color: '#000000',
                        fillOpacity: 0.8,
                        };
                    return L.circleMarker(latlng, markerOptions);
                    }
                };
            var centerLayer = L.geoJson(jsonData, layerOptions);
            map.addLayer(centerLayer);
        }; 

        $.getJSON("data/Philadelphia_Health_Centers.json", dataCenters);
    //end health centers

    //start Philadelphia hospitals  
        var dataHospitals = function(jsonData) {
            console.log(jsonData);
            var layerOptions = {
                pointToLayer: function(featureData, latlng) {            

                    markerOptions = {
                        color: '#FF0000',
                        fillOpacity: 0.4,
                        };
                    return L.circleMarker(latlng, markerOptions);
                    }
                };
            var centerLayer = L.geoJson(jsonData, layerOptions);
            map.addLayer(centerLayer);
        }; 

        $.getJSON("data/DOH_Hospitals201011.json", dataHospitals);
    //end Philadelphia hospitals



