import styled from 'styled-components';
import Head from 'next/head';
import { Anchor } from '../components/Header';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';
import Fade from 'react-reveal/Fade';
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
          <h1
            style={{
              fontSize: isWide ? '3.5rem' : '3rem',
              fontFamily: 'Roboto',
            }}
          >
            Connecting people with our products
          </h1>

          <p style={{ fontWeight: 'bold', color: 'grey' }}>
            人と人をモノで繋ぐをミッションに私たちは活動しています。
          </p>
        </Mission>
      </Main>

      <AboutSection isWide={isWide}>
        <div style={{ width: '90%', margin: '0 auto' }}>
          <div style={{ marginLeft: isWide ? 24 : 0 }}>
            <Fade left>
              <SectionTitle isWide={isWide}>01. About us</SectionTitle>
              <div style={{ fontWeight: 600 }}>私たちについて.</div>
            </Fade>
          </div>
          <About isWide={isWide}>
            <Fade left>
              <ImageContainer
                customSize={'100%'}
                isWide={isWide}
                customMaxSize={'700px'}
              >
                <img
                  src='/images/city-view-whole1.png'
                  width={'100%'}
                  height={'100%'}
                  style={{ display: 'block' }}
                />
              </ImageContainer>
            </Fade>
            <p style={{ marginTop: '2rem' }}>
              良いモノだけど、知られていないものがある。
              良いモノだけど、伝わりにくいものがある。
              良いモノだけど、隠れてしまっているものがある。 私たちは、
              そんな可能性を秘めた原石を みつけ、みがき、ひろげ、
              人(生産者)と人(消費者)をモノでつなぐ、Company Nameです。
            </p>
            <div style={{ marginTop: 35 }}>
              <Link href={'/about'}>
                <Anchor>READ MORE</Anchor>
              </Link>
            </div>
          </About>
        </div>
      </AboutSection>

      <ServiceSection isWide={isWide}>
        <div style={{ width: '90%', margin: '0 auto' }}>
          <div style={{ marginLeft: isWide ? 24 : 0 }}>
            <Fade left>
              <SectionTitle isWide={isWide}>02. What we do</SectionTitle>
              <div style={{ fontWeight: 600 }}>事業内容.</div>
            </Fade>
          </div>
          <ServiceItemContainer isWide={isWide}>
            <ServiceItem isWide={isWide}>
              <Fade left>
                <ImageContainer isWide={isWide}>
                  <img
                    src='/images/delivery-package2.webp'
                    width={'100%'}
                    height={'100%'}
                    style={{ display: 'block' }}
                  />
                </ImageContainer>
              </Fade>
              <h3>輸入販売事業</h3>
              <p style={{ textAlign: 'center' }}>
                国内にまだ入っていきていない、人々の暮らしをより豊かにする最先端の製品を独自のルートで輸入し、適正な価格で販売しております。
              </p>
            </ServiceItem>

            <ServiceItem isWide={isWide}>
              <Fade left>
                <ImageContainer isWide={isWide}>
                  <img
                    src='/images/discussing-idea2.webp'
                    width={'100%'}
                    height={'100%'}
                    style={{ display: 'block' }}
                  />
                </ImageContainer>
              </Fade>
              <h3>モノプロダクション事業</h3>
              <p style={{ textAlign: 'center' }}>
                世の中の消費者がまだ気づいていない潜在的な悩みを探し出し、それを解決出来るような商品を開発し、オリジナルブランドとして販売しております。
              </p>
            </ServiceItem>
          </ServiceItemContainer>
          <div style={{ marginTop: isWide ? 100 : 60, textAlign: 'center' }}>
            <Link href={'/service'}>
              <Anchor>READ MORE</Anchor>
            </Link>
          </div>
        </div>
      </ServiceSection>

      <ContactSection isWide={isWide}>
        <SectionTitle isWide={isWide}>03. Contact</SectionTitle>

        <Link href='/contact'>
          <ContactButton isWide={isWide}>
            <span>お問い合わせ・ご相談はこちらから</span>
          </ContactButton>
        </Link>
      </ContactSection>
    </div>
  );
}

export const ImageContainer = styled.div<{
  isWide: boolean;
  customSize?: string;
  customMaxSize?: string;
}>`
  box-shadow: 0px 8px 16px -2px rgba(10, 10, 10, 0.1),
    16px 13px 0px 1px rgba(0, 0, 0, 0.2);
  height: ${(props) =>
    props.customSize ? props.customSize : props.isWide ? '100%' : '70%'};
  width: ${(props) =>
    props.customSize ? props.customSize : props.isWide ? '100%' : '70%'};
  max-width: ${(props) =>
    props.customMaxSize ? props.customMaxSize : '350px'};
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Main = styled.div`
  position: relative;
  min-height: 100vh;
`;

const SectionTitle = styled.h2<{ isWide: boolean }>`
  font-size: ${(props) => (props.isWide ? '2.75rem' : '2.3rem')};
  position: relative;
  text-align: 'center';
  font-family: 'Oswald';
  text-transform: uppercase;
  margin-bottom: 0;
`;

const Mission = styled.div<{ isWide: boolean }>`
  margin-left: ${(props) => (props.isWide ? '36px' : '24px')};
  margin-right: ${(props) => (props.isWide ? '24px' : '16px')};
  position: absolute;
  top: ${(props) => (props.isWide ? '40%' : '25%')};
  line-height: 1.3;
`;

const AboutSection = styled.div<{ isWide: boolean }>`
  width: 100%;
  min-height: ${(props) => (props.isWide ? '95vh' : '80vh')};
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${(props) => (props.isWide ? '5%' : '0%')};
  padding-bottom: ${(props) => (props.isWide ? '5%' : '10%')};
`;

const About = styled.div<{ isWide: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: ${(props) => (props.isWide ? '80%' : '90%')};
  margin: 0 auto;
  margin-top: ${(props) => (props.isWide ? '5%' : '15%')};
`;

const ServiceSection = styled.div<{ isWide: boolean }>`
  padding-top: ${(props) => (props.isWide ? '5%' : '10%')};
  width: 100%;
  min-height: ${(props) => (props.isWide ? '95vh' : '90vh')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${(props) => (props.isWide ? '5%' : '10%')};
`;

const ServiceItemContainer = styled.div<{ isWide: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isWide ? 'row' : 'column')};
  justify-content: center;
  align-items: flex-start;
  margin-top: ${(props) => (props.isWide ? '10%' : '0%')};
`;

const ServiceItem = styled.div<{ isWide: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.isWide ? '75%' : '90%')};
  padding-right: 5%;
  padding-left: 5%;
  margin-top: ${(props) => (props.isWide ? '0%' : '20%')};

  > p {
    margin: 0;
  }
`;

const ContactSection = styled.div<{ isWide: boolean }>`
  position: relative;
  min-height: ${(props) => (props.isWide ? '75vh' : '50vh')};
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10%;
`;

const ContactButton = styled.a<{ isWide: boolean }>`
  font-size: ${(props) => (props.isWide ? '1.4rem' : '1.1rem')};
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
