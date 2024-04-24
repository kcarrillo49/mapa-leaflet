var mapa = L.map("mapaid").setView([9.5, -84], 8.5);


//opciones máximas y mínimas de zoom
//mapa.setMinZoom(5);
//mapa.setMaxZoom(10);

//capa base osm
var osm= L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mapa);

var marker = L.marker([9.8, -84]).addTo(mapa);

// Otra capa base
var esri = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
).addTo(mapa);

//otra capa base

var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(mapa);


// Marcadores
liberia = L.marker([10.633333, -85.433333]);
liberia.bindTooltip("Liberia").openTooltip();
liberia.addTo(mapa);

limon = L.marker([10.002216, -83.084037]);
limon.bindTooltip("Limón").openTooltip();
limon.addTo(mapa);

puntarenas = L.marker([9.966667, -84.833333]);
puntarenas.bindTooltip("Puntarenas").openTooltip();
puntarenas.addTo(mapa);

San_Jose = L.marker([9.93333, -84.08333]);
San_Jose.bindTooltip("San José").openTooltip();
San_Jose.addTo(mapa);

// Marcador para la Catedral Metropolitana de San José
var catedralSJMarker = L.marker([9.9326673, -84.0787633])

catedralSJMarker.bindPopup('<a href="https://es.wikipedia.org/wiki/Catedral_metropolitana_de_San_Jos%C3%A9">Catedral Metropolitana de San José</a>.<br>Catedral de estilo clásico y barroco. Templo principal de la arquidiócesis católica de San José.<br>Construída entre 1825 y 1827 y reconstruída en 1878. <br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Metropolitan_Cathedral_in_San_Jose%2C_Costa_Rica.jpg/256px-Metropolitan_Cathedral_in_San_Jose%2C_Costa_Rica.jpg">').openPopup();
catedralSJMarker.bindTooltip("Catedral Metropolitana de San José").openTooltip();
catedralSJMarker.addTo(mapa);


// Conjunto de capas base
var mapasBase = {
  "ESRI World Imagery": esri,
  OpenStreetMap: osm,
  capaoscura: Stadia_AlidadeSmoothDark 
};

// Control de capas
L.control.layers(mapasBase).addTo(mapa);

//control de escala
L.control.scale({maxWidth:100, imperial:false, position:"topright"}).addTo(mapa)