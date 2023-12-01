//init the map
var myMap = new L.Map('map', {
    key: 'web.f5db5ecac3ff4aeeaf88dff32bfab5f6  ',
    maptype: 'dreamy',
    poi: true,
    traffic: false,
    center: [31.3652841, 48.6808619],
    zoom: 14
});

//marker layers
var markers = [];
var flag = false;
//adding on map click listner
myMap.on('click', function (e) {
    //is start button is clicked
    if (flag) {
        markers[markers.length] = L.marker(e.latlng, {
            title: "waypoints",
            icon: L.AwesomeMarkers.icon({
                icon: '',
                markerColor: 'darkblue',
                prefix: 'fa',
                html: (markers.length + 1)
            })
        }).addTo(myMap);
        document.getElementById("waypoints").textContent += "\n - " + e.latlng;
    }
});
//restarting the layers
function reset() {
    document.getElementById("tsp").disabled = false;
    flag = true;
    document.getElementById("start").textContent = "restart";
    document.getElementById("waypoints").textContent = "waypoints";
    for (var i = 0; i < markers.length; i++) {
        myMap.removeLayer(markers[i]);
    }
    markers = [];
}
//send http get request to tsp api
var check = true;
function tsp() {
    document.getElementById("tsp").disabled = true;
    if(check){
    flag = false;
    //making the url
    var waypoints = "";
    for (var i = 0; i < markers.length; i++) {
        waypoints += markers[i].getLatLng().lat + "," + markers[i].getLatLng().lng + "|";
    }
    waypoints = waypoints.substring(0, waypoints.length - 1);
    var url = `https://api.neshan.org/v3/trip?waypoints=${waypoints}&
    roundTrip=${document.getElementById("roundTrip").checked}&
    sourceIsAnyPoint=${document.getElementById("sourceIsAnyPoint").checked}&
    lastIsAnyPoint=${document.getElementById("lastIsAnyPoint").checked}`;
    //urlencode the url
    url = encodeURI(url);
    var params = {
        headers: {
            'Api-Key': 'service.496917db46ac441dbd241d1ac82c9f6c'
        },

    };
    //sending get request
    axios.get(url, params)
        .then(data => {
            console.log(data);
            for (var k = 0; k < Object.keys(data.data.points).length; k++) {
                myMap.removeLayer(markers[k]);
                markers[k] = L.marker(data.data.points[k].location, {
                    title: data.data.points[k].name,
                    icon: L.AwesomeMarkers.icon({
                        icon: '',
                        markerColor: 'green',
                        prefix: 'fa',
                        html: (data.data.points[k].index +1)
                    })
                }).addTo(myMap);
            }
        }).catch(err => {
            console.log("error = " + err);
        });

    }
}

function tspcheck() {

    if (document.getElementById("sourceIsAnyPoint").checked == false && document.getElementById("roundTrip").checked == false 
        && document.getElementById("lastIsAnyPoint").checked == false ) {
            document.getElementById("tsp").textContent = "This request is not supported";
            check = false;
    }else if(document.getElementById("sourceIsAnyPoint").checked == true && document.getElementById("roundTrip").checked == false 
    && document.getElementById("lastIsAnyPoint").checked == false){
        document.getElementById("tsp").textContent = "This request is not supported";
        check = false;
    }else {
        document.getElementById("tsp").textContent = "TSP";
        check = true;
    }



}

