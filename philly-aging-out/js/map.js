
var map = L.map('map').setView([39.988, -75.146], 12);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'danaecmobley.93c497b4',
    accessToken: 'pk.eyJ1IjoiZGFuYWVjbW9ibGV5IiwiYSI6ImI4NTk0YWM4MWJlYjJiY2Y5ZWZmNjlmM2ViMGExYzk4In0.Lo6VOcZ5ZkTq9VVYDJo4Ew'
    }).addTo(map);

    //start Census Tracts
    function getColor(percentage) {
        return percentage > 30  ? '#7A0177' :
               percentage > 20  ? '#C51B8A' :
               percentage > 12   ? '#F768A1' :
               percentage > 6   ? '#FBB4B9' :
                          '#FEEBE2';
    }
    function addTractsToMap(data, map) {
        var layerOptions= { 
            style: function(featureData) {
                console.log(featureData.properties.PERCENT65);
                return {
                    fillColor: getColor(featureData.properties.PERCENT65),
                    weight: 1,
                    opacity: 1,
                    color: 'white',
                    fillOpacity: 0.7,
                };
            },
            //onEachFeature: function (featureData, layer) {
                //layer.bindPopup("Median age =" + featureData.properties.PERCENT65 + "");
            //}
        };
        var dataLayer = L.geoJson(data, layerOptions);
       dataLayer.addTo(map);
    }

    $.getJSON("data/AOP_Census_map.geojson", function(data) {addTractsToMap(data, map); });
    //end Census tracts

    //start Philadelphia farmers market locations 
            var dataFarmers = function(jsonData) {
                console.log(jsonData);
                var layerOptions = {
                    pointToLayer: function(featureData, latlng) {            

                        markerOptions = {
                            color: '#54FF1E',
                            fillOpacity: 1,
                            };
                        
                        return L.circleMarker(latlng, markerOptions);
                        },
                    onEachFeature: function (featureData, layer) {
                    layer.bindPopup ("<b>Market Name:</b>" + " " + featureData.properties.FARMER_S_MARKET_NAME + " "
                        )
                    }
                    };
                var farmerLayer = L.geoJson(jsonData, layerOptions);
                map.addLayer(farmerLayer);
            }; 

    $.getJSON("data/Philadelphia_Farmers_Markets.json", dataFarmers);
    //end Philadelphia farmers market locations

    //start Philadelphia older adult centers
            var dataOlderCenters = function(jsonData) {
                console.log(jsonData);
                var layerOptions = {
                    pointToLayer: function(featureData, latlng) {            

                        markerOptions = {
                            color: '#FFBA1E',
                            fillOpacity: 0.9,
                            };
                        return L.circleMarker(latlng, markerOptions);
                        },
                    onEachFeature: function(featureData, layer) {
                    layer.bindPopup ("<b>Site Name:</b>"+ " " + featureData.properties.SITE + " ")
                    }
                };
            var OlderLayer = L.geoJson(jsonData, layerOptions);
            map.addLayer(OlderLayer);
            }; 

    $.getJSON("data/Older_Adult_Centers_point.geojson", dataOlderCenters);
    //end Philadelphia older adult centers


    //start Philadelphia health centers  
        var dataCenters = function(jsonData) {
            console.log(jsonData);
            var layerOptions = {
                pointToLayer: function(featureData, latlng) {            

                    markerOptions = {
                        color: '#1A0126',
                        fillOpacity: 0.9,
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
                pointToLayer: function(featureData, xy) {            

                    markerOptions = {
                        color: '#FFFFFF',
                        fillOpacity: 0.9,
                        };
                    return L.circleMarker(xy, markerOptions);
                    }
                };
            var centerLayer = L.geoJson(jsonData, layerOptions);
            map.addLayer(centerLayer);
        }; 

        $.getJSON("data/DOH_Hospitals201011.json", dataHospitals);
    //end Philadelphia hospitals




