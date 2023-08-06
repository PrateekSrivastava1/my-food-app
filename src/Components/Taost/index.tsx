import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type ToastProps = {
  totalSelectedFoodItems: number;
};

type ToastContainerProps = {
  display: boolean;
};

const ToastContainer = styled.div<ToastContainerProps>`
  display: ${props => (props.display ? 'block' : 'none')};
  justify-content: center;
  text-align: center;
  width: 50%;
  padding: 10px;
  background-color: black;
  color: white;
  margin: -240px auto 0 auto;
  zindex: 999;
  border-radius: 10px;
`;

const Toast: React.FC<ToastProps> = ({ totalSelectedFoodItems }: ToastProps) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (totalSelectedFoodItems > 0) {
      setShowToast(true);

      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [totalSelectedFoodItems]);

  return (
    <ToastContainer display={showToast}>
      {totalSelectedFoodItems} Food Items Selected
    </ToastContainer>
  );
};

export default Toast;
