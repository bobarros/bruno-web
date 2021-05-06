//////////////////////////////////////////////////////////////////////// Next

import Head from "next/head";

//////////////////////////////////////////////////////////// Local Components

import BaseLayout from "../src/layouts/BaseLayout";

/////////////////////////////////////////////////////////// Styled Components

import {
  Paragraph,
  SkillsBlock,
  Wait,
  PageName
} from '../src/sections/shared/StyledShared';

import {
  Partners,
  Partner,
  SubTitle,
} from '../src/sections/skills/StyledSkills';

/////////////////////////////////////////////////////////////////// Component

const AnchorPrep = ({ href, children }:{href:string, children:string}) => {
  return (
    <Partner target="_blank" rel="noopener" href={href}>
      <span>#</span>{" " + children}
    </Partner>
  );
};

/////////////////////////////////////////////////////////////////// Component

export default function Habilidades() {
  return (
    <BaseLayout>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="brunobarros.dev" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Bruno's Skills" />
        <meta property="og:title" content="Bruno's Skills" />
        <meta property="og:description" content="Bruno's Skills" />
        <meta property="og:url" content={`https://www.brunobarros.dev/skills`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image"
          itemProp="image"
          content={`/img/favicon.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="brunobarros.dev" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@brunobarros.dev" />
        <meta name="twitter:title" content="brunobarros.dev - skills" />
        <meta name="twitter:description" content="Bruno's Skills" />
        <meta name="twitter:image" content="/img/favicon.png" />

        <link
          rel="icon"
          type="image/png"
          href="/img/favicon.png"
          sizes="128x128"
        ></link>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredJSON }}
        />

        <title>Bruno's Skills</title>
      </Head>
      <Wait>
        <SkillsBlock>
          <PageName>Skills</PageName>
          <Paragraph>
            I like to learn, so that it's a lot I can do but I don't know
            everything. Here are the resources I use the most when it's time to
            build something!
          </Paragraph>
          <Paragraph>
            Obviously, I am not limited to them, but this is where I am most
            comfortable. So, if you want to invite me to learn something new to
            work together, please do.
          </Paragraph>
          <Paragraph>
            I also have a deep gratitude for so many people that it allows me to
            work with what I like and took the opportunity to mention as much of
            possible solutions/people. So, the list is long and can sometimes
            seem too obvious.
          </Paragraph>
          <Paragraph>
            Reach me out if you think you have a new tool that is much better
            than the one I'm currently using. It's always good to take a look at
            new options.
          </Paragraph>
        </SkillsBlock>
      </Wait>
      <Wait id="design">
        <SkillsBlock>
          <SubTitle>Design/Planning</SubTitle>
          <Paragraph>
            Here it goes the group that helps me bring a project to life.
            Whether before start developing or late after.
          </Paragraph>
          <Partners>
            <AnchorPrep href="https://caesium.app/">Caesium</AnchorPrep>
            <AnchorPrep href="https://www.canva.com/">Canva</AnchorPrep>
            <AnchorPrep href="https://coolors.co/">Coolors</AnchorPrep>
            <AnchorPrep href="https://www.figma.com/">Figma</AnchorPrep>
            <AnchorPrep href="https://www.gimp.org/">Gimp</AnchorPrep>
            <AnchorPrep href="https://www.adobe.com/br/products/illustrator.html">Illustrator</AnchorPrep>
            <AnchorPrep href="https://inshot.com/">InShot</AnchorPrep>
            <AnchorPrep href="https://www.adobe.com/br/products/photoshop.html">Photoshop</AnchorPrep>
            <AnchorPrep href="https://www.adobe.com/br/products/premiere.html">Premiere Pro</AnchorPrep>           
          </Partners>
        </SkillsBlock>
      </Wait>
      <Wait id="developer">
        <SkillsBlock>
          <SubTitle>Developing</SubTitle>
          <Paragraph>
            When building, several paths can be chosen. Here are the resources
            that help me on this journey.
          </Paragraph>
          <Partners>
            <AnchorPrep href="https://www.11ty.dev/">11ty</AnchorPrep>  
            <AnchorPrep href="https://babeljs.io/">Babel</AnchorPrep>  
            <AnchorPrep href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS</AnchorPrep>  
            <AnchorPrep href="https://www.docker.com/">Docker</AnchorPrep>  
            <AnchorPrep href="https://ghost.org/">Ghost</AnchorPrep>  
            <AnchorPrep href="https://git-scm.com/">Git</AnchorPrep>  
            <AnchorPrep href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">HTML</AnchorPrep>  
            <AnchorPrep href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">Javascript</AnchorPrep>  
            <AnchorPrep href="https://www.mongodb.com/">MongoDB</AnchorPrep>  
            <AnchorPrep href="https://nextjs.org/">Next.JS</AnchorPrep>  
            <AnchorPrep href="https://nginx.org/en/">Nginx</AnchorPrep>  
            <AnchorPrep href="https://nodejs.org/">NodeJS</AnchorPrep>  
            <AnchorPrep href="https://www.npmjs.com/">NPM</AnchorPrep>  
            <AnchorPrep href="https://pt-br.reactjs.org/">React</AnchorPrep>  
            <AnchorPrep href="https://regexr.com/">Regex</AnchorPrep>  
            <AnchorPrep href="https://sass-lang.com/documentation/syntax">SCSS</AnchorPrep>  
            <AnchorPrep href="https://strapi.io/">Strapi</AnchorPrep>  
            <AnchorPrep href="https://code.visualstudio.com/">VS Code</AnchorPrep>  
            <AnchorPrep href="https://webpack.js.org/">Webpack</AnchorPrep>  
            <AnchorPrep href="https://yarnpkg.com/">Yarn</AnchorPrep>             
          </Partners>
        </SkillsBlock>
      </Wait>
      <Wait id="services">
        <SkillsBlock>
          <SubTitle>Host/Services</SubTitle>
          <Paragraph>
            When it comes to providing services, you need speed, security and
            availability.
          </Paragraph>
          <Partners>
            <AnchorPrep href="https://aws.amazon.com/pt/">Amazon AWS</AnchorPrep>
            <AnchorPrep href="https://azure.microsoft.com/pt-br/">Azure</AnchorPrep>
            <AnchorPrep href="https://cloudinary.com/">Cloudinary</AnchorPrep>
            <AnchorPrep href="https://www.digitalocean.com/">Digital Ocean</AnchorPrep>
            <AnchorPrep href="https://cloud.google.com/">Google Cloud</AnchorPrep>
            <AnchorPrep href="https://cloud.ibm.com/">IBM Cloud</AnchorPrep>
            <AnchorPrep href="https://www.heroku.com/">Heroku</AnchorPrep>
            <AnchorPrep href="https://www.netlify.com/">Netlify</AnchorPrep>
            <AnchorPrep href="https://umbler.com/">Umbler</AnchorPrep>
            <AnchorPrep href="https://vercel.com/">Vercel</AnchorPrep>            
          </Partners>
        </SkillsBlock>
      </Wait>
      <Wait id="evaluation">
        <SkillsBlock>
          <SubTitle>Evaluation and Testing</SubTitle>
          <Paragraph>
            Testing and evaluating quality is part of the process. Here I
            present some tools that help me plan, especially when I'm talking
            about content and SEO strategies.
          </Paragraph>
          <Partners>
            <AnchorPrep href="https://analytics.google.com/analytics/web/">Google Analytics</AnchorPrep>
            <AnchorPrep href="https://developers.google.com/web/tools/lighthouse?hl=pt_br">Google Lighthouse</AnchorPrep>
            <AnchorPrep href="https://gtmetrix.com/">GTmetrix</AnchorPrep>
            <AnchorPrep href="https://tools.pingdom.com/">Pingdom Tools</AnchorPrep>
            <AnchorPrep href="https://www.webpagetest.org/">WebPageTest</AnchorPrep>
            <AnchorPrep href="https://similarweb.com/">SimilarWeb</AnchorPrep>
            <AnchorPrep href="https://pt.semrush.com/">SEMrush</AnchorPrep>
          </Partners>
        </SkillsBlock>
      </Wait>
      <Wait id="mentioned">
        <SkillsBlock>
          <SubTitle>Worth mentioning</SubTitle>
          <Paragraph>
            Resources that have helped me a lot to get here or even help me in
            my routine. I gathered not only tools, but resources that I use to
            learn something new or run a project.
          </Paragraph>
          <Partners>
            <AnchorPrep href="https://www.bulkrenameutility.co.uk/Download.php">Bulk and Rename</AnchorPrep>
            <AnchorPrep href="https://cssgradient.io/">Cssgradient</AnchorPrep>
            <AnchorPrep href="https://www.cssdesignawards.com/">Cssdesignawards</AnchorPrep>
            <AnchorPrep href="https://css-tricks.com/">CSS Tricks</AnchorPrep>
            <AnchorPrep href="https://dev.to/">Dev Community</AnchorPrep>
            <AnchorPrep href="https://www.dropbox.com/">DropBox</AnchorPrep>
            <AnchorPrep href="https://www.flaticon.com/">Flaticon</AnchorPrep>
            <AnchorPrep href="https://freefrontend.com/">Free Frontend</AnchorPrep>
            <AnchorPrep href="https://www.freepik.com/">Freepik</AnchorPrep>
            <AnchorPrep href="https://htmltojsx.happykit.dev/">HTML to JSX</AnchorPrep>
            <AnchorPrep href="https://www.microsoft.com/pt-br/microsoft-365/onedrive/online-cloud-storage">OneDrive</AnchorPrep>
            <AnchorPrep href="https://www.pexels.com/">Pexels</AnchorPrep>
            <AnchorPrep href="https://pixabay.com/">Pixabay</AnchorPrep>
            <AnchorPrep href="https://squoosh.app/">Squoosh</AnchorPrep>
            <AnchorPrep href="https://stackoverflow.com/">Stackoverflow</AnchorPrep>
            <AnchorPrep href="https://www.udemy.com/">Udemy</AnchorPrep>
            <AnchorPrep href="https://unsplash.com/">Unsplash</AnchorPrep>           
          </Partners>
        </SkillsBlock>
      </Wait>
      <Wait id="thanks">
        <SkillsBlock>
          <SubTitle>Thanks and Inspirations</SubTitle>
          <Paragraph>
            I would like to mention everyone, but I will give a space to at
            least the most important that came to my mind. People who inspired
            me, teachers of courses and resources I use to learn something new
            or work in a project.
          </Paragraph>
          <Partners>
            <AnchorPrep href="https://www.andreaverlicchi.eu/">Andrea Verlicchi's Blog</AnchorPrep>  
            <AnchorPrep href="https://mead.io/">Andrew Mead</AnchorPrep>  
            <AnchorPrep href="https://brittanychiang.com/">Brittany Chiang</AnchorPrep>  
            <AnchorPrep href="https://www.cassie.codes/">Cassie Evans's Blog</AnchorPrep>  
            <AnchorPrep href="https://chriswray.dev/">Chris Wray</AnchorPrep>  
            <AnchorPrep href="https://www.udemy.com/user/coltsteele/">Colt Steele</AnchorPrep>  
            <AnchorPrep href="https://www.webcoredesign.co.uk/about">Daniel Evans</AnchorPrep>  
            <AnchorPrep href="https://flaviocopes.com/">Flavio Copes</AnchorPrep>  
            <AnchorPrep href="https://gregives.co.uk/">Greg Ives</AnchorPrep>  
            <AnchorPrep href="https://toddl.dev/">Home of Todd</AnchorPrep>  
            <AnchorPrep href="https://www.jason.af">Jason Lengstorf</AnchorPrep>  
            <AnchorPrep href="https://givegoodux.com/">Joe Natoli</AnchorPrep>  
            <AnchorPrep href="https://www.joshwcomeau.com/">Josh W Comeau</AnchorPrep>  
            <AnchorPrep href="https://www.juliacodes.com/">Julia Johnson</AnchorPrep>  
            <AnchorPrep href="https://mxb.dev/">Max Böck</AnchorPrep>  
            <AnchorPrep href="https://vooban.com/">Vooban</AnchorPrep>  
            <AnchorPrep href="https://bluestag.co.uk/">Bluestag</AnchorPrep>  
          </Partners>
        </SkillsBlock>
      </Wait>
    </BaseLayout>
  );
}

const structuredJSON = `
  {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "mainEntityOfPage":{
    "@type":"WebPage",
    "@id":"https://www.brunobarros.dev/skills"
    },
    "image": {
    "@type": "ImageObject",
    "url": "https://www.brunobarros.dev/img/favicon.png",
    "height": 128,
    "width": 128},
    "author": {
    "@type": "Organization",
    "name": "brunobarros.dev"
    },
    "publisher": {
    "@type": "Organization",
    "name": "brunobarros.dev",
    "logo": {
    "@type": "ImageObject",
    "url": "https://www.brunobarros.dev/img/favicon.png",
    "width": 128,
    "height": 128
    }
    },
    "headline": "brunobarros.dev - skills",
    "description": "Bruno's Skills"
  }
`;
