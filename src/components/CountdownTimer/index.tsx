import { useEffect, useRef, useState } from 'react';

import Numbers from './Numbers';
import styles from './styles.module.css';

interface ITimerProps {
  deadline: Date;
  onTimeUpdate?: (now: Date) => void;
}

const CountdownTimer = ({ deadline, onTimeUpdate }: ITimerProps) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const interval = useRef<ReturnType<typeof setInterval>>(null);

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
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  return (
    <div className={styles.countdown}>
      <Numbers value={days} words={['день', 'дня', 'дней']} />
      <p>:</p>
      <Numbers value={hours} words={['час', 'часа', 'часов']} />
      <p>:</p>
      <Numbers value={minutes} words={['минута', 'минуты', 'минут']} />
    </div>
  );
};

export default CountdownTimer;
