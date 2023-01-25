import { useEffect, useState } from "react";

const workingWidth = 1920;

const useActualWidht = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowWidth]);

  return windowWidth;
};

export const useCalculateWidth = (initialWidth) => {
  return (initialWidth * useActualWidht()) / workingWidth;
};

export const useCalculateSticky = (initialSticky) => {
  const stickyValuePX = 137; //number of pixels that represent 1% in sticky

  return (workingWidth - useActualWidht()) / stickyValuePX + initialSticky;
};
