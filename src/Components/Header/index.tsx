import React from 'react';
import styled from 'styled-components';

type HeaderType = {
  headerName: string;
};

const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  border-bottom: 1px solid black;
  font: normal normal 600 22px Open Sans;
`;

const Header: React.FC<HeaderType> = ({ headerName }: HeaderType) => {
  return <HeaderContainer>{headerName}</HeaderContainer>;
};

export default Header;
