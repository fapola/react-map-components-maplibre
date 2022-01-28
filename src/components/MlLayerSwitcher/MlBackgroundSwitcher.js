//CSS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "./MlLayerSwitcher.css";
//External
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Todo: remove
import { useTranslation } from "react-i18next";
import { Card, CardContent, Typography, Box } from "@mui/material";
//Internal
import BackgroundBox from "./components/BackgroundBox";
import Divider from "@mui/material/Divider";
import useMap from "../../hooks/useMap";
/**
 * @component
 *
 *
 */
const MlBackgroundSwitcher = (props) => {
  const mapHook = useMap({ mapId: props.mapId, waitForLayer: props.waitForLayer });
  //TODO: rename Base to Background?
  const showBaseSources = !!props.baseSourceConfig?.layers?.length;
  const [activeLayers, setActiveLayers] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    //Set base state to activate only the first layer
    if (mapHook.map) {
      const disableAllButFirst = (config, i) => {
        const layers = getLayerListFromId(config.layerId);
        const visible = i === 0 ? "visible" : "none";

        layers.forEach((layer) => {
          if (layer) {
            changeLayerState(layer, visible);
          }
        });
      };

      props.baseSourceConfig.layers.forEach((config, i) => disableAllButFirst(config, i));
    }
    return () => {
      // This is the cleanup function, it is called when this react component is removed from react-dom
      // try to remove anything this component has added to the MapLibre-gl instance
      // e.g.: remove the layer
      // mapContext.getMap(props.mapId).removeLayer(layerRef.current);
      // check for the existence of map.style before calling getLayer or getSource
    };
  }, [mapHook.map]);

  // useEffect watching for layers changing
  useEffect(() => {
    if (mapHook.map?.style?._layers) {
      let newactiveLayers = [];
      props.baseSourceConfig.layers.forEach((layerConfig) => {
        const layers = getLayerListFromId(layerConfig.layerId);

        layers.forEach((layer) => {
          const visibilty = mapHook.map?.getLayoutProperty(layer, "visibility");
          if (mapHook.map.baseLayers.indexOf(layer) !== -1) {
            layer = "styleBase";
          }

          if (newactiveLayers.indexOf(layer) === -1 && visibilty === "visible") {
            newactiveLayers.push(layer);
          }
        });
      });
      setActiveLayers(newactiveLayers);
    }
  }, [mapHook.layers]);

  const getLayerListFromId = (id) => {
    return id === "styleBase" ? mapHook?.map.baseLayers : [id];
  };

  const handleLayerBoxClick = (id) => {
    let layers = getLayerListFromId(id);
    const nextVisiblityClickedLayer =
      mapHook?.map.getLayer(layers[0])?.getLayoutProperty("visibility") === "visible"
        ? "none"
        : "visible";

    props.baseSourceConfig.layers.forEach((config, i) => {
      let layers = getLayerListFromId(config.layerId);
      let visible = "none";
      if (config.layerId === id) {
        visible = nextVisiblityClickedLayer;
      }

      //To avoid disabling all base layers we activate the first one
      if (nextVisiblityClickedLayer === "none" && i === 0) {
        visible = "visible";
      }
      layers.forEach((layer) => {
        if (layer) {
          changeLayerState(layer, visible);
        }
      });
    });
  };

  const changeLayerState = (layer, visible = "none") => {
    mapHook.map?.setLayoutProperty(layer, "visibility", visible);
  };

  return (
    <>
      <Card sx={{ zIndex: 101, position: "absolute", minWidth: "200px" }}>
        <CardContent>
          {showBaseSources && (
            <Box sx={{ minHeight: "150px" }}>
              <Typography variant="h6">
                {t(props.baseSourceConfig.label || "Background Data")}
              </Typography>
              <Divider />
              <Box sx={{ display: "flex", paddingTop: "1rem" }}>
                {props.baseSourceConfig.layers.map(({ src, label, layerId }) => {
                  return (
                    <BackgroundBox
                      mapId={props.mapId}
                      key={layerId}
                      activeLayers={activeLayers}
                      label={t(label)}
                      layerId={layerId}
                      thumbnail={src}
                      handleLayerBoxClick={() => {
                        handleLayerBoxClick(layerId);
                      }}
                    />
                  );
                })}
              </Box>
            </Box>
          )}
        </CardContent>{" "}
      </Card>
    </>
  );
};

MlBackgroundSwitcher.propTypes = {
  baseSourceConfig: PropTypes.shape({
    label: PropTypes.string,
    layers: PropTypes.arrayOf(
      PropTypes.shape({
        layerId: PropTypes.string.isRequired,
        src: PropTypes.string,
        label: PropTypes.string.isRequired,
      })
    ),
  }),
  mapId: PropTypes.string,
};

export default MlBackgroundSwitcher;
