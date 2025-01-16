const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-120.6625, 35.3050]), 
    zoom: 3,
  }),
});


const locations = [
  { name: 'San Luis Obispo', coords: [-120.6625, 35.2828], count: 2 },
  { name: 'Santa Barbara', coords: [-119.6982, 34.4208], count: 1 },
  { name: 'San Diego', coords: [-117.1611, 32.7157], count: 3 },
  { name: 'Los Angeles', coords: [-118.2437, 34.0522], count: 1 },
  { name: 'Sacramento', coords: [-121.4944, 38.5816], count: 1 },
  { name: 'Addis Ababa', coords: [38.7578, 9.0301], count: 1 },
];


locations.forEach(location => {
  let color;
  let radius;

  if (location.count === 1) {
    color = 'yellow';
    radius = 5; 
  } else if (location.count === 2) {
    color = 'orange';
    radius = 10; 
  } else if (location.count >= 3) {
    color = 'purple';
    radius = 15; 
  }

  const iconStyle = new ol.style.Style({
    image: new ol.style.Circle({
      radius: radius,
      fill: new ol.style.Fill({ color: color }),
      stroke: new ol.style.Stroke({ color: 'black', width: 1 }), 
    }),
  });

  const feature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat(location.coords)),
    name: location.name,
  });

  feature.setStyle(iconStyle);

  const vectorSource = new ol.source.Vector({
    features: [feature],
  });

  const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
  });

  map.addLayer(vectorLayer);
});
