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
  { name: 'San Luis Obispo', coords: [-120.6625, 35.2828], color: 'yellow' },
  { name: 'Santa Barbara', coords: [-119.6982, 34.4208], color: 'orange' },
  { name: 'San Diego', coords: [-117.1611, 32.7157], color: 'purple' },
  { name: 'Los Angeles', coords: [-118.2437, 34.0522], color: 'blue' },
  { name: 'Sacramento', coords: [-121.4944, 38.5816], color: 'green' },
  { name: 'Addis Ababa', coords: [38.7578, 9.0301], color: 'red' },
];


locations.forEach(location => {
  const iconStyle = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 10:
      fill: new ol.style.Fill({ color: location.color }),
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
