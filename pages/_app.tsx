import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
    );
    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded ? (
        <AnimatedCursor innerSize={12} outerSize={20} outerScale={1.8} />
      ) : null}
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p ::selection {
    background: #000;
    color: #fff;
  }

  p ::-moz-selection {
    background: #000;
    color: #fff;
  }

  h1 ::selection {
    background: #000;
    color: #fff;
  }

  h2 ::selection {
    background: #000;
    color: #fff;
  }
`;

export default MyApp;
