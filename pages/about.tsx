import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import MuiTable from 'mui-table';

const About = () => {
  const tableData = [
    {
      title: '会社名',
      data: 'Company Name',
    },
    {
      title: '住所',
      data: '〒169-8050 東京都新宿区戸塚町１丁目１０４',
    },
    {
      title: '設立',
      data: '2021年3月',
    },
    {
      title: '主要取引銀行',
      data: '早稲田銀行',
    },
  ];

  return (
    <AboutContainer>
      <Fade top>
        <h1 style={{ fontSize: '3rem', fontFamily: 'Karla' }}>About</h1>

        <div
          style={{ textAlign: 'center', maxWidth: '75%', marginBottom: 120 }}
        >
          <p>人と人をモノで繋ぐをミッションに私たちは活動しています。</p>
          <p>
            良いモノだけど、知られていないものがある。
            良いモノだけど、伝わりにくいものがある。
            良いモノだけど、隠れてしまっているものがある。 私たちは、
            そんな可能性を秘めた原石を みつけ、みがき、ひろげ、
            人(生産者)と人(消費者)をモノでつなぐ、Company Nameです。
          </p>
        </div>
      </Fade>

      <Fade top>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem' }}>企業概要</h2>
          <MuiTable
            data={tableData}
            columns={[{ name: 'title' }, { name: 'data' }]}
            style={{ backgroundColor: 'white' }}
          />
        </div>
      </Fade>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 100px;
`;

export default About;
