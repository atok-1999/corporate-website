import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Form from '../components/Form';

const Contact = () => {
  return (
    <ContactContainer>
      <Fade top>
        <h1
          style={{
            fontSize: '3rem',
            textAlign: 'center',
            fontFamily: 'Roboto',
          }}
        >
          Contact
        </h1>
      </Fade>
      <div
        style={{
          textAlign: 'center',
          maxWidth: '75%',
          margin: '0 auto',
          marginBottom: 50,
        }}
      >
        <p>
          ご依頼やご相談、サービスについてのご質問やご要望がございましたら、下記フォームよりお気軽にお問い合わせください。
          <br />
          送付いただいた内容を確認の上、担当者からご連絡させていただきます。
        </p>
      </div>

      <Form />
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 100px;
`;

export default Contact;
