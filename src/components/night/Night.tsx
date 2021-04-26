/////////////////////////////////////////////////////////// Styled Components

import { Icons } from "components/night/StyledNight";

//////////////////////////////////////////////////////////// Local Components

import MoonSVG from "svg/MoonSvg";
import SunSVG from "svg/SunSVG";

/////////////////////////////////////////////////////////////////// Functions

const toNight = () => {
  const d = document;
  let status = localStorage.getItem("darkModeBruno");

  ////// elements
  const avatarHead = d.getElementById("cabeca");
  const avatarClosedEyes = d.getElementById("fechado") as HTMLElement;
  const avatarLight = d.getElementById("luz") as HTMLElement;
  const avatarLeftEye = d.getElementById("esquerdo") as HTMLElement;

  if (status === "true") {
    localStorage.removeItem("darkModeBruno");
    localStorage.setItem("darkModeBruno", "false");
    if (avatarHead) {
      avatarHead.classList.remove("cabecaRotate");
      avatarClosedEyes.style.opacity = "0";
      avatarLight.classList.remove("toBlink");
      avatarLeftEye.style.opacity = "1";
    }
  } else {
    localStorage.removeItem("darkModeBruno");
    localStorage.setItem("darkModeBruno", "true");
    if (avatarHead) {
      avatarHead.classList.add("cabecaRotate");
      avatarClosedEyes.style.opacity = "1";
      avatarLight.classList.add("toBlink");
      avatarLeftEye.style.opacity = "0";
    }
  }

  let classesBody = d.body.classList;
  let solClasses = d.getElementById("sol")!.classList;
  let luaClasses = d.getElementById("lua")!.classList;

  classesBody.toggle("night");
  classesBody.toggle("day");
  solClasses.toggle("show");
  solClasses.toggle("notShow");
  luaClasses.toggle("show");
  luaClasses.toggle("notShow");
};

/////////////////////////////////////////////////////////// Main Component

const Nigth = () => {
  return (
    <div>
      <Icons onClick={toNight} title="Alternar entre modo diurno/noturno">
        <SunSVG />
        <MoonSVG />
      </Icons>
    </div>
  );
};

export default Nigth;
