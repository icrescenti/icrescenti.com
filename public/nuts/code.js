var map = L.map('map').setView([34.0638004,-118.2302132], 10);
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
  iconSize: [30, 30],
  iconAnchor: [34, 20],
  popupAnchor: [10, -34],
  shadowSize: [34, 34]
});

var jackIcon = new L.Icon({
  iconUrl: './img/jack.png',
  shadowUrl: '',
  iconSize: [30, 30],
  iconAnchor: [34, 20],
  shadowSize: [54, 54]
});

/////////////////////////////////////////

function afegir(p,n)
{
  L.marker(p)
  .bindTooltip(n)
  .addTo(map);
}

function afegirFood(p,n)
{
  L.marker(p, {
    icon: burgirIcon
  })
  .bindTooltip(n).addTo(map);
}

function afegirHalloween(p,n)
{
  L.marker(p, {
    icon: jackIcon
  })
  .bindTooltip(n).addTo(map);
}

function want_to_location(p,n)
{
  L.marker(p, {
    icon: orangeIcon
  })
  .bindTooltip(n).addTo(map);
}

function addDistance(points, distance) {
  L.polyline(points)
  .bindTooltip(distance)
  .addTo(map);
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

afegir([41.9655403,2.7388837], "Bescanó");
afegir([34.0101225,-118.4962244], "Santa Monica Pier and Beach");
afegir([34.010522994422175, -118.49580552968682], "Starbuck Pier");
afegir([33.98547801667092, -118.47260031816063], "Muscle Beach");
want_to_location([34.00853260984171, -118.49697447127076], "Lucifer S02E18 33:50");
afegir([34.101668967664395, -118.34462554204954], "Inici Fame Walk");
afegir([34.10172923061826, -118.3224437532545], "Final Fame Walk");
afegir([34.10115398836917, -118.34470198425869], "Bar Lucifer (Emerson Theatre)");
afegir([33.81469056831722, -117.92130531200917], "STAR WARS CHULI");
afegir([34.13419619144182, -118.3215586594631], "MYSTERY");
want_to_location([34.00815152328652, -118.49652177931772], "Baywatch (1989) tower");
afegir([33.985404941031746, -118.47343585793575], "Squash Explosiu");
afegir([33.94449007374263, -118.40812799930345], "Airport");
afegir([41.30265812238073, 2.083713963630138], "El prat");
want_to_location([34.11909217762249, -118.3003768709492], "Observatori");
want_to_location([34.09088395079369, -118.39399287613533], "Eclipse Tower");
want_to_location([34.090525183180056, -118.39208778550851], "Eclipse Tower (Take photo)");
want_to_location([34.076091455302084, -118.42950848465397], "Playboy mansion");

//HALLOWEEN

afegirHalloween([34.13821011592698, -118.35338088084781], "Universal Studios");
afegirHalloween([34.0501312549111, -118.31734168256287], "Murder House (AHS)");
afegirHalloween([33.81224616157229, -117.91896519629202], "Disneyland (miki calabaza)");
afegirHalloween([34.20153432221186, -118.21121786121351], "Parque calabazas");

//MENJARS
afegirFood([34.04710261584794, -118.34029518897364], "Five Guys");
afegirFood([34.06219169923002, -118.3499037190155], "Five Guys");

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


/*
flight([
  [41.30265812238073, 2.083713963630138],
  [33.94449007374263, -118.40812799930345]
],
"9.674,65 km (✈️~13 h y 10 min)")
*/