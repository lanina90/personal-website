import {RefObject, useEffect, useRef, useState} from 'react';

function useIntersectionObserver(
  options: IntersectionObserverInit = {}
): [RefObject<HTMLDivElement>, boolean] {
  const [isIntersected, setIsIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersected(entry.isIntersecting);
      });
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isIntersected];
}

export default useIntersectionObserver;