import LayoutBanner from './banner';
import LayoutHeader from './header';
import LayoutNav from './nav';
import styled from '@emotion/styled';
import LayoutFooter from './footer';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

// 사이드바 일단 숨김
// const LayoutSidebar = styled.div`
//   width: 200px;
//   height: auto;
//   background-color: lightblue;
// `;

const WrapperLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const HIDDEN_BANNER = [
    '/boards/post/[postid]',
    '/boards/new',
    '/boards/post/[postid]/edit',
    '/artic',
    '/usedmarket',
    '/usedmarket/product/[id]',
  ];
  const isHiddenBanner = HIDDEN_BANNER.includes(router.pathname);

  const HIDDEN_NAV = ['/boards/new'];
  const isHiddenNav = HIDDEN_NAV.includes(router.pathname);

  return (
    <>
      <WrapperLayout>
        <LayoutHeader />
        {!isHiddenBanner && !isHiddenNav && <LayoutNav />}
        {!isHiddenBanner && <LayoutBanner />}
        <BodyWrapper>
          <Body>{props.children}</Body>
        </BodyWrapper>
        <LayoutFooter />
      </WrapperLayout>
    </>
  );
}
