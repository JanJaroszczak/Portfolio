import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTermsModal } from '../../store/actions';

import {
  StyledTermsWrapper,
  StyledTermsHeading,
  StyledParagraph,
} from './styles/StyledTermsModal';

const useStyles = makeStyles((theme) => ({
  modal: {
    fontFamily: "'Prompt', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 0, 3),
    outline: 'none',
    textAlign: 'center',
    width: '70vw',
    maxWidth: '700px',
    overflow: 'auto',
    '@media (max-width: 600px)': {
      width: '85vw',
    },
  },
}));

const TermsModal = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const isModalOpen = useSelector(({ isTermsModalOpen }) => isTermsModalOpen);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isModalOpen}
      onClose={() => dispatch(toggleTermsModal(false))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalOpen}>
        <div className={classes.paper}>
          <StyledTermsWrapper>
            <StyledTermsHeading>Terms and Conditions</StyledTermsHeading>
            <StyledParagraph>
              Last updated: May 11, 2021 {<br />}
              {<br />}
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You. {<br />}
              {<br />}We use Your Personal data to provide and improve the
              Service. By using the Service, You agree to the collection and use
              of information in accordance with this Privacy Policy. This
              Privacy Policy has been created with the help of the Privacy
              Policy Generator.
            </StyledParagraph>
          </StyledTermsWrapper>
        </div>
      </Fade>
    </Modal>
  );
};

export default TermsModal;
