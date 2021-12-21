import React, {useRef, useEffect, useContext, useState} from "react";
import PropTypes from "prop-types";

import {MapContext} from "@mapcomponents/react-core";
import {v4 as uuidv4} from "uuid";
import Button from "@mui/material/Button";
import RoomIcon from "@mui/icons-material/Room";
import {point, circle} from "@turf/turf"
import MlGeoJsonLayer from "../MlGeoJsonLayer/MlGeoJsonLayer";
import MlImageMarkerLayer from "../MlImageMarkerLayer/MlImageMarkerLayer";

import marker from "./assets/marker.png";

/**
 * Adds a button that makes the map follow the users GPS position using
 * navigator.geolocation.watchPosition if activated
 *
 * @param {object} props
 * @param {string} props.mapId Id of the target MapLibre instance in mapContext
 *
 * @component
 */
const MlFollowGps = (props) => {
  // Use a useRef hook to reference the layer object to be able to access it later inside useEffect hooks
  const mapContext = useContext(MapContext);
  const [isFollowed, setIsFollowed] = useState(false);
  const [geoJson, setGeoJson] = useState(undefined);
  const watchIdRef = useRef(undefined);
  const [locationAccessDenied, setLocationAccessDenied] = useState(false);

  const initializedRef = useRef(false);
  const mapRef = useRef(undefined);
  const componentId = useRef((props.idPrefix ? props.idPrefix : "MlFollowGps-") + uuidv4());
  const [accuracyGeoJson, setAccuracyGeoJson] = useState();

  useEffect(() => {
    let _componentId = componentId.current;

    return () => {
      // This is the cleanup function, it is called when this react component is removed from react-dom
      // try to remove anything this component has added to the MapLibre-gl instance
      // e.g.: remove the layer
      // mapContext.getMap(props.mapId).removeLayer(layerRef.current);
      // check for the existence of map.style before calling getLayer or getSource

      if (mapRef.current) {
        mapRef.current.cleanup(_componentId);
        mapRef.current = undefined;
      }
      if (watchIdRef.current) {
        initializedRef.current = false;
        navigator.geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapContext.mapExists(props.mapId) || initializedRef.current) return;
    // the MapLibre-gl instance (mapContext.getMap(props.mapId)) is accessible here
    // initialize the layer and add it to the MapLibre-gl instance or do something else with it
    initializedRef.current = true;
    mapRef.current = mapContext.getMap(props.mapId);
    mapRef.current.setCenter([7.132122000552613, 50.716405378037706]);
  }, [mapContext.mapIds, mapContext, props.mapId]);

  const getLocationSuccess = (pos) => {
    if (!mapRef.current) return;
    mapRef.current.setCenter([pos.coords.longitude, pos.coords.latitude]);
    const geoJsonPoint = point([pos.coords.longitude, pos.coords.latitude])
    setGeoJson(geoJsonPoint);
    setAccuracyGeoJson(circle(geoJsonPoint, pos.coords.accuracy/1000))
  };

  const getLocationError = (err) => {
    console.log("Access of user location denied");
    setLocationAccessDenied(true);
  };

  return (
    <>
      {isFollowed && geoJson && (
        <MlGeoJsonLayer
          geojson={accuracyGeoJson}
          type={"fill"}
          paint={{
            "fill-color": "#ee7700",
            "fill-opacity": 0.5,
          }}
          insertBeforeLayer={"MlFollowGpsMarker"}
        />
      )}

      {isFollowed && geoJson && (
        <MlImageMarkerLayer
          layerId={"MlFollowGpsMarker"}
          options={{
            type: "symbol",
            source: {
              type: "geojson",
              data: geoJson,
            },
            layout: {
              "icon-size": 0.1,
              "icon-offset": [0, -340],
            },
          }}
          imgSrc={marker}
        />
      )}

      <Button
        sx={{ zIndex: 1002, color: isFollowed ? props.onColor : props.offColor, ...props.style }}
        disabled={locationAccessDenied}
        onClick={() => {
          if (isFollowed) {
            navigator.geolocation.clearWatch(watchIdRef.current);
          } else {
            watchIdRef.current = navigator.geolocation.watchPosition(
              getLocationSuccess,
              getLocationError
            );
          }
          setIsFollowed(!isFollowed);
        }}
      >
        {" "}
        <RoomIcon sx={{ fontSize: props.style.fontSize }} />{" "}
      </Button>
    </>
  );
};

MlFollowGps.defaultProps = {
  mapId: undefined,
  style: {
    minWidth: "30px",
    minHeight: "30px",
    width: "30px",
    height: "30px",
    backgroundColor: "#414141",
    borderRadius: "23%",
    margin: 0.15,
    fontSize: "1.3em",
    ":hover": {
      backgroundColor: "#515151",
      color: "#ececec",
    },
  },
  onColor: "#ececec",
  offColor: "#666"
};

MlFollowGps.propTypes = {
  /**
   * Id of the target MapLibre instance in mapContext
   */
  mapId: PropTypes.string,
  /**
   * CSS style object that is applied to the button component
   */
  style: PropTypes.object,
  /**
   * Active button font color
   */
  onColor: PropTypes.string,
  /**
   * Inactive button font color
   */
  offColor: PropTypes.string,
};
export default MlFollowGps;
