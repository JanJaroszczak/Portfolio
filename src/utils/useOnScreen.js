import { useState, useEffect } from 'react';

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setIntersecting(entry.isIntersecting);
      observer.unobserve(ref.current);
    }
  });

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};

export default useOnScreen;
