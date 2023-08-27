import React, { useState } from "react";
import { useTrail, animated as a } from "@react-spring/web";

const AnitmateData = ({ open = true, children }) => {
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2000, friction: 800 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      <a.div
        style={{
          transform: trail[0].x.interpolate((x) => `translate3d(0,${x}px,0)`),
        }}
      >
        {children}
      </a.div>
    </div>
  );
};

export default AnitmateData;
