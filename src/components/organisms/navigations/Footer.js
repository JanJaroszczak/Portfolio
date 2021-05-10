import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleTermsModal } from '../../../store/actions';

import {
  StyledFooter,
  StyledUl,
  StyledLi,
  StyledFooterButton,
} from './styles/StyledFooter';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <StyledUl>
        <StyledLi>{`Copyright \u00A9 ${new Date().getFullYear()} Jan Jaroszczak`}</StyledLi>
        <StyledLi>
          <StyledFooterButton onClick={() => dispatch(toggleTermsModal(true))}>
            Terms and Conditions
          </StyledFooterButton>
        </StyledLi>
      </StyledUl>
    </StyledFooter>
  );
};

export default Footer;
