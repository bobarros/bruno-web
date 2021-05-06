//////////////////////////////////////////////////////////////////////// React

import Router from 'next/router'

//////////////////////////////////////////////////////////////////////// React

import { ReactNode, useEffect } from "react";

///////////////////////////////////////////////////////////// Local Components

import Footer from "components/footer/Footer";
import Nav from "components/nav/Nav";

//////////////////////////////////////////////////////////////////// Component

const IndexLayout = ({ children }:{children: ReactNode}) => {
  
  useEffect(() => {
    Router.reload(); //preventing images to now reload;
  })

  return (
    <>
      <Nav />
      <main className="container-principal">{children}</main>
      <Footer />
    </>
  );
};

export default IndexLayout;
