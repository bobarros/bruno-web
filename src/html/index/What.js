import Link from "next/link";
const Wait = () => {
  return (
    <section className="wait">
      <div className="blocoTexto">
        <h2 className="aberturaTexto">How can I help you?</h2>
        <p className="paragrafo">
          I spent years studying others' people behavior and my own. It was no
          accident that I started a{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://www.seushabitos.com.br  "
          >
            website about good habits
          </a>
          . It was the beginning of the process that led me to get here.
        </p>
        <p className="paragrafo">
          You want to go straight to the point and see what I'm able to build,
          right? Just click on the link or image below.
        </p>
      </div>
      <Link href="/portifolio">
        <a className="imagemWrap">         
         
        </a>
      </Link>

      <div className="verMais verMaisHabilidades">
        <Link href="/portifolio">My Portfolio</Link>
      </div>
    </section>
  );
};

export default Wait;
