import { useEffect } from "react";

// Smooth scroll for a page. The instance must be destroyed when the page
// unmounts, otherwise it keeps listening to the wheel on the next page and
// pulls the scroll back to the previous page's position.
const useLocomotiveScroll = () => {
  useEffect(() => {
    let locomotiveScroll;
    let isMounted = true;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (isMounted) locomotiveScroll = new LocomotiveScroll();
    })();

    return () => {
      isMounted = false;
      locomotiveScroll?.destroy();
    };
  }, []);
};

export default useLocomotiveScroll;
