import MlLayerTree from "./MlLayerTree";
import mapContextDecorator from "../../decorators/MapContextDecorator";
import MlGeoJsonLayer from "../MlGeoJsonLayer/MlGeoJsonLayer";
import MlVectorTileLayer from "../MlVectorTileLayer/MlVectorTileLayer";
import MlNavigationTools from "../MlNavigationTools/MlNavigationTools"
import line_sample from "./assets/line_sample.json"
import line_sample2 from "./assets/line_sample2.json"
import polygon_sample from "./assets/polygon_sample.json"

const storyoptions = {
  title: "MapComponents/MlLayerTree",
  component: MlLayerTree,
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
      <MlNavigationTools />
      <MlGeoJsonLayer
        type="line"
        layout={{ visibility: args.geojsonLayerOneVisible ? "visible" : "none" }}
        geojson={line_sample}
        layerId="geojson1"
      />
      <MlGeoJsonLayer
        type="line"
        layout={{ visibility: args.geojsonLayerTwoVisible ? "visible" : "none" }}
        geojson={line_sample2}
        layerId="geojson2"
      />
      <MlGeoJsonLayer
        type="fill"
        layout={{ visibility: args.geojsonLayerTwoVisible ? "visible" : "none" }}
        geojson={polygon_sample}
        layerId="geojson3"
      />

      <MlVectorTileLayer {...{
        url: args.vectorUrl,
        mapId: args.mapId,
        layers: args.vectorLayers,
      }} />

      <MlLayerTree
        layers={args.treeLayers}
      />
    </>
  )
}


export const LayerTree = Template.bind({});
LayerTree.parameters = {};
LayerTree.args = {
  geojsonLayerOneVisible: true,
  geojsonLayerTwoVisible: true,
  treeLayersConfig: [
    {
      layerId: "geojson1",
      group: "Group1",
      label: "River",
      active: true,
    },
    {
      layerId: "geojson2",
      group: "Group1",
      label: "Road",
      active: true,
    },
    {
      layerId: "geojson3",
      group: "Group2",
      label: "City Polygon",
      active: true,
    },
    {
      layerId: "vectorLayer1",
      group: "Group3",
      label: "Vector Landuse",
      active: true,
    }
  ],
  vectorUrl:
    "https://wms.wheregroup.com/tileserver/tile/tileserver.php?/europe-0-14/index.json?/europe-0-14/{z}/{x}/{y}.pbf",
  vectorLayers: {
    landuseLine: {
      "source-layer": "landuse",
      layout: {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      paint: { "line-width": 2, "line-color": "#ff0000" },
    },
  },
};
