import React from 'react';

import { LeftContainer, OnlineIcon, RightContainer, Wrapper } from "./style";

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png'

const InfoBar = ({room}) => {
  return (
    <Wrapper>
      <LeftContainer>
        <OnlineIcon src={onlineIcon} alt="online image"/>
        <h3>{room}</h3>
      </LeftContainer>
      <RightContainer>
        <a href="/"><img src={closeIcon} alt="close image"/></a>
      </RightContainer>
    </Wrapper>
  )
}

export default InfoBar;