import useMap from "../../../hooks/useMap";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material"
import { TreeItem } from '@mui/lab';


const LayerTree = (config) => {

  return (
    <>
      {config.treeLayersConfig.groups.map(group =>
        <>
          <TreeItem key={group.id} label={group.label} nodeId={group.id} >
            <Layers layers={group.layers} config={
              config
            } ></Layers>
          </TreeItem>
        </>
      )}
    </>
  )
}

const Layers = (layers, config) => {

  const mapHook = useMap({ mapId: config.mapId, waitForLayer: false });
  const handleLayerClick = (layer) => {

    if (!mapHook.map) {
      console.log("no map")
      return
    }

    const nextVisibleClickedLayer = mapHook?.map.getLayer(layer.id)?.getLayoutProperty("visibility") === "visible"
      ? "none"
      : "visible";

    mapHook.map?.setLayoutProperty(layer.id, "visibility", nextVisibleClickedLayer);
  }
  return (
    <>
      {layers.layers.map(layer =>
        <TreeItem key={layer.id} nodeId={layer.id} label={
          <FormGroup >
            <FormControlLabel control={<Checkbox defaultChecked={layer.active} onChange=
              {() => { handleLayerClick(layer) }} />} label={layer.label} />
          </FormGroup>
        } />
      )}
    </>
  )
}

export default LayerTree;