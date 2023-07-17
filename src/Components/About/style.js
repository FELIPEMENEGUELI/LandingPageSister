import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Text = styled.div`
  margin: 10px;
  position: absolute;
  z-index: 1;

  h3 {
    font-size: 22px;
    margin: 0 0 8px 0;
    color: #543F33;
  }

  div {
    width: 180px;
  }

  p {
    font-weight: bold;
    color: #543F33;
    font-size: 12px;
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    margin: 20px;
    div {
      width: 450px;
    }

    p {
      font-size: 18px;
    }

    h3 {
      font-size: 30px;
    }
  }
`;

export const StyleImg = styled.div`
  img {
    margin-left: 20vw;
    width: 80vw;
    height: 50vh;
    object-fit: cover;
    position: relative;
    aspect-ratio: 1;
    filter: drop-shadow(1px 1px 6px #543F33);
  }

  @media (min-width: 768px) {
    img {
      margin-left: 0;
      width: 100vw;
      height: 87vh;
    }
  }
`;

export const Separator = styled.div`
  max-width: 60px;
  border: 1px solid #543F33;
  background-color: #543F33;
`;
