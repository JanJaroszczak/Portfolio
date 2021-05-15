import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleTermsModal } from '../../../store/actions';

import {
  StyledFooter,
  StyledUl,
  StyledLi,
  StyledFooterButton,
  StyledLink,
} from './styles/StyledFooter';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <StyledUl>
        <StyledLi
          copyright
        >{`Copyright \u00A9 ${new Date().getFullYear()} Jan Jaroszczak`}</StyledLi>
        <StyledLi terms>
          <StyledFooterButton onClick={() => dispatch(toggleTermsModal(true))}>
            Terms and Conditions
          </StyledFooterButton>
        </StyledLi>
        <StyledLi github>
          <StyledLink
            href={'https://github.com/JanJaroszczak/Portfolio'}
            target="_blank"
          >
            <i className="fab fa-github"></i>
            This Portfolio GitHub
          </StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledFooter>
  );
};

export default Footer;
