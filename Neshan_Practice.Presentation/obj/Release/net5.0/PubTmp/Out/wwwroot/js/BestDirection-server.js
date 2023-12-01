var Distance = document.getElementById("Distance");
var Duration = document.getElementById("Duration");
//init the map
var myMap = new L.Map('map', {
    key: 'web.f5db5ecac3ff4aeeaf88dff32bfab5f6',
    maptype: 'dreamy',
    poi: true,
    traffic: false,
    center: [31.3652841, 48.6808619],
    zoom: 14
});

//marker icons 
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
//marker layers
var markers = [];
//polyline layers
var polylines = [];
var flag = false;
//adding on map click listner
myMap.on('click', function (e) {
    //is start button is clicked
    if (flag) {
        if (markers.length == 0) {
            markers[0] = L.marker(e.latlng, {
                title: "origin",
                icon: greenIcon
            }).addTo(myMap);
            document.getElementById("origin").textContent += " : " + e.latlng;
            document.getElementById("help").textContent = "لطفا مقصد را انتخاب کنید";


        } else if (markers.length == 1) {
            markers[1] = L.marker(e.latlng, {
                title: "destination",
                icon: redIcon
            }).addTo(myMap);
            document.getElementById("destination").textContent += " : " + e.latlng;
            document.getElementById("help").textContent = "لطفا نقاط میانی را انتخاب کنید و سپس گزینه navigate را فشار دهید.";

        } else {
            markers[markers.length] = L.marker(e.latlng, {
                title: "waypoint",
                icon: goldIcon
            }).addTo(myMap);
            document.getElementById("waypoints").textContent += "\n - " + e.latlng;
        }
    }
});
//restarting the layers
function direction() {
    flag = true;
    document.getElementById("help").textContent = "لطفا مبدا را انتخاب کنید";
    document.getElementById("start").textContent = "restart";
    document.getElementById("origin").textContent = "origin";
    document.getElementById("destination").textContent = "destination";
    document.getElementById("waypoints").textContent = "waypoints";
    for (var i = 0; i < markers.length; i++) {
        myMap.removeLayer(markers[i]);
    }
    markers = [];
    for (var i = 0; i < polylines.length; i++) {
        myMap.removeLayer(polylines[i]);
    }
    polylines = [];
    document.getElementById("origin").textContent = "origin";


}
//send http get request to routing api
function navigation() {
    debugger
    document.getElementById("help").textContent = "برای انتخاب مسیر جدید گزینه restart را فشار دهید.";
    for (var i = 0; i < polylines.length; i++) {
        myMap.removeLayer(polylines[i]);
    }
    polylines = [];
    flag = false;
    //making the url
    var origin = markers[0].getLatLng().lat + "," + markers[0].getLatLng().lng;
    var destination = markers[1].getLatLng().lat + "," + markers[1].getLatLng().lng;
    var waypoints = "";
    for (var i = 2; i < markers.length; i++) {
        waypoints += markers[i].getLatLng().lat + "," + markers[i].getLatLng().lng + "|";
    }
    waypoints = waypoints.substring(0, waypoints.length - 1);
    var url = `https://api.neshan.org/v${(document.getElementById("traffic").checked) ? "4/direction" : "4/direction/no-traffic"}?type=${(document.getElementById("car").checked == true) ? "car" : "motorcycle"}&origin=${origin}&destination=${destination}`;
    console.log(markers.length);
    if (markers.length > 2) {
        url += "&waypoints=" + waypoints;
    }
    if (document.getElementById("bearing").value.length > 0) {
        url += "&bearing=" + document.getElementById("bearing").value;
    }
    if (!(document.getElementById("avoidTrafficZone").checked)) {
        url += "&avoidTrafficZone=false";
    }
    if (!(document.getElementById("avoidOddEvenZone").checked)) {
        url += "&avoidOddEvenZone=false";
    }
    if (document.getElementById("alternative").checked) {
        url += "&alternative=true";
    }
    console.log(url);
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

            //drawing the polylines
            for (var k = 0; k < Object.keys(data.data.routes).length; k++) {
                var color = generateRandomColor();
                for (var i = 0; i < Object.keys(data.data.routes[0].legs).length; i++) {
                    Distance.value = data.data.routes[0].legs[0].distance.text;
                    Duration.value = data.data.routes[0].legs[0].duration.text;
                    for (var j = 0; j < Object.keys(data.data.routes[0].legs[i].steps).length; j++) {
                        debugger
                        var stepPolyLine = data.data.routes[0].legs[i].steps[j].polyline;
                        //drawing the polyline of each step
                        polylines[polylines.length] = L.Polyline.fromEncoded(stepPolyLine, {
                            color: color
                        }).addTo(myMap);
                        makeDiveResualt(data.data.routes[k].legs[i].steps[j], j);


                    }
                }
            }
        }).catch(err => {
            console.log("error = " + err);
            log.textContent = "Nothing found";

        });
}
//random color generator :))
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//

function makeDiveResualt(data, index) {
    var resultsDiv = document.getElementById("resualt");
    var resultDiv = document.createElement("div");
    resultDiv.onclick = function (e) {
        myMap.flyTo([data.location.y, data.location.x], 16);
        // searchMarkers[index].setIcon(redIcon);
        // setTimeout(function(){
        //     searchMarkers[index].setIcon(greenIcon);
        // },4000);
        for (var i = 0; i < searchMarkers.length; i++) {
            if (i == index) {
                searchMarkers[i].setIcon(redIcon);
                continue;
            }
            searchMarkers[i].setIcon(greenIcon);
        }

    }
    resultDiv.dir = "ltr";
    var resultAddress = document.createElement("pre");
    resultAddress.textContent = `name : ${data.name} \n instruction : ${data.instruction} \n distance : ${data.distance.text} \n duration : ${data.duration.text}`;
    resultAddress.style = `border: solid ${generateRandomColor()};`;
    resultsDiv.appendChild(resultDiv);
    resultDiv.appendChild(resultAddress);

}