import { useCallback, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

const Looper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const InnerList = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  height: max-content;
`;

const ListInstance = styled.div<{ shouldAnimate: boolean }>`
  @keyframes slide-anim {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(-100%);
    }
  }

  display: flex;
  width: max-content;
  animation: slide-anim linear infinite;

  ${({ shouldAnimate }) => !shouldAnimate && 'animation: none;'}
`;

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
    <Looper ref={outerRef}>
      <InnerList ref={innerRef}>
        {[...Array(looperInstances)].map((_, ind) => (
          <ListInstance
            // eslint-disable-next-line react/no-array-index-key
            key={ind}
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal',
            }}
            shouldAnimate={shouldAnimate}
          >
            {children}
          </ListInstance>
        ))}
      </InnerList>
    </Looper>
  );
};

export default InfiniteLooper;
