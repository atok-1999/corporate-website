import styled from 'styled-components';
import Head from 'next/head';
import { Anchor } from '../components/Header';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import useMedia from 'use-media';

export default function Home() {
  const isWide = useMedia({ minWidth: '521px' });

  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 150,
          minWidth: 150,
          scale: 1.0,
          scaleMobile: 1.0,
          color2: 0x8ebaed,
          backgroundColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) setVantaEffect(0);
    };
  }, [vantaEffect]);

  return (
    <div style={{ width: '100%' }}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main ref={vantaRef}>
        <Mission isWide={isWide}>
          <h1 style={{ fontSize: isWide ? '3.5rem' : '2.5rem' }}>
            Connecting people with our products
          </h1>

          <p>人と人をモノで繋ぐをミッションに私たちは活動しています。</p>
        </Mission>
      </Main>

      <AboutSection isWide={isWide}>
        <div style={{ width: '90%', margin: '0 auto' }}>
          <div style={{ marginLeft: isWide ? 24 : 0 }}>
            <Fade top>
              <SectionTitle>About us</SectionTitle>
            </Fade>
          </div>
          <About isWide={isWide}>
            <Fade top>
              <Image src='/images/hand-shake.png' width={200} height={200} />
            </Fade>
            <p>
              良いモノだけど、知られていないものがある。
              良いモノだけど、伝わりにくいものがある。
              良いモノだけど、隠れてしまっているものがある。 私たちは、
              そんな可能性を秘めた原石を みつけ、みがき、ひろげ、
              人(生産者)と人(消費者)をモノでつなぐ、Company Nameです。
            </p>
            <div style={{ marginTop: 35 }}>
              <Link href={'about/'}>
                <Anchor>READ MORE</Anchor>
              </Link>
            </div>
          </About>
        </div>
      </AboutSection>

      <ServiceSection isWide={isWide}>
        <div style={{ width: '90%', margin: '0 auto' }}>
          <div style={{ marginLeft: isWide ? 24 : 0 }}>
            <Fade top>
              <SectionTitle>What we do</SectionTitle>
            </Fade>
          </div>
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
      </ServiceSection>

      <ContactSection isWide={isWide}>
        <Fade top>
          <SectionTitle>Contact</SectionTitle>
          <Link href='/contact'>
            <ContactButton>
              <span>お問い合わせ・ご相談はこちらから</span>
            </ContactButton>
          </Link>
        </Fade>
      </ContactSection>
    </div>
  );
}

const Main = styled.div`
  position: relative;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  position: relative;
  text-align: 'center';
`;

const Mission = styled.div<{ isWide: boolean }>`
  margin-left: ${(props) => (props.isWide ? '36px' : '24px')};
  position: absolute;
  top: ${(props) => (props.isWide ? '40%' : '30%')};
  line-height: 1.3;
`;

const AboutSection = styled.div<{ isWide: boolean }>`
  width: 100%;
  min-height: ${(props) => (props.isWide ? '95vh' : '80vh')};
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${(props) => (props.isWide ? '5%' : '20%')};
  padding-bottom: ${(props) => (props.isWide ? '5%' : '20%')};
`;

const About = styled.div<{ isWide: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: ${(props) => (props.isWide ? '80%' : '90%')};
  margin: 0 auto;
  margin-top: 15%;
`;

const ServiceSection = styled.div<{ isWide: boolean }>`
  padding-top: ${(props) => (props.isWide ? '5%' : '20%')};
  width: 100%;
  min-height: ${(props) => (props.isWide ? '95vh' : '90vh')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${(props) => (props.isWide ? '5%' : '30%')};
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

const ContactSection = styled.div<{ isWide: boolean }>`
  position: relative;
  min-height: ${(props) => (props.isWide ? '75vh' : '50vh')};
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactButton = styled.a`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.1;
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #000;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1.5rem 4rem;
  border-radius: 0;
  background: #fff;
  margin-top: 1.5rem;
  margin-right: 10%;
  margin-left: 10%;

  span {
    position: relative;
  }

  :before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-96%);
    transform: translateX(-96%);
    background: #ff5353;
  }

  :hover:before {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }

  :hover span {
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;
