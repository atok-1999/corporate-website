import styled from 'styled-components';
import Head from 'next/head';
import { Anchor } from '../components/Header';
import Link from 'next/Link';
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
        // GLOBE({
        //   el: vantaRef.current,
        //   THREE,
        //   mouseControls: true,
        //   touchControls: true,
        //   gyroControls: false,
        //   minHeight: 150,
        //   minWidth: 150,
        //   scale: 1.0,
        //   scaleMobile: 1.0,
        //   color2: 0x8ebaed,
        //   backgroundColor: 0xffffff,
        // })
        0
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
        <Mission>
          <h1 style={{ fontSize: '3rem' }}>
            Connecting people with our products
          </h1>
          <p>人と人をモノで繋ぐをミッションに私たちは活動しています。</p>
        </Mission>
      </Main>

      <AboutSection>
        <div
          style={{
            position: 'absolute',
            top: '5%',
            left: '0%',
            marginLeft: 24,
          }}
        >
          <Fade top>
            <SectionTitle>About us</SectionTitle>
          </Fade>
        </div>

        <div style={{ maxWidth: '90%', textAlign: 'center' }}>
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
        </div>
        <div style={{ marginTop: 35 }}>
          <Link href={'about/'}>
            <Anchor>READ MORE</Anchor>
          </Link>
        </div>
      </AboutSection>

      <CenterCotentContainer isWide={isWide}>
        <ServiceSection isWide={isWide}>
          <div style={{ marginLeft: isWide ? 24 : 0 }}>
            <Fade top>
              <SectionTitle>What we do</SectionTitle>
            </Fade>
          </div>
          <Service isWide={isWide}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ maxWidth: '90%', margin: '0 auto' }}>
                <Fade top>
                  <Image src='/images/box.png' width={200} height={200} />
                </Fade>
                <h3>輸入販売事業</h3>
                <p>
                  国内にまだ入っていきていない、人々の暮らしをより豊かにする最先端の製品を独自のルートで輸入し、適正な価格で販売しております。
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: isWide ? 0 : 20 }}>
              <div style={{ maxWidth: '90%', margin: '0 auto' }}>
                <Fade top>
                  <Image src='/images/dig.png' width={200} height={200} />
                </Fade>
                <h3>モノプロダクション事業</h3>
                <p>
                  世の中の消費者がまだ気づいていない潜在的な悩みを探し出し、それを解決出来るような商品を開発し、オリジナルブランドとして販売しております。
                </p>
              </div>
            </div>
          </Service>
        </ServiceSection>
      </CenterCotentContainer>
      <ContactSection>
        <Fade top>
          <SectionTitle>Contact</SectionTitle>
          <Link href='/contact'>
            <Contact>
              <span>お問い合わせ・ご相談はこちらから</span>
            </Contact>
          </Link>
        </Fade>
      </ContactSection>
    </div>
  );
}

const Main = styled.div`
  position: relative;
  height: 100vh;
`;

const CenterCotentContainer = styled.div<{ isWide: boolean }>`
  max-width: 90%;
  min-height: 100%;
  margin: 0 auto;
  margin-bottom: ${(props) => (props.isWide ? '20%' : '50%')};
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  padding: 1rem 2rem;
  position: relative;
  text-align: center;

  :before,
  :after {
    position: absolute;
    top: 0;
    content: '';
    width: 8px;
    height: 100%;
    display: inline-block;
  }

  :before {
    border-left: solid 2px red;
    border-top: solid 2px red;
    border-bottom: solid 2px red;
    left: 0;
  }

  :after {
    content: '';
    border-top: solid 2px red;
    border-right: solid 2px red;
    border-bottom: solid 2px red;
    right: 0;
  }
`;

const Mission = styled.div`
  margin-left: 36px;
  position: absolute;
  top: 40%;
`;

const AboutSection = styled.div`
  margin-left: 20%;
  position: relative;
  height: 100vh;
  background-color: #fafafa;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 15%;
`;

const ServiceSection = styled.div<{ isWide: boolean }>`
  position: relative;
  flex-direction: column;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.isWide ? 'flex-start' : 'center')};
`;

const Service = styled.div<{ isWide: boolean }>`
  margin-top: 15%;
  display: flex;
  flex-direction: ${(props) => (props.isWide ? 'row' : 'column')};
`;

const ContactSection = styled.div`
  position: relative;
  height: 75vh;
  background-color: #fafafa;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contact = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.3;
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
