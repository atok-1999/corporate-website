import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import useMedia from 'use-media';

const Service = () => {
  const isWide = useMedia({ minWidth: '521px' });

  return (
    <PageContainer>
      <Fade top>
        <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>Service</h1>
      </Fade>
      <div style={{ display: 'flex' }}>
        <ServiceItemContainer isWide={isWide}>
          <ServiceItem isWide={isWide}>
            <Fade top>
              <Image src='/images/box.png' width={200} height={200} />
            </Fade>
            <h3>輸入販売事業</h3>
            <p>
              国内にまだ入っていきていない、人々の暮らしをより豊かにする最先端の製品を独自のルートで輸入し、適正な価格で販売しております。
            </p>
          </ServiceItem>

          <ServiceItem isWide={isWide}>
            <Fade top>
              <Image src='/images/dig.png' width={200} height={200} />
            </Fade>
            <h3>モノプロダクション事業</h3>
            <p>
              世の中の消費者がまだ気づいていない潜在的な悩みを探し出し、それを解決出来るような商品を開発し、オリジナルブランドとして販売しております。
            </p>
          </ServiceItem>
        </ServiceItemContainer>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 100px;
`;

const ServiceItemContainer = styled.div<{ isWide: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isWide ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`;

const ServiceItem = styled.div<{ isWide: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.isWide ? '75%' : '90%')};
  padding-right: 5%;
  padding-left: 5%;
`;

export default Service;
