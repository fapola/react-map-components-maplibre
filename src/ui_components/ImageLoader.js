
import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';

import ErrorIcon from '@mui/icons-material/Error';
import { Box } from "@mui/system";
const ImageLoader = (props) => {
  const [state, setState] = useState("loading");

  useEffect(() => {
    if (!props.src) {
      setState("error");
      return;
    }
    fetch(props.src)
      .then(({ ok }) => {
        if (ok) {
          setState("ready");
        } else {
          setState("error");
        }
      })
      .catch((e) => {
        console.error(e);
        setState("error");
      });
  }, [props.src]);

  const boxStyle = {
    width: "100%",
    height: "100%",
    border: 2,
    borderRadius: "8px",
    textAlign: "center",
    display: "flex",
  };

  return <>
    {state === "ready" &&
      <img className={props.className}
        style={{ ...boxStyle, ...props.style }}
        src={props.src}
        alt={props.alt || ""}
      />
    }
    {state === "error" &&
      <Box className={props.className} sx={{ boxStyle, ...props.style }}>
        <ErrorIcon sx={{ display: "block", margin: "auto" }} />
      </Box>   
    }
    {state !== "ready" && state !== "error" &&
      <Box className={props.className} sx={{ ...boxStyle, ...props.style }}>
        <CircularProgress />
      </Box>
    }
  </>;
};

export default ImageLoader