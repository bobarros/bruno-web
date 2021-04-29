/////////////////////////////////////////////////////////////// Local Component

import BrunoAvatar from "svg/BrunoAvatar";

/////////////////////////////////////////////////////////// Styled Components

import {
  Header,
  TextWrap,
  HeaderLinhaStrong,
  HeaderLinhaLight,
  Avatar,
} from "sections/index/IndexHeader/StyledIndexHeader";

///////////////////////////////////////////////////////////////////// Component

const IndexHeader = () => {
  return (
    <Header>
      <TextWrap>
        <HeaderLinhaStrong>Hi, I'm Bruno Barros</HeaderLinhaStrong>
        <HeaderLinhaLight>a Web Developer that finds joy bulding great things.</HeaderLinhaLight>
      </TextWrap>
      <Avatar>
        <BrunoAvatar />
      </Avatar>
    </Header>
  );
};

export default IndexHeader;
