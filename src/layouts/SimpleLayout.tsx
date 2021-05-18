//////////////////////////////////////////////////////////////////////// React

import { ReactNode } from "react";

///////////////////////////////////////////////////////////// Local Components

import Footer from "components/simple/footer/Footer";
import Nav from "components/simple/nav/Nav";
import TipBox from "components/simple/tipBox/TipBox";
import animations from "styles/Animations.module.scss";

//////////////////////////////////////////////////////////////////// Component

const IndexLayout = ({
  children,
  state,
  setState,
}: {
  children: ReactNode;
  state: string[];
  setState: any;
}) => {
  const introBox = () => {
    const d = document;
    d.getElementById("introBox")!.classList.add(animations.fadeImage);
    setTimeout(() => {
      d.getElementById("introBox")!.removeAttribute("style");
    }, 1500);
  };

  return (
    <>
      <TipBox
        style={{ display: "block", opacity: "1" }}
        id="introBox"
        onClick={introBox}
        intro
      >
        <p>Every website has a goal! Even when people don't think about it.</p>
        <p>
          Mine? To convince you of my capacity to think creatively and to give
          life to those thoughts. Either simple or complex ones.
        </p>
        <p>
          Since you're not confident - yet - about my skills, I'm offering a
          walk-through and learning experience.
        </p>
        <p>
          You will have the chance to transform a below average website into a
          great one!
        </p>
        <p>
          Look for the magnifying glass below and click on it. You will have a brief
          explanation of the problem and the chance to fix all issues.
        </p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <rect
              x="304.281"
              y="295.657"
              transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 331.3891 797.9132)"
              style={{ fill: "#344A5E" }}
              width="53.333"
              height="69.333"
            />
            <circle
              style={{ fill: "#8AD7F8" }}
              cx="186.667"
              cy="186.667"
              r="165.333"
            />
            <path
              style={{ fill: "#415A6B" }}
              d="M318.933,318.933c-72.533,72.533-192,72.533-264.533,0s-72.533-192,0-264.533s192-72.533,264.533,0 S392.533,246.4,318.933,318.933z M85.333,85.333c-56.533,56.533-56.533,147.2,0,203.733s147.2,56.533,203.733,0 s56.533-147.2,0-203.733S140.8,28.8,85.333,85.333z"
            />
            <path
              style={{ fill: "#F3705A" }}
              d="M380.8,315.733c56.533,39.467,99.2,70.4,112,84.267c25.6,25.6,25.6,67.2,0,92.8s-67.2,25.6-92.8,0 c-12.8-12.8-44.8-55.467-84.267-112L380.8,315.733z"
            />
            <path
              style={{ fill: "#F05540" }}
              d="M337.067,410.667c-6.4-9.6-13.867-19.2-20.267-28.8l65.067-65.067 c10.667,7.467,20.267,13.867,28.8,20.267L337.067,410.667z"
            />
            <path
              style={{ fill: "#F3705A" }}
              d="M327.467,392.533l65.067-65.067c6.4-6.4,6.4-17.067,0-23.467c-6.4-6.4-17.067-6.4-23.467,0 L304,369.067c-6.4,6.4-6.4,17.067,0,23.467C310.4,400,321.067,400,327.467,392.533z"
            />
            <ellipse
              style={{ fill: "#FFFFFF" }}
              cx="186.667"
              cy="100.267"
              rx="50.133"
              ry="23.467"
            />
          </svg>
        </p>
        <p>Are you ready?</p>
      </TipBox>
      <Nav state={state} setState={setState} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default IndexLayout;
