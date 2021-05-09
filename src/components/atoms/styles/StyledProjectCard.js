import styled from 'styled-components';

import { animationOffset } from '../../../helpers/elementsAnimationOffset';

export const StyledProjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  /* height: 200px; */
  /* width: 160px; */
  margin: 45px auto 30px;
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;

  /* border: 1px solid black; */
`;

export const StyledImageWrapper = styled.div`
  /* align-self: center; */
  font-size: 0;
  overflow: hidden;

  border: 1px solid black;
`;

export const StyledImg = styled.img`
  width: 400px;
  transition: 0.3s;

  /* border: 1px solid black; */

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledProjectName = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  /* margin-top: auto; */
  padding-top: 15px;

  /* border: 1px solid black; */
`;
