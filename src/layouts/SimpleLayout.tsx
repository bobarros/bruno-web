
//////////////////////////////////////////////////////////////////////// React

import { ReactNode } from "react";

///////////////////////////////////////////////////////////// Local Components

import Footer from "components/simple/footer/Footer";
import Nav from "components/simple/nav/Nav";

//////////////////////////////////////////////////////////////////// Component

const IndexLayout = ({ children }:{children: ReactNode}) => {

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default IndexLayout;
