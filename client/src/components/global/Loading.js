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

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
  `;
  
  const Img = styled.img`
    animation: ${Loading} 3s linear infinite;
    margin: auto;
  `;
  return (
    <Wrapper>
      <Img src="/images/loadingscribble02.png" />
    </Wrapper>
  );
};


export default Loading;
