import { ArrowAnim, Arrow, ArrowSliding } from "./StyledArrows";

const Arrows = () => {
  return (
    <ArrowAnim href="#" id="introArrows">
      <ArrowSliding>
        <Arrow>arrow</Arrow>
      </ArrowSliding>
      <ArrowSliding>
        <Arrow>arrow</Arrow>
      </ArrowSliding>
      <ArrowSliding>
        <Arrow>arrow</Arrow>
      </ArrowSliding>
    </ArrowAnim>
  );
};

export default Arrows;
