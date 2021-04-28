/////////////////////////////////////////////////////////// Styled Components

import { Wrap } from "components/ToTop/StyledToTop";

///////////////////////////////////////////////////////////// Main Component

const ToTop = () => {
  const upToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Wrap onClick={upToTop} className="nao-imprimir noSelect">
        ^
      </Wrap>
    </>
  );
};

export default ToTop;
