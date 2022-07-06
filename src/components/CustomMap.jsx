import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";

new Map({
  layers: [new TileLayer({ source: new OSM() })],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
  target: "map",
});

const CustomMap = () => {
  return (
    <div>
      <div id="map" className="map"></div>
    </div>
  );
};

export default CustomMap;
