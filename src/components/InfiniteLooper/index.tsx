import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './styles.module.css';

const InfiniteLooper = ({
  speed,
  direction,
  children,
}: {
  speed: number;
  direction: 'right' | 'left';
  children: React.ReactNode;
}) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function resetAnimation() {
    setShouldAnimate(false);

    setTimeout(() => {
      setShouldAnimate(true);
    }, 50);
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const instanceWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setupInstances);

    return () => {
      window.removeEventListener('resize', setupInstances);
    };
  }, []);

  return (
    <div className={styles.looper} ref={outerRef}>
      <div className={styles.list} ref={innerRef}>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className={
              styles['list-element'] + (shouldAnimate ? styles.animated : '')
            }
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal',
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLooper;
