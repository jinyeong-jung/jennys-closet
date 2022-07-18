import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  align-items: center;

  img {
    width: 30%;
    height: fit-content;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

export const Name = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Price = styled.span`
  font-size: 12px;
  color: gray;
`;
