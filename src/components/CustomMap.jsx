import React, { useEffect } from "react";

import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";

const olMap = new Map({
  target: undefined,
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
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
