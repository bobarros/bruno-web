///////////////////////////////////////////////////////////////////////// Next

import Link from "next/link";

///////////////////////////////////////////////////////////// Local Components

import LogoSVG from "svg/LogoSVG";
import GitSVG from "svg/GitSVG";
import EmailSVG from "svg/EmailSVG";

///////////////////////////////////////////////////////////// Styled Components

import {
  Wrap,
  Text,
  Credits,
  Links,
  Logo,
  SocialIcons
} from 'components/footer/StyledFooter';

/////////////////////////////////////////////////////////////// Prep Components

const CustomLink = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  )
}

//////////////////////////////////////////////////////////////// Main Component

const Footer = () => {
  return (
    <Wrap id="footer" className="nao-imprimir">
      <Link href="/home">
        <Logo href="/home">
          logo bob<LogoSVG />
        </Logo>
      </Link>
      <Links>
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/skills">Skills</CustomLink>
        <CustomLink href="/portfolio">Portfolio</CustomLink>
        <CustomLink href="/contact">Contact</CustomLink>
      </Links>
      <Text>
        <Credits>
          <p>By <a target="_blank" rel="noopener" href="https://brunobarros.dev">Bruno Barros</a>, with ❤️ and a lot of 💪</p>
          <p>2019-2021 brunobarros.dev</p>
          <p>Hosted by <a target="_blank" rel="noopener" href="https://vercel.com/">Vercel</a></p>
          <p><a target="_blank" rel="noopener" href="https://nextjs.org/">NEXT.<span>JS</span></a></p>
        </Credits>
      </Text>
      <SocialIcons>
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/bobarros"
        >
          bruno github profile<GitSVG />
        </a>
        <a href="mailto:brunobarros@ideias.dev">
          bruno email address<EmailSVG />
        </a>

      </SocialIcons>
    </Wrap>
  );
};

export default Footer;
