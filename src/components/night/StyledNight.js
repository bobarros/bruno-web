import styled from 'styled-components';

export const Icons = styled.div`
  position: absolute;
  right: 9rem;
  top: 2.5rem;
  cursor: pointer;
  opacity: 0.7;

  &:hover{
    opacity: 1;
  }

  svg {
    height: 3rem;
    width: 3rem;
    transform-origin: center;
  }
`;