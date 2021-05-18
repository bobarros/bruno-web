/////////////////////////////////////////////////////////////////// Styled

import { ReactChild } from "react";
import BrunoAvatar from "svg/BrunoAvatar";
import { Wrap, BoxWrap, InsideWrap, Text, Button, Background } from "./TipBoxStyled";

const TipBox = ({
  style,
  children,
  id,
  onClick,
  intro
}: {
  style?:any;
  children: ReactChild[];
  id: string;
  onClick: () => void;
  intro?:boolean;
}) => {

  return (
    <Wrap id={id} style={style}>
      <BoxWrap>
        <InsideWrap>
          <Text>{children}</Text>
          <Button onClick={onClick}>{intro ? "Start" : "Fix it!"}</Button>
        </InsideWrap>
        <span><BrunoAvatar /></span>        
      </BoxWrap>
      <Background background={intro ? true : false} />
    </Wrap>
  );
};

export default TipBox;
