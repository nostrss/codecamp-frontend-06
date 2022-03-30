import LayoutBanner from './banner';
import LayoutHeader from './header';
import LayoutNav from './nav';
import styled from '@emotion/styled';
import LayoutFooter from './footer';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

const LayoutSidebar = styled.div`
  width: 200px;
  height: 500px;
  background-color: orange;
`;

const Body = styled.div`
  height: 500px;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ['/07-01-map-fruits'];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHidden = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {!isHidden && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNav />
      <BodyWrapper>
        <LayoutSidebar>여기는 사이드 바 입니다!!!</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
