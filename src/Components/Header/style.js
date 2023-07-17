import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  height: 50vh;

  @media (min-width: 768px) {
    height: 65vh;
  }
`;

export const NavBar = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 20px;
  align-items: center;
  border-top: 1.5px solid #543f33;
  border-bottom: 1.5px solid #543f33;
  border-left: 1.5px solid #543f33;
  z-index: 1;
  position: absolute;
  margin-bottom: 10px;
  padding-left: 5px;

  @media (min-width: 768px) {
    height: 50px;
    padding-left: 15px;
  }

  @media (min-width: 1024px) {
    padding-left: 15px;
  }
`;

export const ImgProfile = styled.div`
  img {
    aspect-ratio: 1;
    object-fit: cover;
    width: 100vw;
    height: 50vh;
    mask-image: linear-gradient(to top, transparent 0%, #ebe4dc 5%);
  }
  @media (min-width: 768px) {
    img {
      height: 75vh;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: #543f33;

  :hover {
    color: #e8af79;
    transition: 1s;
  }

  span {
    font-size: 10px;
  }

  @media (min-width: 768px) {
    span {
      font-size: 22px;
    }
  }

  @media (min-width: 1024px) {
    span {
      font-size: 28px;
    }
  }
`;

export const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    background-color: #8d8379;
    color: #e8af79;
    opacity: 1;
    `}

  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
