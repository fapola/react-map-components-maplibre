import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import useMap from "../../hooks/useMap";

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

  return <></>;
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
