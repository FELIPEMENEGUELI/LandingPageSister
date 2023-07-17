import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ebe4dc;
  overflow: hidden;
`;

export const NoivaDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  margin: 15px 0 15px 0;
`;

export const Imagem = styled.div`
  display: flex;
  margin: 8px;
  height: 120px;
  width: 120px;

  img {
    height: 120px;
    width: 120px;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    height: 150px;
    width: 150px;

    img {
      height: 150px;
      width: 150px;
    }
  }

  @media (min-width: 1024px) {
    height: 175px;
    width: 175px;

    img {
      height: 175px;
      width: 175px;
    }
  }
`;
