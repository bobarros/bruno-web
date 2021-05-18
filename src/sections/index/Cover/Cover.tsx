//////////////////////////////////////////////////////////////////////// Next

import Image from "next/image";

/////////////////////////////////////////////////////////// Styled Components

import {
  PageBox,
  QuestionBox,
  Avatar,
  Question,
  TextQuestion,
  Type,
  Buttons,
  AnswerNo,
  TextNo,
  AnswerYes,
  TextYes,
} from "./StyledCover";

///////////////////////////////////////////////////////////// Local Components

/////////////////////////////////////////////////////////////////// Component

const Cover = ({
  isClicked,
  closeCover,
}: {
  isClicked: undefined | string;
  closeCover: any;
}) => {
  return (
    <PageBox id="pageBox">
      <QuestionBox id="questionBox">
        <Avatar>
          <Image
            src="/img/author_intro.png"
            width="300"
            height="300"
            layout="responsive"
            priority
          ></Image>
        </Avatar>
        <Question id="questionWrap">
          <TextQuestion>
            <p>Hi, I'm Bruno.</p>
            <p>I'm glad for this chance of showing you my work.</p>
            <p>Beforehand, I need to ask you something.</p>
            <p>Do you already know if you want to hire me?</p>
            <Type>|</Type>
          </TextQuestion>
          <Buttons>
            <div onClick={closeCover} aria-label="yes">
              Of course I want
            </div>
            <div onClick={closeCover} aria-label="no">
              Yet to decide
            </div>
          </Buttons>
        </Question>
        {isClicked === "no" && (
          <AnswerNo id="answerNoWrap">
            <TextNo>
              <p>Great! It's going to be more fun.</p>
              <p>I'm going to show you something unexpected.</p>
              <p>How a website can be without...</p>
              <p>Me!</p>
              <Type>|</Type>
            </TextNo>
          </AnswerNo>
        )}
        {isClicked == "yes" && (
          <AnswerYes>
            <TextYes>
              <p>No more delays, then.</p>
              <p>Time is money.</p>
              <p>Welcome to my website!</p>
            </TextYes>
          </AnswerYes>
        )}
      </QuestionBox>
    </PageBox>
  );
};

export default Cover;
