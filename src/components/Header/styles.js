import styled from "styled-components";
import { Avatar } from "@mui/material";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: aqua;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
export const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 30px;
  color: gray;
  border: 1px gray solid;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    color: gray;
    outline: 0;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
