/////////////////////////////////////////////////////////// Styled Components

import {
  Icons
} from 'components/night/StyledNight';

/////////////////////////////////////////////////////////// Local Components

import MoonSVG from 'svg/MoonSvg';
import SunSVG from 'svg/SunSVG';

/////////////////////////////////////////////////////////// Functions

const toNight = () => {
  const d = document;
  let status = localStorage.getItem("darkModeBruno");
  if (status === "true") {
    localStorage.removeItem("darkModeBruno");
    localStorage.setItem("darkModeBruno", "false");
    if (d.getElementById("cabeca")) {
      d.getElementById("cabeca").classList.remove("cabecaRotate");
      d.getElementById("fechado").style.opacity = "0";
      d.getElementById("luz").classList.remove("toBlink")
      d.getElementById("esquerdo").style.opacity = "1";
    }

  } else {
    localStorage.removeItem("darkModeBruno");
    localStorage.setItem("darkModeBruno", "true");
    if (d.getElementById("cabeca")) {
      d.getElementById("cabeca").classList.add("cabecaRotate");
      d.getElementById("fechado").style.opacity = "1";
      d.getElementById("luz").classList.add("toBlink")
      d.getElementById("esquerdo").style.opacity = "0";
    }

  }

  let classesBody = d.body.classList;
  let sol = d.getElementById("sol").classList;
  let lua = d.getElementById("lua").classList;

  classesBody.toggle("night");
  classesBody.toggle("day");
  sol.toggle("show");
  sol.toggle("notShow");
  lua.toggle("show");
  lua.toggle("notShow");
};

/////////////////////////////////////////////////////////// Main Component

const Nigth = () => {
  return (
    <div>
      <Icons
        onClick={toNight}
        title="Alternar entre modo diurno/noturno"
      >
        <SunSVG />
        <MoonSVG />
      </Icons>
    </div>
  );
};

export default Nigth;
