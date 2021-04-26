import Logo from "components/logo/Logo";
import Footer from "components/footer/Footer";
import React, { useEffect } from "react";
import Nav from "components/nav/Nav.tsx";
import Night from "components/night/Night.tsx";
import ToTop from 'components/ToTop/ToTop';

const IndexLayout = (props) => {
  const { children } = props;

  useEffect(() => {
    const d = document;
    let sol = d.getElementById("sol").classList;
    let lua = d.getElementById("lua").classList;

    let option = "day";

    let status = localStorage.getItem("darkModeBruno");
    if (status === "true" || status === null) {
      option = "night";
      sol.toggle("notShow");
      lua.toggle("show");
      d.getElementById("cabeca").classList.add("cabecaRotate");
      d.getElementById("fechado").style.opacity = "1";
      d.getElementById("luz").classList.add("toBlink");
      d.getElementById("esquerdo").style.opacity = "0";
    } else {
      sol.toggle("show");
      lua.toggle("notShow");
      d.getElementById("cabeca").classList.remove("cabecaRotate");
      d.getElementById("fechado").style.opacity = "0";
      d.getElementById("luz").classList.remove("toBlink");
      d.getElementById("esquerdo").style.opacity = "1";
    }

    if(status === null) {
      localStorage.setItem("darkModeBruno", "true");
    }

    if(option === "day") {
      d.body.classList.remove("night");
      d.body.classList.add(option);
    }

  }, []);

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
};

export default IndexLayout;
