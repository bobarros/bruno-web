import styles from "./ToTop.module.scss";

const ToTop = () => {
  const upToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        onClick={upToTop}
        className={`${styles.ToTop} nao-imprimir noSelect`}
      >
        ^
      </div>
    </>
  );
};

export default ToTop;
