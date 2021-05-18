import styled, { css } from "styled-components";

/////////////////////////////////////////////////////////

const duration = 2; //s
let largest = 400; //px
let resultFactor = 2 * duration / largest;

const sizesQuestion = [
  { duration: (115 * resultFactor) + "s", width: "115px", sum: "0s" },
  { duration: (400 * resultFactor) + "s", width: "400px", sum: (115 * resultFactor) + "s" },
  { duration: (335 * resultFactor) + "s", width: "335px", sum: (515 * resultFactor) + "s" },
  { duration: (360 * resultFactor) + "s", width: "360px", sum: (870 * resultFactor) + "s" },
];

largest = 360; //px
resultFactor = 2 * duration / largest;
const sizesAnswer = [
  { duration: (280 * resultFactor) + "s", width: "280px", sum: "0s" },
  { duration: (360 * resultFactor) + "s", width: "360px", sum: (280 * resultFactor) + "s" },
  { duration: (280 * resultFactor) + "s", width: "260px", sum: (640 * resultFactor) + "s" },
  { duration: (25 * resultFactor) + "s", width: "25px", sum: (1000 * resultFactor) + "s" },
];

const typeFunction = (sizes, name) => {
  const boxSize = "420px";

  return sizes.map((element, index) => {
    return css`
      p:nth-child(${index + 1}) {
        width: 0;
        animation-name: ${name + index};
        animation-duration: ${sizes[index].duration};
        animation-delay: ${sizes[index].sum};
        animation-fill-mode: forwards;

        @keyframes ${name + index} {
          0% {
            width: 0;
          }
          99% {
            width: ${sizes[index].width};
          }
          100% {
            width: ${index === sizes.length - 1 ? sizes[index].width : boxSize};
          }
        }
      }
    `;
  })
}


export const PageBox = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  position: absolute;
  z-index: 50;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all 1s ease;
  transition-delay: 1.5s;
  color: white;

  @media only screen and (max-width: 901px) {
    height: 100%;
    width: 100%;
  }
`;

export const QuestionBox = styled.div`
  display: flex;
  margin: 15% auto;
  max-width: 670px;
  max-height: 480px;
  width: 90%;
  opacity: 1;
  transition: all 1s ease;
`;

export const Avatar = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  & div {
    background-color: grey;
    border-radius: 50px;
    border: 0;
    outline: none;
  }

  img {
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
    opacity: 0.8;
  }
`;

export const Question = styled.div`
  display: block;
  padding: 20px;
  font-size: 14px;
  font-family: "JetBrains Mono";
`;

export const TextQuestion = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 420px;
  height: 100px;

  p {
    line-height: 24px;
    height: 24px;
    overflow: hidden;
    white-space: nowrap;
  }

  ///typing effect function
  ${typeFunction(sizesQuestion, "question")}
`;

export const AnswerNo = styled.div`
  display: block;
  padding: 20px;
  font-size: 14px;
  font-family: "JetBrains Mono";
  opacity: 0;
  animation-name: boxappear;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  @keyframes boxappear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`;

export const TextNo = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 420px;
  height: 100px;

  p {
    line-height: 24px;
    height: 24px;
    overflow: hidden;
    white-space: nowrap;
  }

  ///typing effect function
  ${typeFunction(sizesAnswer, "answer")}
`;

export const AnswerYes = styled.div`
  display: block;
  padding: 20px;
  font-size: 14px;
  font-family: "JetBrains Mono";
`;

export const TextYes = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 420px;
  height: 100px;
  opacity: 0;
  animation-name: enterwebsite;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes enterwebsite {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  p {
    line-height: 24px;
    height: 24px;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
`;

export const Type = styled.span`
  position: relative;
  display: block;
  top: 3px;
  font-weight: 700;
  font-size: 22px;
  width: 0;
  height: 0;
  animation-name: typeblink;
  animation-duration: 0.6s;
  animation-iteration-count: infinite;

  @keyframes typeblink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin: 20px;

  div {
    cursor: pointer;
    background-color: #343434;
    border-radius: 10px;
    font-weight: 700;
    padding: 10px 20px;
  }

  div:hover {
    transform: translateY(-2px);
  }
  div::active {
    transform: translateY(1px);
  }

  div:first-child {
    margin-right: 15px;
  }
`;
