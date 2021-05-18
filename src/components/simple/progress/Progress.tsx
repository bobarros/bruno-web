import { Wrap, Internal, Bar } from "./ProgressStyled";

const Progress = () => {
  return (
    <Wrap>
      <p>0%</p>
      <Internal />
      <Bar id="progressBar" />
      <span>100%</span>
    </Wrap>
  );
};

export default Progress;
