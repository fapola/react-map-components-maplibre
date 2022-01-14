import React from "react";
import MlWmsLayer from "../MlWmsLayer/MlWmsLayer";
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
      <MlWmsLayer
        url={args.url}
        urlParameters={{ layers: args.layer }}
        sourceOptions={args.sourceOptions}
        layerId="historic"
        visible={args.layerVisible}
      />
      <MlWmsLayer
        url={args.url2}
        urlParameters={{ layers: args.layer2 }}
        sourceOptions={args.sourceOptions}
        layerId={args.layer2}
        visible={args.layer2Visible}
      />
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
        baseSourceConfig={{
          active: args.baseSourcesActive,
          layers: args.layers,
        }}
        detailLayerConfig={args.detailLayerConfig}
      />
      ;
    </>
  );
};

export const BackgroundSwitcher = Template.bind({});
BackgroundSwitcher.parameters = {};
BackgroundSwitcher.args = {
  url: "https://www.wms.nrw.de/geobasis/wms_nw_uraufnahme",
  layer: "nw_uraufnahme_rw",
  layerVisible: true,
  url2: "https://www.wms.nrw.de/geobasis/wms_nw_dop",
  layer2: "WMS_NW_DOP",
  layer2Visible: false,
  geojsonLayerVisible: true,
  geojson2LayerVisible: true,
  sourceOptions: {
    minzoom: 13,
    maxzoom: 20,
  },
  baseSourcesActive: true,
  layers: [
    {
      label: "Historic",
      layerId: "historic",
      src: "assets/historic.png",
    },
    {
      label: "Straßenkarte",
      layerId: "styleBase",
      src: "assets/osm.png",
    },
    {
      label: "DOP",
      layerId: "WMS_NW_DOP",
      src: "assets/dop.png",
    },
  ],
  detailLayerConfig: {
    layers: [
      {
        label: "GeoJson 1",
        layerId: "geojson1",
        src: "assets/historic.png",
        active: true,
      },
    ],
  },
};
