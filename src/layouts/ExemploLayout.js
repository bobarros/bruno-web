import Logo from "componentslogo/Logo";
import Footer from "components/footer/Footer";
import NavExemplo from "components/nav/NavExemplo";

const BaseLayout = (props) => {
  const { children } = props;

  return (
    <>
      <NavExemplo />
      <Logo />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
