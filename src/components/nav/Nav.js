import styles from "components/nav/Nav.module.scss";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/router";
import Link from "next/link";

const moveUp = () => {
  const d = document;
  d.getElementsByClassName(styles.movelNav)[0].classList.toggle(styles.moveUp);
  d.getElementById("navButton").classList.toggle(styles.movelNav__animated);
};

const Nav = () => {
  const handlers = useSwipeable({
    onSwipedDown: () => {
      moveUp();
    },
    delta: 20,
    preventDefaultTouchmoveEvent: false,
    trackTouch: true,
  });

  return (
    <>
      <nav className={styles.navBar}>
        <ul className={styles.links}>
          <li>
            <Link href="/en">
              <a
                className={
                  useRouter().pathname === "/en" ? styles.navActive : ""
                }
              >
                Home
              </a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/skills">
              <a
                className={
                  useRouter().pathname === "/skills" ? styles.navActive : ""
                }
              >
                Skills
              </a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/portifolio">
              <a
                className={
                  useRouter().pathname === "/port" ? styles.navActive : ""
                }
              >
                Porfolio
              </a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/contact">
              <a
                className={
                  useRouter().pathname === "/contact" ? styles.navActive : ""
                }
              >
                Contact
              </a>
            </Link>{" "}
          </li>
        </ul>
      </nav>
      <div
        {...handlers}
        className={styles.movelNav}
        style={{ touchAction: "pan-x" }}
      >
        <div className={styles.movelNav__sessoes}>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/talvezobruno"
            className={styles.movelNav__sessao}
          >
            <svg viewBox="0 0 511 511.9" xmlns="http://www.w3.org/2000/svg">
              <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" />
              <path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" />
              <path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" />
            </svg>
          </a>
          <div
            id="navButton"
            onClick={moveUp}
            className={styles.movelNav__sessao}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a
            href="mailto:brunobarros@ideias.dev"
            className={styles.movelNav__sessao}
          >
            <svg
              enableBackground="new 0 0 479.058 479.058"
              viewBox="0 0 479.058 479.058"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
            </svg>
          </a>
        </div>
        <div className={styles.menuMovel}>
          <div onClick={moveUp} className={styles.item}>
            <Link href="/en">
              <a className={styles.link}>Home</a>
            </Link>
          </div>
          <div onClick={moveUp} className={styles.item}>
            <Link href="/skills">
              <a className={styles.link}>Skills</a>
            </Link>
          </div>
          <div onClick={moveUp} className={styles.item}>
            <Link href="/portfolio">
              <a className={styles.link}>Portfolio</a>
            </Link>
          </div>
          <div onClick={moveUp} className={styles.item}>
            <Link href="/contact">
              <a className={styles.link}>Contact</a>
            </Link>
          </div>
        </div>
        <a href="/en" className={styles.logoMovel}>
          <svg
            className="nav-bar__svg"
            id="Camada_1"
            data-name="Camada 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>Bob</title>
            <rect width={512} height={512} style={{ fill: "transparent" }} />
            <path d="M245.24,258.6l-78.35,67.07,78.35,74.09,78.36-74.09ZM181.84,326l63.41-54.28L308.65,326l-63.41,60Z" />
            <polygon
              points="212.54 286.59 174.7 254.81 266.97 177.3 132.25
  64.14 132.25 290.46 132.25 445.48 217.69 373.71 166.89 325.67 212.54 286.59"
            />
            <polygon
              points="379.75 272.55 301.4 205.47 301.4
  306.66 323.59 325.66 379.75 272.55"
            />
            <polygon points="301.4 346.67 301.4 447.87 379.75 373.77 323.58 325.69 301.4 346.67" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Nav;
