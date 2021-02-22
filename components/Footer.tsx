import React from 'react';
import useMedia from 'use-media';

const Footer = () => {
  const isWide = useMedia({ minWidth: '521px' });

  return (
    <div
      style={{
        color: '#fff',
        backgroundColor: 'rgb(55, 58, 71)',
        textAlign: 'center',
        paddingTop: isWide ? 20 : 15,
        paddingBottom: isWide ? 20 : 15,
      }}
    >
      Copyright © Company Name.
    </div>
  );
};

export default Footer;
