import styled, { keyframes } from "styled-components";

const Loading = () => {
  const Loading = keyframes`
    from{
    transform:rotate(0deg);
    }
    
    to{
    transform:rotate(360deg);
    }
    `;

  const Img = styled.img`
    animation: ${Loading} 3s linear infinite;
    margin: 20px 200px;
    
  `;

  return (
    <>
      <Img src="/images/loadingscribble02.png" />
    </>
  );
};

export default Loading;
