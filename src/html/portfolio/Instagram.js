import styles from "./Websites.module.scss";

const Instagram = () => {
  const toRight = (ev) => {
    const elemento = ev.target.parentElement.children[2];
    const quantidade = elemento.childElementCount - 1;
    const target = elemento.style.transform;
    let valor = parseInt(target.substring(11, target.indexOf(")") - 1));
    valor <= -(quantidade * 100) ? (valor = 0) : (valor = valor - 100);

    elemento.style.transform = `translateX(${valor}%)`;
  };

  const toLeft = (ev) => {
    const elemento = ev.target.parentElement.children[2];
    const quantidade = elemento.childElementCount - 1;
    const target = elemento.style.transform;
    let valor = parseInt(target.substring(11, target.indexOf(")") - 1));
    valor === 0 ? (valor = quantidade * -100) : (valor = valor + 100);

    elemento.style.transform = `translateX(${valor}%)`;
  };

  return (
    <div className={styles.projeto}>
      <h2 className={styles.projeto__titulo}>Instagram</h2>
      <div
        onClick={toLeft}
        className={`${styles.projeto__arrow} ${styles.projeto__left}`}
      >
        &#10094;
      </div>
      <div style={{ transform: "translateX(0%)" }} className={styles.slider}>
        <a
          className={styles.projeto__item}
          href="https://www.instagram.com/seushabitos"
          rel="noopener"
          target="_blank"
        >
          <Image
            cloudName="bobarros"
            publicId="portfolio/instagram/pdfumzjhzhxglk1yqbhq"
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
          href="https://www.instagram.com/seushabitos"
          rel="noopener"
          target="_blank"
        >
          <Image
            cloudName="bobarros"
            publicId="portfolio/instagram/hvtgyphr8dzjfk6sxbu7"
            alt="Imagem do portfolio na versao mobile"
            dpr="auto"
            secure="true"
            height="220"
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

export default Instagram;
