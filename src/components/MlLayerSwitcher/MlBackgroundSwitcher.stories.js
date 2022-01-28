import React from "react";
import MlWmsLayer from "../MlWmsLayer/MlWmsLayer";
import MlBackgroundSwitcher from "./MlBackgroundSwitcher";
import mapContextDecorator from "../../decorators/MapContextDecorator";

const storyoptions = {
  title: "MapComponents/MlBackgroundSwitcher",
  component: MlBackgroundSwitcher,
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
      <MlBackgroundSwitcher
        baseSourceConfig={{
          active: args.baseSourcesActive,
          layers: args.layers,
        }}
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
};
