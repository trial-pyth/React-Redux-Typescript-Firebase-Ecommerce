import styled from "styled-components";

import { ReactComponent as Shoppingsvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(Shoppingsvg)`
  height: 1000px;
  width: 1000px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 10px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  color: white;
  bottom: 8px;
  font-weight: 400;
`;
