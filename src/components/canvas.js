import React from "react";
import { useOnDraw } from "./Hooks";

const Canvas = ({ height, width }) => {
  const setRef = useOnDraw(); // useOnDraw funtion returns a function which set ref 
  return <canvas 
    height={height}
    width={width} 
    style={canvasStyle}
    ref={setRef}
    ></canvas>;
};

const canvasStyle = {
  border: "1px solid black",
  backgroundColor: "white",
};

export default Canvas;
