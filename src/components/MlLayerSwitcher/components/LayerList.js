import React from "react";
import { css } from "@emotion/css";
import { Box } from "@mui/system";
import useMapState from "../../../hooks/useMapState";

/**
 * @component
 *
 */
const LayerList = (props) => {
  const { layers } = useMapState({
    mapId: props.mapId,
    watch: {
      viewport: false,
      layers: true,
      sources: false,
    },
    filter: {
      matchLayerIds: props.layerId,
    },
  });
  const width = "40px";

  const defaultClass = css`
    & img:hover {
    }
  `;

  return (
    <>
      <Box
        key={props.layerId}
        className={defaultClass}
        sx={{
          width,
          height: "53px",
          justifyContent: "center",
          py: 0.25,
          px: "1rem",
          cursor: "pointer",
        }}
        onClick={() => {
          props?.handleLayerBoxClick?.(props.layerId);
        }}
      >
        <div
          className="mllayerswitcher-layer-text"
          style={{
            textAlign: "center",
            color: "rgb(112, 117, 122)",
            fontFamily: "Roboto, Arial",
            width,
            fontSize: "0.60rem",
          }}
        >
          {props.label}
        </div>
      </Box>
    </>
  );
};

export default LayerList;
