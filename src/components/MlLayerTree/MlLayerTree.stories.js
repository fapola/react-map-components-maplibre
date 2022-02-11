import MlLayerTree from "./MlLayerTree";
import mapContextDecorator from "../../decorators/MapContextDecorator";
import MlGeoJsonLayer from "../MlGeoJsonLayer/MlGeoJsonLayer";
import line_sample from "./assets/line_sample.json"
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
      <MlGeoJsonLayer
        type="line"
        layout={{ visibility: args.geojsonLayerVisible ? "visible" : "none" }}
        geojson={line_sample}
        layerId="geojson1"
      />
      <MlGeoJsonLayer
        type="fill"
        layout={{ visibility: args.geojsonLayerVisible ? "visible" : "none" }}
        geojson={polygon_sample}
        layerId="geojson2"
      />
      <MlLayerTree
        layers={args.layer}
      />
    </>
  )
}


export const LayerTree = Template.bind({});
LayerTree.parameters = {};
LayerTree.args = {
  geojsonLayerVisible: true,
  layers: [
    {
      layerId: "geojson1",
      label: "Line Sample",
      active: true,
      type: "line"
    },
    {
      layerId: "geojson2",
      label: "Polygon Sample",
      active: true,
      type: "fill"
    }
  ]

};
