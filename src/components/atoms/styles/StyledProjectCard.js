import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { animationOffset } from '../../../helpers/elementsCSSVariables';

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
  position: relative;
  font-size: 0;
  overflow: hidden;

  border: 1px solid black;
`;

export const StyledDuringDevLabel = styled.div`
  position: absolute;
  height: 40px;
  width: 300px;
  top: 50px;
  right: -70px;
  transform: rotate(45deg);
  background-color: ${({ theme }) => theme.colors.moderateGray};

  color: white;
  font-size: 20px;
  line-height: 40px;
  /* vertical-align: 5px; */
  /* z-index: 100; */

  span {
    padding-left: 10px;
  }
`;

export const StyledImg = styled.img`
  width: 500px;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
