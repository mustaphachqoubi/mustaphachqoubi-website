import { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options) => {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    const refCurrent = ref.current;
    return () => {
      observer.unobserve(refCurrent);
    };
  }, [ref, options]);

  return intersecting;
};

export default useIntersectionObserver;
