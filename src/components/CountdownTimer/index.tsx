import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import Numbers from './Numbers';

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;

  & > p {
    font-size: 6rem;
    font-weight: bold;
    line-height: 1;
  }

  ${({ theme }) => theme.media.mobile} {
    & > p {
      font-size: 3rem;
    }
  }
`;

interface ITimerProps {
  deadline: Date;
  onTimeUpdate?: (now: Date) => void;
}

const CountdownTimer = ({ deadline, onTimeUpdate }: ITimerProps) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (interval.current) clearInterval(interval.current);

    const updateTime = () => {
      const now = new Date().getTime();
      const secondsLeft = Math.round((deadline.getTime() - now) / 1000);

      const minutesLeft = Math.floor(secondsLeft / 60);
      const hoursLeft = Math.floor(minutesLeft / 60);
      setDays(Math.floor(hoursLeft / 24));
      setHours(hoursLeft % 24);
      setMinutes(minutesLeft % 60);
      onTimeUpdate?.(new Date(now));
    };

    updateTime();
    interval.current = setInterval(updateTime, 1000);
    return () => interval.current && clearInterval(interval.current);
  }, []);

  return (
    <Container>
      <Numbers value={days} words={['день', 'дня', 'дней']} />
      <p>:</p>
      <Numbers value={hours} words={['час', 'часа', 'часов']} />
      <p>:</p>
      <Numbers value={minutes} words={['минута', 'минуты', 'минут']} />
    </Container>
  );
};

export default CountdownTimer;
