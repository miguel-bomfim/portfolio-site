import React from "react";
import useMousePosition from "../../hooks/useMousePosition";

const InteractiveCursor = () => {
  const { clientX, clientY } = useMousePosition();

  return (
    <div className="interactiveDiv">
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};

export default InteractiveCursor;
