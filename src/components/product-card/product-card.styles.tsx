import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
      display: block;
      min-width: unset;
      padding: 0 10px;
    }
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    &:hover {
      img {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const Name = styled.span`
  margin-bottom: 15px;
`;