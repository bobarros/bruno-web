import styles from "./Websites.module.scss";

const Websites = () => {
  const toRight = (ev) => {
    const elemento = ev.target.parentElement.children[2];
    const quantidade = elemento.childElementCount - 1;
    const target = elemento.style.transform;
    let valor = parseInt(target.substring(11, target.indexOf(")") - 1));
    valor <= -(quantidade * 100) ? (valor = 0) : (valor = valor - 100);
    console.log("rigth");
    elemento.style.transform = `translateX(${valor}%)`;
  };

  const toLeft = (ev) => {
    const elemento = ev.target.parentElement.children[2];
    const quantidade = elemento.childElementCount - 1;
    const target = elemento.style.transform;
    let valor = parseInt(target.substring(11, target.indexOf(")") - 1));
    valor === 0 ? (valor = quantidade * -100) : (valor = valor + 100);
    console.log("left");
    elemento.style.transform = `translateX(${valor}%)`;
  };

  return (
    <div className={styles.projeto}>
      <h2 className={styles.projeto__titulo}></h2>
      <div
        onClick={toLeft}
        className={`${styles.projeto__arrow} ${styles.projeto__left}`}
      >
        &#10094;
      </div>
      <div style={{ transform: "translateX(0%)" }} className={styles.slider}>
        <a
          className={styles.projeto__item}
          href="https://www.seushabitos.com.br/"
          rel="noopener"
          target="_blank"
        >
          <Image
            cloudName="bobarros"
            publicId="portfolio/websites/hhf1go3fi51vts45dv1h"
            alt="Imagem do portfolio na versao mobile"
            dpr="auto"
            secure="true"
            height="220"
          >
            <Transformation quality="100" fetchFormat="auto" />
            <Transformation height="440" crop="fill" />
          </Image>
        </a>
        <a
          className={styles.projeto__item}
          href="https://www.brunobarros.online/"
          rel="noopener"
          target="_blank"
        >
          <Image
            cloudName="bobarros"
            publicId="portfolio/websites/rrwabrkprydvdnl8aouz"
            alt="Imagem do portfolio na versao mobile"
            dpr="auto"
            secure="true"
          >
            <Transformation quality="100" fetchFormat="auto" />
            <Transformation height="440" crop="fill" />
          </Image>
        </a>
        <a
          className={styles.projeto__item}
          href="https://jujuwebsite.herokuapp.com/"
          rel="noopener"
          target="_blank"
        >
          <Image
            cloudName="bobarros"
            publicId="portfolio/websites/xvuhzzsjtqrqhlfw4qer"
            alt="Imagem do portfolio na versao mobile"
            dpr="auto"
            secure="true"
          >
            <Transformation quality="100" fetchFormat="auto" />
            <Transformation height="440" crop="fill" />
          </Image>
        </a>
        <a
          className={styles.projeto__item}
          href="https://www.seushabitos.com.br/"
          rel="noopener"
          target="_blank"
        >
          <Image
            cloudName="bobarros"
            publicId="portfolio/websites/aazlrsmyos5bbojdjgla"
            alt="Imagem do portfolio na versao mobile"
            dpr="auto"
            secure="true"
          >
            <Transformation quality="100" fetchFormat="auto" />
            <Transformation height="440" crop="fill" />
          </Image>
        </a>
      </div>
      <div
        onClick={toRight}
        className={`${styles.projeto__arrow} ${styles.projeto__right}`}
      >
        &#10095;
      </div>
    </div>
  );
};

export default Websites;
