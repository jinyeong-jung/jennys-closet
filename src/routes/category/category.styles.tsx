import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  font-family: "Playfair Display", serif;
  text-align: center;
`;
