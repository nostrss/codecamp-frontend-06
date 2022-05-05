import { useEffect, useState } from 'react';
import TodayUI from './today.presenter';

export default function TodayContainer() {
  const [isToday, setIsToday] = useState([]);
  const DATE = new Date().toISOString().slice(0, 10);
  useEffect(() => {
    const already = JSON.parse(sessionStorage.getItem(DATE) || '[]');
    setIsToday(already);
  }, []);

  return <TodayUI isToday={isToday} />;
}
