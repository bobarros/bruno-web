///////////////////////////////////////////////////////////// Styled Components

import { Wrap, ChatSvg } from "./StyledChat";
import { Fix } from "components/simple/fix/fixStyled";
import TipBox from "components/simple/tipBox/TipBox";
import animations from "styles/Animations.module.scss";

//////////////////////////////////////////////////////////////// Main Component

const Chat =  ({ state, setState }:{state:string[], setState:any}) => {

  const tipChat = () => {
    const d = document;
    d.getElementById("tipChat")!.style.display = "block";
    d.getElementById("tipChat")!.classList.add(animations.showTip);
  };
  
  const fixChat = () => {
    const d = document;
    setState([...state, "chat"]);
    d.getElementById("tipChat")!.style.display = "none";
    d.getElementById("chatBox")!.classList.add(animations.fadeImage);
  };

  return (
    <Wrap id="chatBox">
      <ChatSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373.232 373.232">
        <path
          fill="#fff"
          d="M30,361l23-65c0,0-45.6-66.2-43-118S39,6,188.7,6C337,6,365,176.1,365,196.7c0,0-39.5,153.5-156,153.5 s-83-6.2-83-6.2L30,361z"
        />
        <path d="M187.466,0c-0.1,0.1-0.3,0.1-0.6,0.1c-101.2,0-183.5,82.3-183.5,183.5c0,41.3,14.1,81.4,39.9,113.7l-26.7,62 c-2.2,5.1,0.2,11,5.2,13.1c1.8,0.8,3.8,1,5.7,0.7l97.9-17.2c19.6,7.1,40.2,10.7,61,10.6c101.2,0,183.5-82.3,183.5-183.5 C370.066,82.1,288.366,0.1,187.466,0z M186.466,346.6c-19.3,0-38.4-3.5-56.5-10.3c-1.7-0.7-3.5-0.8-5.3-0.5l-82.4,14.4l21.8-50.7 c1.5-3.5,0.9-7.6-1.6-10.5c-11.8-13.7-21.2-29.3-27.8-46.2c-7.4-18.9-11.2-39-11.2-59.3c0-90.2,73.4-163.5,163.5-163.5 c89.9-0.2,162.9,72.5,163,162.4c0,0.2,0,0.4,0,0.6C349.966,273.3,276.566,346.6,186.466,346.6z" />
        <path d="M178.666,146.7h-54c-5.5,0-10,4.5-10,10s4.5,10,10,10h54c5.5,0,10-4.5,10-10S184.166,146.7,178.666,146.7z" />
        <path d="M248.666,196.7h-124c-5.5,0-10,4.5-10,10s4.5,10,10,10h124c5.5,0,10-4.5,10-10S254.166,196.7,248.666,196.7z" />
      </ChatSvg>
      <TipBox id="tipChat" onClick={fixChat}>
        <p>Very hard to make it work.</p>
        <ul>
          <li>
            When was the last time you saw a chat box like that solving a
            problem?
          </li>
          <li>
            Is easy to have someone that wants to sell something at all costs.
          </li>
          <li>Or worse, a chatbot the don't work at all.</li>
          <li>It's just a bad experience most of the time.</li>
          <li>Here? No doubt. It's gone!</li>
        </ul>
      </TipBox>
      <Fix id="fixChat" onClick={tipChat} top="-30px" right="50px">
        Chat Box
      </Fix>
    </Wrap>
  );
};

export default Chat;
