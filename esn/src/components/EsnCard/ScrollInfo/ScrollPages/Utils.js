import { useEffect, useState } from "react";

const workingWidth = 1920;
const workingHeight = 937;

const useActualSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowSize]);

  return windowSize;
};

export const useCalculateWidth = (initialWidth) => {
  return (initialWidth * useActualSize().width) / workingWidth;
};

export const useCalculateSticky = (initialSticky) => {
  const stickyValuePX = { left: 137, top: 67 }; //number of pixels that represent 1% in sticky
  const actualSize = useActualSize();

  const stickyLeft =
    (workingWidth - actualSize.width) / stickyValuePX.left + initialSticky.left;
  const stickyTop =
    (workingHeight - actualSize.height) / stickyValuePX.top + initialSticky.top;

  return { left: stickyLeft, top: stickyTop };
};
