import React, { useContext, useRef, useEffect } from "react";
import { MapContext } from "@mapcomponents/react-core";
import PropTypes from "prop-types";

/**
 * Adds a vector-tile source and 0...n vector-tile-layers to the MapLibre instance referenced by
 * props.mapId
 *
 * @component
 */
const MlVectorTileLayer = (props) => {
  const mapContext = useContext(MapContext);

  const layerName = "vector-tile-layer-";
  const sourceName = "vector-tile-source-";
  const idSuffixRef = useRef(new Date().getTime());
  const layerIdsRef = useRef({});
  const layerPaintConfsRef = useRef({});
  const layerLayoutConfsRef = useRef({});
  const initializedRef = useRef(false);
  const mapRef = useRef(null);

  const cleanup = () => {
    if (mapRef.current && mapRef.current.style) {
      for (let key in layerIdsRef.current) {
        if (mapRef.current.getLayer(layerIdsRef.current[key])) {
          mapRef.current.removeLayer(layerIdsRef.current[key]);
        }
      }
      if (mapRef.current.getSource(sourceName + idSuffixRef.current)) {
        mapRef.current.removeSource(sourceName + idSuffixRef.current);
      }
    }
  };

  useEffect(() => {
    return cleanup;
  }, []);

  useEffect(() => {
    if (!mapContext.mapExists(props.mapId) || initializedRef.current) return;

    initializedRef.current = true;
    mapRef.current = mapContext.getMap(props.mapId);

    // Add the new layer to the openlayers instance once it is available
    mapRef.current.addSource(sourceName + idSuffixRef.current, {
      type: "vector",
      tiles: [props.url],
      tileSize: 512,
      attribution: "",
      ...props.sourceOptions,
    });

    for (let key in props.layers) {
      let layerId = layerName + "_" + key + "_" + idSuffixRef.current;
      layerIdsRef.current[key] = layerId;

      mapRef.current.addLayer({
        id: layerId,
        source: sourceName + idSuffixRef.current,
        type: "line",
        minzoom: 0,
        maxzoom: 22,
        layout: {},
        paint: {
          "line-opacity": 0.5,
          "line-color": "rgb(80, 80, 80)",
          "line-width": 2,
        },
        ...props.layers[key],
      });
      layerPaintConfsRef.current[key] = JSON.stringify(props.layers[key].paint);
      layerLayoutConfsRef.current[key] = JSON.stringify(props.layers[key].layout);
    }
  }, [mapContext.mapIds, props, mapContext]);

  useEffect(() => {
    if (!mapRef.current) return;
    // the MapLibre-gl instance (mapContext.map) is accessible here
    // initialize the layer and add it to the MapLibre-gl instance or do something else with it
    for (var key in props.layers) {
      if (mapRef.current.getLayer(layerIdsRef.current[key])) {
        // update changed paint property
        let layerPaintConfString = JSON.stringify(props.layers[key].paint);

        if (layerPaintConfString !== layerPaintConfsRef.current[key]) {
          for (let paintKey in props.layers[key].paint) {
            mapContext
              .getMap(props.mapId)
              .setPaintProperty(
                layerIdsRef.current[key],
                paintKey,
                props.layers[key].paint[paintKey]
              );
          }
        }
        layerPaintConfsRef.current[key] = layerPaintConfString;

        // update changed layout property
        let layerLayoutConfString = JSON.stringify(props.layers[key].layout);

        if (layerLayoutConfString !== layerLayoutConfsRef.current[key]) {
          for (let layoutKey in props.layers[key].layout) {
            mapContext
              .getMap(props.mapId)
              .setLayoutProperty(
                layerIdsRef.current[key],
                layoutKey,
                props.layers[key].layout[layoutKey]
              );
          }
        }
        layerLayoutConfsRef.current[key] = layerLayoutConfString;
      }
    }
  }, [props.layers, props, mapContext]);

  useEffect(() => {
    if (!mapRef.current) return;

    for (var key in props.layers) {
      if (mapRef.current.getLayer(layerIdsRef.current[key])) {
        // toggle layer visibility by changing the layout object's visibility property
        if (props.visible) {
          mapContext
            .getMap(props.mapId)
            .setLayoutProperty(layerIdsRef.current[key], "visibility", "visible");
        } else {
          mapContext
            .getMap(props.mapId)
            .setLayoutProperty(layerIdsRef.current[key], "visibility", "none");
        }
      }
    }
  }, [props.visible]);

  return <></>;
};

MlVectorTileLayer.propTypes = {
  /**
   * Id of the target MapLibre instance in mapContext
   */
  mapId: PropTypes.string,
  /**
   * Options object that will be used as first parameter on the MapLibreGl.addSource call see MapLibre source options documentation.
   */
  sourceOptions: PropTypes.object,
  /**
   * Object that hold layers
   */
  layers: PropTypes.object,
  /**
   * Boolean value to control the visibility of this layer
   */
  visible: PropTypes.bool,
  /**
   * String of the URL of a wms layer
   */
  url: PropTypes.string,
};

export default MlVectorTileLayer;
