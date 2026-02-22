import { useEffect, useRef, useState } from "react";

type InViewOptions = IntersectionObserverInit & {
  once?: boolean;
};

const useInView = <T extends HTMLElement>(options: InViewOptions = {}) => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);
  const { root = null, rootMargin = "0px", threshold = 0.15, once = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once]);

  return { ref, isInView };
};

export default useInView;
