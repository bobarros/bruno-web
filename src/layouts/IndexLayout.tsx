//////////////////////////////////////////////////////////////////////// React

import { ReactNode } from "react";

///////////////////////////////////////////////////////////// Local Components

import Footer from "components/footer/Footer";
import Nav from "components/nav/Nav";

//////////////////////////////////////////////////////////////////// Component

const IndexLayout = ({ children }:{children: ReactNode}) => {
  return (
    <>
      <Nav />
      <main className="container-principal">{children}</main>
      <Footer />
    </>
  );
};

export default IndexLayout;
