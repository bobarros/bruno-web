/////////////////////////////////////////////////////////////// Local Component

import BrunoAvatar from "svg/BrunoAvatar"

///////////////////////////////////////////////////////////////////// Component

const IndexHeader = () => {
  return (
    <section className="header">
      <div className="textWrap">
        <p className="headerLinhaStrong">Hi, I'm Bruno Barros</p>

        <p className="headerLinhaLight topMargin">
          and I bring online interfaces to life.
        </p>
      </div>
      <div className="avatar">
        <BrunoAvatar />
      </div>
    </section>
  );
};

export default IndexHeader;
