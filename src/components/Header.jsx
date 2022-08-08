import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../context/myContext";
import Switch from "./Switch";

function Header() {
const context = useContext(MyContext)

  return <HeaderContainer backgroundColor={context.theme ? '#738da4' : '#334d67'}>
    <Switch value={context.theme} onChange={context.handlerChange}/>
  </HeaderContainer>;
}

export default Header;

const HeaderContainer = styled.header`
  background-color:${({backgroundColor}) => backgroundColor};
  padding-bottom: 30px;
  padding-left: 30px;
`;
