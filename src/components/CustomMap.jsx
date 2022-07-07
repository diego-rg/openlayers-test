import React, { useEffect } from "react";

import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import Point from "ol/geom/Point";
import { Feature } from "ol";
import { Icon, Style } from "ol/style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import markerImg from "../static/img/map.svg";

//Marker
const marker = new Feature({
  geometry: new Point(fromLonLat([-9.09254535569367, 42.74839118573006])),
});

marker.setStyle(
  new Style({
    image: new Icon({
      color: "#BADA55",
      crossOrigin: "anonymous",
      imgSize: [40, 40],
      src: markerImg,
    }),
  })
);

const vectorSource = new VectorSource({
  features: [marker],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

//Map
const olMap = new Map({
  target: undefined,
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    vectorLayer,
  ],
  view: new View({
    center: fromLonLat([-9.09254535569367, 42.74839118573006]),
    zoom: 13,
  }),
});

const CustomMap = () => {
  useEffect(() => {
    olMap.setTarget("map");
    return () => olMap.setTarget(undefined);
  }, []);

  return <div id="map" className="w-full h-full"></div>;
};

export default CustomMap;
