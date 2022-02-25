import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import useMap from "../../hooks/useMap";
import { Card, CardContent, Typography, Checkbox, FormGroup, FormControlLabel } from "@mui/material"
import { TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

/**
 * Component providing a Layertree to aktivate/deactivate Layers of different Types
 *
 * @param {object} props
 * @param {string} props.mapId Id of the target MapLibre instance in mapContext
 *
 * @component
 */
const MlLayerTree = (props) => {
  const mapHook = useMap({ mapId: props.mapId, waitForLayer: props.insertBeforeLayer });
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!mapHook.mapIsReady || initializedRef.current) return;
    // the MapLibre-gl instance (mapHook.map) is accessible here
    // initialize the layer and add it to the MapLibre-gl instance or do something else with it
    initializedRef.current = true;
  }, [mapHook.map, mapHook.mapIsReady, props.mapId]);

  const handleLayerClick = (layerId) => {
    if (!mapHook.map) {
      return
    }
    const nextVisibleClickedLayer = mapHook?.map.getLayer(layerId)?.getLayoutProperty("visibility") === "visible"
      ? "none"
      : "visible";

    mapHook.map?.setLayoutProperty(layerId, "visibility", nextVisibleClickedLayer);
    console.log(layerId)
  }


  return (
    <>
      <Card sx={{ zIndex: 101, position: "absolute", minWidth: "200px" }}>
        <CardContent>
          <Typography>Layertree</Typography>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 340, flexGrow: 1, maxWidth: 500 }}
          >
            <TreeItem nodeId="1" label="Group1">
              <TreeItem nodeId="2" label={
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked onChange=
                    {() => { handleLayerClick("geojson1") }} />} label="River" />
                </FormGroup>
              } />
              <TreeItem nodeId="2" label={
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked onChange=
                    {() => { handleLayerClick("geojson2") }} />} label="Road" />
                </FormGroup>
              } />
            </TreeItem>
            <TreeItem nodeId="3" label="Group2">
              <TreeItem nodeId="4" label={
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked onChange=
                    {() => { handleLayerClick("geojson3") }} />} label="City Polygon" />
                </FormGroup>
              } />
            </TreeItem>
            <TreeItem nodeId="5" label="Group3">
              <TreeItem nodeId="6" label={
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked onChange=
                    {() => { handleLayerClick("vetorTile") }} />} label="Vector Landuse" />
                </FormGroup>
              } />
            </TreeItem>
          </TreeView>
        </CardContent>
      </Card>
    </>
  )
};

MlLayerTree.defaultProps = {
  mapId: undefined,
};

MlLayerTree.propTypes = {
  /**
   * Id of the target MapLibre instance in mapContext
   */
  mapId: PropTypes.string,
};
export default MlLayerTree;
