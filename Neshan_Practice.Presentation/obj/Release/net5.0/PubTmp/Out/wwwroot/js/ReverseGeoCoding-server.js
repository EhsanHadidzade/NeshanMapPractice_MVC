var centerLat = document.getElementById("center_lat");
var centerLng = document.getElementById("center_lng");

//init the map
var myMap = new L.Map('map', {
    key: 'web.f5db5ecac3ff4aeeaf88dff32bfab5f6',
    maptype: 'dreamy',
    poi: true,
    traffic: false,
    center: [31.3652841, 48.6808619],
    zoom: 14
});
//adding the marker to map
var marker = L.marker([35.699739, 51.338097]).addTo(myMap);
centerLat.value = "35.699739";
centerLng.value = "51.338097";
//on map binding
myMap.on('click', addMarkerOnMap);


//on map click function
function addMarkerOnMap(e) {
    marker.setLatLng(e.latlng);
    centerLat.value = e.latlng.lat;
    centerLng.value = e.latlng.lng;
    reverse();
}

centerLng.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        marker.setLatLng([centerLat.value, centerLng.value]);
        reverse();
    }
})

//sending request to Reverse API
function reverse() {
    marker.setLatLng([centerLat.value, centerLng.value]);
    var log = document.getElementById("log");
    //making url 
    var url = `https://api.neshan.org/v2/reverse?lat=${centerLat.value}&lng=${centerLng.value}`;
    //add your api key
    var params = {
        headers: {
            'Api-Key': 'service.496917db46ac441dbd241d1ac82c9f6c'
        },

    };
    //sending get request
    axios.get(url, params)
        .then(data => {
            myMap.flyTo([centerLat.value, centerLng.value], 16);
            marker.bindPopup(data.data.formatted_address).openPopup();
            document.getElementById("address").textContent = data.data.formatted_address;
            document.getElementById("addressValue").value = data.data.formatted_address;
            debugger
        }).catch(err => {
            console.log("error = " + err);
            log.textContent = "Nothing found";

        });



}





