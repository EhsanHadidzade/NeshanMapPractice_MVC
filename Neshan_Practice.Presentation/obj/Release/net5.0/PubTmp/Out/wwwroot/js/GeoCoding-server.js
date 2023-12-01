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
//sending request to Geocoding API
function geocoding() {
    var log = document.getElementById("log");
    //getting adrress value from input tag
    var address = document.getElementById("address").value;
    //making url 
    var url = `https://api.neshan.org/v4/geocoding?address=${address}`;
    console.log(url);
    //add your api key
    var params = {
        headers: {
            'Api-Key': 'service.496917db46ac441dbd241d1ac82c9f6c'
        },

    };
    //sending get request
    axios.get(url, params)
        .then(data => {
            //using the data
            var lat = data.data.location.y;
            var lng = data.data.location.x;
            debugger
            //logging the location
            log.textContent = [lat, lng];

            //Filling My Result
            centerLat.value = data.data.location.y;
            centerLng.value = data.data.location.x;

            //update marker location to address 
            marker.setLatLng([lat, lng]);
            marker.bindPopup(address).openPopup();
            //set map center to address
            myMap.flyTo([lat, lng], 15);

        }).catch(err => {
            console.log("error = " + err);
            log.textContent = "Nothing found";

        });



}

