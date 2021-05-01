/////////////////////////////////////////////////////////// React

import { useEffect } from "react";

/////////////////////////////////////////////////////////// Styled Components

import {
  Icons
} from 'components/night/StyledNight';

/////////////////////////////////////////////////////////// Local Components

import MoonSVG from 'svg/MoonSvg';
import SunSVG from 'svg/SunSVG';

/////////////////////////////////////////////////////////// Functions

/////////////// this handles the avatar animation when theme changes
const changeAvatar = (isDay:boolean) => {
  try {
    const d = document;

    const avatarHead = d.getElementById("cabeca") as HTMLElement;
    const avatarClosedEyes = d.getElementById("fechado") as HTMLElement;
    const avatarLight = d.getElementById("luz") as HTMLElement;
    const avatarLeftEye = d.getElementById("esquerdo") as HTMLElement;

    if (isDay) {
      avatarHead.classList.remove("cabecaRotate");
      avatarClosedEyes.style.opacity = "0";
      avatarLight.classList.remove("toBlink")
      avatarLeftEye.style.opacity = "1";
    } else {
      avatarHead.classList.add("cabecaRotate");
      avatarClosedEyes.style.opacity = "1";
      avatarLight.classList.add("toBlink")
      avatarLeftEye.style.opacity = "0";
    }
  } catch (error) {
    console.log("Bruno's not here! Where, then!?");
  }
}

/////////////// this handles the theme option in storage
const changeStorageData = (status:boolean) => {
  if (status) {
    localStorage.removeItem("darkModeBruno");
    localStorage.setItem("darkModeBruno", "false");
    changeAvatar(status);
  } else {
    localStorage.removeItem("darkModeBruno");
    localStorage.setItem("darkModeBruno", "true");
    changeAvatar(status);
  }
}

/////////////// this handles the colors changin for each theme
const changeTheme = (momentOfChange:string, isDarkMode:boolean = false) => {

  const d = document;
  const classesBody = d.body.classList;
  const sun = d.getElementById("sun")!.classList;
  const moon = d.getElementById("moon")!.classList;

  if (momentOfChange === "click") {
    classesBody.toggle("night");
    classesBody.toggle("day");
    sun.toggle("show");
    sun.toggle("notShow");
    moon.toggle("show");
    moon.toggle("notShow");
  } else if (momentOfChange === "toDark") {
    sun.toggle("notShow");
    moon.toggle("show");
    classesBody.add("night");
    classesBody.remove("day");
    changeAvatar(isDarkMode);
  } else if (momentOfChange === "toDay") {
    sun.toggle("show");
    moon.toggle("notShow");
    classesBody.remove("night");
    classesBody.add("day");
    changeAvatar(isDarkMode);
  }
}

/////////////// this handles the click event in night/day button
const toNight = () => {
  const status = localStorage.getItem("darkModeBruno") === 'true';
  changeStorageData(status);
  changeTheme("click");
};

/////////////////////////////////////////////////////////// Main Component

const Night = () => {

  useEffect(() => {
    const status = localStorage.getItem("darkModeBruno");
    if (status === null) {
      localStorage.setItem("darkModeBruno", "true"); /// night is the standard mode
    }
    if (status === "true" || status === null) {
      changeTheme("toDark", false);
    } else {
      changeTheme("toDay", true);
    }
  }, []);

  return (
    <div>
      <Icons onClick={toNight} title="Alternar entre modo diurno/noturno">
        <SunSVG />
        <MoonSVG />
      </Icons>
    </div>
  );
};

export default Night;
