import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TodayUI from './today.presenter';

export default function TodayContainer() {
  const [isToday, setIsToday] = useState([]);
  const DATE = new Date().toISOString().slice(0, 10);
  const router = useRouter();

  useEffect(() => {
    const already = JSON.parse(sessionStorage.getItem(DATE) || '[]');
    setIsToday(already);
  }, []);

  const onClickNewProduct = () => {
    router.push('/usedmarket/new');
  };

  return <TodayUI isToday={isToday} onClickNewProduct={onClickNewProduct} />;
}
