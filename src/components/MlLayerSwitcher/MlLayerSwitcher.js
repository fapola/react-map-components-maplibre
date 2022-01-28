//CSS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "./MlLayerSwitcher.css";
//External
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Card, CardContent, Typography, Box } from "@mui/material";
//Internal
import LayerList from "./components/LayerList";
import Divider from "@mui/material/Divider";
import useMap from "../../hooks/useMap";
/**
 * @component
 *
 *
 */
const MlLayerSwitcher = (props) => {
  const mapHook = useMap({ mapId: props.mapId, waitForLayer: false });
  const showDetailLayer = !!props.detailLayerConfig?.layers?.length;
  const [activeDetailLayers, setActiveDetailLayers] = useState([]);
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

      props.detailLayerConfig.layers.forEach((config, i) => disableAllButFirst(config, i));
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
      let newactiveDetailLayers = [];
      props.detailLayerConfig.layers.forEach(({ layerId }) => {
        const visibilty = mapHook.map?.getLayoutProperty(layerId, "visibility");
        if (newactiveDetailLayers.indexOf(layerId) === -1 && visibilty === "visible") {
          newactiveDetailLayers.push(layerId);
        }
      });
      setActiveDetailLayers(newactiveDetailLayers);
    }
  }, [mapHook.layers]);

  const getLayerListFromId = (id) => {
    return id === "styleBase" ? mapHook?.map.baseLayers : [id];
  };

  const handleDetailLayerBoxClick = (layerId) => {
    if (!mapHook.map) {
      return
    }

    const nextVisiblityClickedLayer =
      mapHook?.map.getLayer(layerId)?.getLayoutProperty("visibility") === "visible"
        ? "none"
        : "visible";
    changeLayerState(layerId, nextVisiblityClickedLayer);
  };

  const changeLayerState = (layer, visible = "none") => {
    mapHook.map?.setLayoutProperty(layer, "visibility", visible);
  };

  return (
    <>
      <Card sx={{ zIndex: 101, position: "absolute", minWidth: "200px" }}>
        <CardContent>
          {showDetailLayer && (
            <Box sx={{ minHeight: "150px" }}>
              <Typography variant="h6">{t("Layers")}</Typography>
              <Divider />
              <Box sx={{ display: "flex", paddingTop: "1rem" }}>
                {props.detailLayerConfig.layers.map(({ src, label, layerId }) => {
                  return (
                    <LayerList
                      mapId={props.mapId}
                      activeLayers={activeDetailLayers}
                      label={t(label)}
                      layerId={layerId}
                      key={layerId}
                      thumbnail={src}
                      handleLayerBoxClick={() => {
                        handleDetailLayerBoxClick(layerId);
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

MlLayerSwitcher.propTypes = {
  detailLayerConfig: PropTypes.shape({
    label: PropTypes.string,
    layers: PropTypes.arrayOf(
      PropTypes.shape({
        layerId: PropTypes.string.isRequired,
        src: PropTypes.string,
        label: PropTypes.string.isRequired,
        linkedTo: PropTypes.string,
      })
    ),
  }),
  mapId: PropTypes.string,
};

export default MlLayerSwitcher;
