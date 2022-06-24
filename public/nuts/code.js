//var map = L.map('map').setView([34.0638004,-118.2302132], 10);
var map = L.map('map').setView([45.0735886, 7.605567], 10);
setTile()
L.control.scale().addTo(map);

function setTile(){
	L.tileLayer(document.querySelector('input[name="tipus"]:checked').value).addTo(map);
}

var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: '',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var burgirIcon = new L.Icon({
  iconUrl: './img/burgir.png',
  shadowUrl: '',
  iconSize: [24, 24],
  iconAnchor: [5, 10],
  popupAnchor: [10, -34],
  shadowSize: [24, 24]
});

var jackIcon = new L.Icon({
  iconUrl: './img/jack.png',
  shadowUrl: '',
  iconSize: [30, 30],
  iconAnchor: [34, 20],
  shadowSize: [54, 54]
});

////////////////////////////////////////

var foods = []
var places = []
var halloween = []
var not_confirmed = []
var distances = []
var hubs = []


handlePlace()
handleFood()
handleHalloween()
handleUnconfirmed()
handleDistance()
handleHub()

/////////////////////////////////////////

function handlePlace(){
  if(document.querySelector('input[name="placeLegend"]').checked) {
    //PLACES
    afegir([41.9655403,2.7388837], "Bescanó");
    afegir([34.0101225,-118.4962244], "Santa Monica Pier and Beach");
    afegir([34.010522994422175, -118.49580552968682], "Starbuck Pier");
    afegir([33.98547801667092, -118.47260031816063], "Muscle Beach");
    afegir([34.101668967664395, -118.34462554204954], "Inici Fame Walk");
    afegir([34.10172923061826, -118.3224437532545], "Final Fame Walk");
    afegir([34.10115398836917, -118.34470198425869], "Emerson Theatre");
    afegir([34.13419619144182, -118.3215586594631], "MYSTERY");
    afegir([33.985404941031746, -118.47343585793575], "Squash Explosiu");
    afegir([33.94449007374263, -118.40812799930345], "Airport (LAX)");
    afegir([41.30265812238073, 2.083713963630138], "El prat");

    //TURIN
    afegir([45.19878008751049, 7.647756919104183], "Airport (TRN)");
    afegir([45.06899032237321, 7.684347015341319], "Museu Egipci");
    afegir([45.06925472219995, 7.693373442128159], "Mole Antonelliana");
    afegir([45.07151209763401, 7.686021746023955], "Palazzo Madama");
    afegir([45.07360652660757, 7.686632107389228], "Palacio Real de Turín");
    afegir([45.05617317832121, 7.686951817230821], "Parco del Valentino");
  }
  else
    delPlace()
}

function afegir(p,n)
{
  places.push(L.marker(p)
  .bindTooltip(n)
  .addTo(map))
}

function delPlace() {
  places.map(place => map.removeLayer(place))
}

function handleFood() {
  if(document.querySelector('input[name="foodLegend"]').checked) {
    //MENJARS
    afegirFood([34.04710261584794, -118.34029518897364], "Five Guys #1");
    afegirFood([34.06219169923002, -118.3499037190155], "Five Guys #2");

    //TURIN
    afegirFood([45.07099833327905, 7.679481938950439], "Starbucks 1");
    afegirFood([45.066526151369416, 7.691567751051524], "Sweet Lab");
    afegirFood([45.06824188394346, 7.695611592131157], "Burger explosiva");
    afegirFood([45.06713213782379, 7.68895238319769], "100 montaditos");
  }
  else
    delFood()
}

function afegirFood(p,n)
{
  foods.push(L.marker(p, {
    icon: burgirIcon
  })
  .bindTooltip(n).addTo(map))
}

function delFood() {
  foods.map(food => map.removeLayer(food))
}

function handleHalloween(){
  if(document.querySelector('input[name="halloweenLegend"]').checked) {
    //HALLOWEEN
    afegirHalloween([34.13821011592698, -118.35338088084781], "Universal Studios");
    afegirHalloween([34.0501312549111, -118.31734168256287], "Murder House (AHS)");
    afegirHalloween([33.81224616157229, -117.91896519629202], "Disneyland (miki calabaza)");
    afegirHalloween([34.20153432221186, -118.21121786121351], "Parque calabazas");
  }
  else
    delHalloween()
}

function afegirHalloween(p,n)
{
  halloween.push(L.marker(p, {
    icon: jackIcon
  })
  .bindTooltip(n).addTo(map))
}

function delHalloween() {
  halloween.map(halloween_ => map.removeLayer(halloween_))
}

function handleUnconfirmed() {
  if(document.querySelector('input[name="unconfirmedLegend"]').checked) {
    want_to_location([34.00853260984171, -118.49697447127076], "Lucifer S02E18 33:50");
    want_to_location([34.00815152328652, -118.49652177931772], "Baywatch (1989) tower");
    want_to_location([34.11909217762249, -118.3003768709492], "Observatori");
    want_to_location([34.09088395079369, -118.39399287613533], "Eclipse Tower");
    want_to_location([34.090525183180056, -118.39208778550851], "Eclipse Tower (Take photo)");
    want_to_location([34.076091455302084, -118.42950848465397], "Playboy mansion");
    want_to_location([33.81469056831722, -117.92130531200917], "STAR WARS CHULI");

    //turin
    want_to_location([45.137311305345996, 7.620131576706593], "Castillo de Venaria");
    want_to_location([45.08139320358436, 7.767763130682637], "Basílica de Superga");
    want_to_location([45.06815776033573, 7.6809146], "Gates of Hell");
    want_to_location([45.07249208041872, 7.683633346023955], "Church of the Holy Trinity");
  }
  else
    delUnconfirmed()
}

function want_to_location(p,n)
{
  not_confirmed.push(L.marker(p, {
    icon: orangeIcon
  })
  .bindTooltip(n).addTo(map))
}

function delUnconfirmed() {
  not_confirmed.map(not_confirmed_ => map.removeLayer(not_confirmed_))
}

function handleDistance() {
  if(document.querySelector('input[name="distanceLegend"]').checked) {
    //DISTANCIES
    addDistance([
      [34.13821011592698, -118.35338088084781],
      [34.13419619144182, -118.3215586594631]
    ],
    "?")

    addDistance([
      [34.010522994422175, -118.49580552968682],
      [33.98547801667092, -118.47260031816063]
    ],
    "3,7 KM (🚶44m, 🚗7m)")

    addDistance([
      [34.101668967664395, -118.34462554204954],
      [34.10172923061826, -118.3224437532545]
    ],
    "2 KM (🚶?m, 🚗6m)")

    addDistance([
      [34.101668967664395, -118.34462554204954],
      [34.10115398836917, -118.34470198425869]
    ],
    "100 metres (🚶1m)")
  }
  else
    delDistances()
}

function addDistance(points, distance) {
  distances.push(L.polyline(points)
  .bindTooltip(distance)
  .addTo(map))
}

function delDistances() {
  distances.map(distance => map.removeLayer(distance))
}

function handleHub(){
  if(document.querySelector('input[name="hubLegend"]').checked) {
    afegirHub([34.0861866730127, -118.31550097054951], "Home");
    afegirHub([45.033001061022105, 7.666267915341318], "Hotel");
  }
  else
    delHub()
}

function afegirHub(p,n)
{
  hubs.push(L.marker(p, {
    icon: orangeIcon
  })
  .bindTooltip(n)
  .addTo(map))
}

function delHub() {
  hubs.map(hub => map.removeLayer(hub))
}

function flight(points, distance) {
  let polylineMeasure = L.control.polylineMeasure({
    unit: 'kilometres',
    showBearings:false,
    clearMeasurementsOnStop: false,
    showClearControl: false,
    showUnitControl: false
  })

  polylineMeasure
  //.bindTooltip(distance)
  .addTo(map)

  polylineMeasure.seed([points])
}


/*
flight([
  [41.30265812238073, 2.083713963630138],
  [33.94449007374263, -118.40812799930345]
],
"9.674,65 km (✈️~13 h y 10 min)")
*/

function createRoute(coord1, coord2) {
	var routeControl = L.Routing.control({
	router: new L.Routing.OSRMv1({
		language: 'en',
		serviceUrl: "https://routing.openstreetmap.de/routed-foot/route/v1"
		//serviceUrl: "https://routing.openstreetmap.de/routed-car/route/v1"
		//serviceUrl: "https://routing.openstreetmap.de/routed-bike/route/v1"
	}),
	waypoints: [
		coord1,
		coord2
	],
	lineOptions: {
		styles: [{ color: "#6FA1EC", weight: 4 }]
	},
	show: false,
	waypointMode: 'snap',
	createMarker: function(i, wp, nWps) {
        //return L.marker(wp.latLng).bindPopup('I\'m waypoint ' + i);
  },
	addWaypoints: false,
	routeWhileDragging: false,
	draggableWaypoints: false,
	fitSelectedRoutes: false,
	// showAlternatives: true,
	// allowUTurns: true
	})

	routeControl.on('routesfound', function(e) {
		var routes = e.routes;
		var summary = routes[0].summary;
		// alert distance and time in km and minutes
		//alert('Total distance is ' + Math.round(summary.totalDistance / 1000) + ' km and total time is ' + Math.round(summary.totalTime % 3600 / 60) + ' minutes');
	});

	routeControl.addTo(map);
}

createRoute([33.94449007374263, -118.40812799930345], [34.0861866730127, -118.31550097054951]);

//Turin
createRoute([45.033001061022105, 7.666267915341318], [45.07099833327905, 7.679481938950439]);