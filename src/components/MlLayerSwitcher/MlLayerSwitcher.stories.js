import React from "react";
import MlLayerSwitcher from "./MlLayerSwitcher";
import MlGeoJsonLayer from "../MlGeoJsonLayer/MlGeoJsonLayer";
import mapContextDecorator from "../../decorators/MapContextDecorator";
import sample_geojson_1 from "./assets/sample_1.json";
import sample_geojson_2 from "./assets/sample_2.json";

const storyoptions = {
  title: "MapComponents/MlLayerSwitcher",
  component: MlLayerSwitcher,
  argTypes: {
    url: {},
    layer: {},
  },
  decorators: mapContextDecorator,
};
export default storyoptions;
const Template = (args) => {
  return (
    <>
      <MlGeoJsonLayer
        type="line"
        layout={{ visibility: args.geojsonLayerVisible ? "visible" : "none" }}
        geojson={sample_geojson_1}
        layerId="geojson1"
      />
      <MlGeoJsonLayer
        type="line"
        layout={{ visibility: args.geojson2LayerVisible ? "visible" : "none" }}
        geojson={sample_geojson_2}
        layerId="geojson2"
      />
      <MlLayerSwitcher
        detailLayerConfig={args.detailLayerConfig}
      />
      ;
    </>
  );
};

export const LayerSwitcher = Template.bind({});
LayerSwitcher.parameters = {};
LayerSwitcher.args = {
  geojsonLayerVisible: true,
  geojson2LayerVisible: true,
  sourceOptions: {
    minzoom: 13,
    maxzoom: 20,
  },
  detailLayerConfig: {
    layers: [
      {
        label: "GeoJson 1",
        layerId: "geojson1",
        src: "assets/marker.png",
        active: true,
      },
    ],
  },
};
