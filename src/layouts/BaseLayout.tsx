//////////////////////////////////////////////////////////////////////// React

import { useEffect, ReactNode } from "react";

///////////////////////////////////////////////////////////// Local Components

import Logo from "components/logo/Logo";
import Footer from "components/footer/Footer";
import Nav from "components/nav/Nav";
import Night from "components/night/Night";
import ToTop from "components/ToTop/ToTop";

//////////////////////////////////////////////////////////////////// Component

const BaseLayout = ({ children }: { children: ReactNode }) => {
  //////////
  useEffect(() => {
    const d = document;
    let sun = d.getElementById("sol") as HTMLDivElement;
    let moon = d.getElementById("lua") as HTMLDivElement;

    let option = "day";

    let status = localStorage.getItem("darkModeBruno");
    if (status === "true" || status === null) {
      option = "night";
      sun.classList.toggle("notShow");
      moon.classList.toggle("show");
    } else {
      sun.classList.toggle("show");
      moon.classList.toggle("notShow");
    }

    if (status === null) {
      localStorage.setItem("darkModeBruno", "true");
    }

    if (option === "day") {
      d.body.classList.remove("night");
      d.body.classList.add(option);
    }
  }, []);
  //////////
  return (
    <>
      <Nav />
      <Night />
      <Logo />
      <main className="container-principal">{children}</main>
      <Footer />
      <ToTop />
    </>
  );
  //////////
};

export default BaseLayout;
