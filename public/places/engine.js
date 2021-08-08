var max = 73;
var max_rutes = 2;
var punters = [max];
var rutes = [max_rutes];
		
var map = L.map('map').setView([41.8523094, 1.5745043], 8);
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
    afegir(0, [41.9793006, 2.8199439], "Girona");
    afegir(1, [41.9741672, 2.7949886], "Salt");
    afegir(2, [41.0893373, 0.6412887], "Móra d'Ebre");
    afegir(3, [45.6401872,0.1893908], "Soyaux");
    afegir(4, [45.6487407,0.1544351], "Angoulême");
    afegir(5, [42.5086094,1.5293608], "Andorra la Vella");
    afegir(6, [42.6269538,1.1225819], "Esterri d'Àneu");
    afegir(7, [42.7024558,0.7950064], "Vielha");
    afegir(8, [42.4103519,1.1286895], "Sort");
    afegir(9, [41.387275,2.1642407], "Barcelona");
    afegir(10, [48.8568823,2.3373116], "Paris");
    afegir(11, [41.6494336,-0.8912106], "Zaragoza");
    afegir(13, [39.4696972,-0.3771924], "València");
    afegir(14, [52.3729695,4.8949262], "Amsterdam");
    afegir(15, [52.496109,5.0742026], "Volendam");
    afegir(16, [52.9937683,6.5600695], "Assen");
    afegir(17, [53.0765996,8.8135325], "Bremen");
    afegir(18, [51.5076301,-0.1281788], "London");
    afegir(19, [42.2625543,3.1777519], "Roses");
    afegir(20, [42.0421824,3.1273738], "Torroella de Montgrí");
    afegir(21, [41.9589544,3.0394542], "La Bisbal de l'Empordà");
    afegir(22, [53.5875032,6.6710194], "Borkum");
    afegir(23, [41.9179707,3.1624551], "Palafrugell");
    afegir(24, [41.9655403,2.7388837], "Bescanó");
    afegir(25, [41.9570489,2.7999922], "Vilablareix");
    afegir(26, [41.9669048,2.7597596], "Montfullá");
    afegir(27, [41.9711026,2.7040036], "Vilanna");
    afegir(28, [41.9703782,2.6640375], "Bonmatí");
    afegir(29, [41.9562032,2.635372], "Anglès");
    afegir(30, [41.9378293,2.8409436], "Quart");
    afegir(31, [41.9314169,2.8098758], "Fornells de la Selva");
    afegir(32, [42.1182249,2.7650101], "Banyoles");
    afegir(33, [42.2655533,2.9579983], "Figueres");
    afegir(34, [42.1199565,3.130869], "l'Escala");
    afegir(35, [41.9130686,1.6791402], "Cardona");
    afegir(36, [41.8486321,3.1290605], "Palamós");
    afegir(37, [41.7225763,2.9302767], "Tossa de Mar");
    afegir(38, [41.8440596,3.0992724], "Sant Antoni de Calonge");
    afegir(39, [42.2892932,3.2781327], "Cadaqués");
    afegir(40, [42.1893364,3.0812687], "Sant Pere Pescador");
    afegir(41, [41.8179163,3.0668186], "Platja d'Aro");
    afegir(42, [41.7005911,2.8396692], "Lloret de Mar");
    afegir(43, [41.6746839,2.790755], "Blanes");
    afegir(44, [41.6063068,2.2868467], "Granollers");
    afegir(45, [41.5381026,2.4445635], "Mataró");
    afegir(46, [42.7005421,0.9308824], "Baqueira");
    afegir(47, [40.7356456,-74.1724793], "Newark (New Jersey)");
    afegir(48, [40.7811981,-73.9669306], "Manhattan (New York)");
    afegir(49, [41.9027503,12.4962008], "Roma");
    afegir(50, [41.9022413,12.4571018], "Civitas Vaticana");
    afegir(51, [42.3643193,14.1421119], "Chieti Scalo");
    afegir(52, [42.3472574,14.1644026], "Chieti");
    afegir(53, [42.4620207,14.216605], "Pescara");
    afegir(54, [41.9894063,2.7605867], "Sant Gregori");
    afegir(55, [41.8172952,2.5121085], "Arbúcies");
    afegir(56, [41.8878029,2.8746159], "Cassà de la Selva");
    afegir(57, [41.9376145,2.7619377], "Aiguaviva");
    afegir(58, [42.0519085,3.1916493], "l'Estartit");
    afegir(59, [41.7850809,3.0314903], "Sant Feliu de Guíxols");
    afegir(60, [41.5828305,2.3255221], "La Roca del Vallés");
    afegir(61, [40.7114007,0.7059688], "Deltebre");
    afegir(62, [41.1541383,1.1068096], "Reus");
    afegir(63, [41.1212913,1.2435046], "Tarragona");
    afegir(64, [42.0628929,2.6147613], "Sant Esteve de Llémena");
    afegir(65, [41.9699282,2.6205675], "La Cellera de Ter");
    afegir(66, [42.0097142,2.6031718], "Amer");
    afegir(67, [41.9863019,2.6146334], "El Pasteral");
    afegir(68, [42.0565901,2.5383855], "Les Planes d'Hostoles");
    afegir(69, [42.0773068,2.5092978], "Sant Feliu de Pallerols");
    afegir(70, [41.945599,2.5567304], "Osor");
    afegir(71, [41.2358171,1.8061905], "Sitges");
    afegir(72, [41.0760922,1.1354725], "Salou");
    afegir(73, [40.4182128,-3.7034436], "Madrid");
    afegir(74, [42.2279038,14.3925406], "Lanciano");
}

function sites() {
  addroutepoint([42.3028454, 2.1672063], [42.4001488, 2.1499704], ["Ribes de Freser", "Vall de Núria"]);
  addroutepoint([42.077648,2.5076062], [41.965918,2.7391713], ["Sant Feliu de Pallarols", "Bescanó"]);
}

function locations() {
  afegir_location([42.0573871,2.6750934], "Rocacorba");
  afegir_location([42.4001469,2.1324608], "Vall de Núria");
  afegir_location([42.0174817,2.6619542], "Sant Roc de la Barroca");
  afegir_location([41.8087851,2.3651661], "Matagalls");
  afegir_location([41.9958123,2.6936756], "Sant Grau");
  afegir_location([41.9578923,2.5244163], "Santuari de la Mare de Déu del Coll");
  afegir_location([42.1894411,1.720602], "Cap de la Gallina Pelada");
}



function afegir(i,p,n)
{
  punters[i] = L.marker(p).bindTooltip(n)
  .bindPopup('#')
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