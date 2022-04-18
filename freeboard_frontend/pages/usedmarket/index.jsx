import { useAuth } from '../../src/components/commons/hooks/useAuth';

export default function UsedMarket() {
  useAuth();
  return <div> 중고 마켓 메인 페이지 입니다</div>;
}
