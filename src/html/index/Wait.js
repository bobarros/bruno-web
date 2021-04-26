import Link from "next/link";

const Wait = ({ artigos }) => {
  return (
    <section className="wait">
      <div className="blocoTexto">
        <h2 className="aberturaTexto">Gostando do que vê? Calma!</h2>
        <p className="paragrafo">
          Passei uma boa primeira impressão? Porém, vamos com calma. Antes de
          acreditar que podemos formar uma parceria em qualquer trabalho, é
          melhor conhecer um pouco mais como toco as coisas.
        </p>
        <p className="paragrafo">
          Não estou falando sobre conhecer minhas soluções. É essencial entender
          o que acredito fazer parte de um bom projeto.
        </p>
        <p className="paragrafo">
          Reparou que utilizei a palavra parceria logo no começo deste texto? Já
          mostra um pouco de como encaro um trabalho.
        </p>
        <p className="paragrafo">
          Assim, seguem alguns textos que vão certamente te interessar, caso
          esteja considerando que eu possa te ajudar.
        </p>
        <p className="paragrafo">
          Acredite, quanto mais você ler, mais irá evitar entrar em um furada.
          Seja contratando um serviço meu ou de qualquer outra agência.
          Considere um presente que não vai te custar nada ;)
        </p>
      </div>
      <div className="posts">
        {artigos.map((artigo) => {
          const imagemPrincipal = artigo.conteudo.find((conteudo) => {
            return conteudo.__component === "conteudo.image";
          });
          return (
            <Link key={artigo.id} href={`/${artigo.url}`}>
              <a className="link">
                <figure className="figura">
                  <img
                    alt={imagemPrincipal.image.alt}
                    src={`//bobarros.sirv.com/artigos/${artigo.url}-1.jpg?w=500&h=700&scale.option=fill&format=optimal`}
                  />
                  <figcaption className="legenda">
                    <h3 className="titulo">
                      <span className="interno">{artigo.titulo}</span>
                    </h3>
                    <p className="paragrafo">{artigo.descricao}</p>
                  </figcaption>
                </figure>
              </a>
            </Link>
          );
        })}
      </div>
      <div className="verMais verMaisTextos">
        <Link href="/artigos">Mais textos</Link>
      </div>
    </section>
  );
};

export default Wait;
