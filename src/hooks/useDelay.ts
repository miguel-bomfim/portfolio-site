import { useState, useEffect } from "react";

const useDelay = (pageType: string) => {
  const [delayToRender, setDelayToRender] = useState(true);

  const setDelay = () => {
    if (pageType === "porfolioPage") {
      return 1500;
    }
    return 500;
  };

  const delay = setDelay();

  useEffect(() => {
    setTimeout(() => {
      setDelayToRender(false);
    }, delay);
  }, [delay]);

  return delayToRender;
};

export default useDelay;
