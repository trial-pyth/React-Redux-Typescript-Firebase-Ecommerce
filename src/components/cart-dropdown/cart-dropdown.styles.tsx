import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 3px solid rgb(4, 78, 153);
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 80%;
  display: flex;
  font-weight: normal;
  flex-direction: column;
  overflow: auto;
`;
