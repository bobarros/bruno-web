import Logo from "components/logo/Logo";
import Footer from "components/footer/Footer";
import React, { useEffect } from "react";
import Nav from "components/nav/Nav";
import Night from "components/night/Night";
import ToTop from 'utilities/ToTop/ToTop';

const BaseLayout = (props) => {
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
    } else {
      sol.toggle("show");
      lua.toggle("notShow");
    }

    if (status === null) {
      localStorage.setItem("darkModeBruno", "true");
    }

    if (option === "day") {
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

export default BaseLayout;
