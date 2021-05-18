/////////////////////////////////////////////////////////

import styled from "styled-components";

/////////////////////////////////////////////////////////

const PrepFix = ({
  children,
  onClick,
  className,
  top,
  right,
  bottom,
  left,
  id
}: {
  children: string;
  onClick: () => void;
  className?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  id: string;
}) => {
  return (
    <div id={id} 
    style={{
      top: top,
      right: right,
      bottom: bottom,
      left: left
    }} className={className} onClick={onClick}>
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
      <p>{children}</p>
    </div>
  );
};

/////////////////////////////////////////////////////////

export const Fix = styled(PrepFix)`
  display: flex;
  align-items: center;
  position: absolute;  
  width: max-content;
  height: 50px;
  z-index: 100;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px 15px;
  opacity: 1;
  transition: all .7s ease;

  svg {
    width: 35px;
    height: 35px;
  }

  p {
    color: white;
    font-weight: 300;
    font-size: 18px;
    padding-left: 10px;
    text-shadow: 1px 1px 3px black;
  }
`;