import React from 'react';
import styled from 'styled-components';

const Service = () => {
  return (
    <ServiceContainer>
      <div>Service</div>
    </ServiceContainer>
  );
};

const ServiceContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dfeec0;
`;

export default Service;
