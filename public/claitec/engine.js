var max = 73;
var max_rutes = 2;
var punters = [max];
var rutes = [max_rutes];
		
var map = L.map('map').setView([41.9668465,2.8373639], 15);
		L.tileLayer(document.querySelector('input[name="tipus"]:checked').value).addTo(map);
		L.control.scale().addTo(map);
		
var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var locationIcon = new L.Icon({
  iconUrl: 'https://icrescenti.com/places/img/location.png',
  shadowUrl: '',
  iconSize: [47, 47],
  iconAnchor: [24, 40],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

places();
update();
locations();

function places() {
    afegir(0, [41.9668465,2.8373639], "Claitec");
}

function sites() {
  
}

function locations() {
  afegir_location([41.9723367,2.840595], "Universitat de Girona");
}



function afegir(i,p,n)
{
  punters[i] = L.marker(p).bindTooltip(n)
  .bindPopup('Claitec HQ a Girona')
  .addTo(map);
}

function afegir_location(p,n)
{
  L.marker(p, {
        icon: locationIcon
      }).bindPopup(n).addTo(map);
}







function addroutepoint(a,b,c)
{
  L.Routing.control({
  waypoints: [
    L.latLng(a),
    L.latLng(b)
  ],
  createMarker: function(i, wp, nWps) {
    if (i === 0 || i === nWps - 1) {
      return L.marker(wp.latLng, {
        icon: greenIcon
      }).bindTooltip("<h4><b>" + c[i] + "</b></h4>");
    } else {
      return L.marker(wp.latLng, {
        icon: myViaIcon
      }).bindTooltip("<h4><b>" + c[i] + "</b></h4>");
    }
  },
  serviceUrl: 'https://icrescenti.com/places/'
}).addTo(map);
}

function update() {
		//L.marker([, ]).bindTooltip().addTo(map);
		var rad = document.mapes.tipus;
		var prev = null;
		for (var i = 0; i < rad.length; i++) {
			rad[i].addEventListener('change', function() {
				if (this !== prev) {
					prev = this;
				}
				L.tileLayer(this.value).addTo(map);
			});
		}
}

function clear() {
 for (i = 0; i<max; i++) map.removeLayer(punters[i]);
 //for (j = 0; j<max_rutes;j++) map.removeLayer(rutes[j]);
}





function cambiarvista() {
  var cntplaces = document.getElementById("placesvista");
  var cntrutilles = document.getElementById("rutillesvista");
  
  clear();
  
  if (cntplaces.checked == true)
  {
    places();
  }
  if (cntrutilles.checked == true)
  {
    sites();
  }
  
  
}