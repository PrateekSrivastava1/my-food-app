import styled from 'styled-components';

export const tagData = [
  { id: 1, name: 'Indian' },
  { id: 2, name: 'Italian' },
  { id: 3, name: 'Chinees' },
  { id: 4, name: 'Italian' },
  { id: 5, name: 'Italian' },
  { id: 6, name: 'Italian' },
  { id: 7, name: 'Italian' },
  { id: 8, name: 'Italian' },
  { id: 9, name: 'Italian' },
  { id: 10, name: 'Italian' }
];

export const PageContainer = styled.div`
  padding: 20px 100px 0 100px;
  box-sizing: border-box;
  height: 98vh;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const TimeContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    column-gap: 70px;
    height: auto;
  }
`;
