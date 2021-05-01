import styled from 'styled-components';

//////////////////////////////////

export const Wrap = styled.footer`
  background-color: var(--footer-background);
  box-shadow: 0 5px 20px 5px var(--shadow);
  padding-bottom: 10rem;
  display: block;
  transition: background-color 2s ease;
  font-family: 'JetBrains Mono';
  font-weight: 400;
`;


//////////////////////////////////

export const Text = styled.div`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8rem;
  width: 75%;
  margin: 0 auto;
  color: var(--color-font);
  font-weight: 300;

  @media only screen and (max-width: 500px) {
    width: 85%;
  }

`;


//////////////////////////////////

export const Credits = styled.div`
  font-style: italic;
  a,
  a:active,
  a:link {
    text-decoration: none;
    font-size: 1.3rem;
    color: var(--color-font);
    font-weight: bold;
    font-weight: 700;

    span {
      font-size: .8rem;
    }
  }
`;

//////////////////////////////////

export const Links = styled.ul`
    display: -moz-box;
    font-size: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    list-style: none;
    text-transform: uppercase;
    cursor: pointer;

    a,
    a:link,
    a:visited {
      text-decoration: none;
      color: inherit;
      padding: 2rem;
      color: var(--color-font);
      font-weight: 700;
      opacity: 1;
    }

    & li {
      padding: 2rem;
    }

    & li:hover {
      animation: menu_hover 250ms linear 0s 1 forwards;
    }

    @keyframes menu_hover {
      0% {
        transform: translateY(0);
        opacity: 1;
      }

      50% {
        transform: translateY(0.938rem);
        opacity: 0;
      }

      51% {
        transform: translateY(-0.938rem);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
`;

//////////////////////////////////

export const Logo = styled.a`
  
  text-align: center;
  padding: 5rem 0;
  display: block;
  font-size: 0;

  svg {
    box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    background-color: #fff;
  }
`;

export const SocialIcons = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;

  @media only screen and (max-width: 901px) {
    display: none;
  }

  a:last-child {
    margin-left: 4rem;
  }

  svg {
    width: 4rem;
    height: 4rem;
    fill: var(--color-font);
  }
`;




