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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              optio eaque eum rerum cumque non. Magnam ut necessitatibus itaque
              doloremque, sint recusandae velit, modi excepturi repellat tenetur
              consectetur fugiat iure ipsa similique assumenda iusto ex neque,
              beatae natus ea aliquid ullam praesentium cumque? Repudiandae
              explicabo eum consequatur qui deleniti tempora porro magnam error?
              Explicabo quidem recusandae vitae at accusantium atque earum,
              veritatis voluptatum obcaecati fuga sunt natus et deserunt,
              doloremque temporibus sit aut nemo ut ipsum enim est quisquam, nam
              architecto. Saepe pariatur omnis fugit similique aliquid fugiat
              facilis neque commodi minus earum quibusdam amet dolor,
              laudantium, eligendi dicta tempore mollitia assumenda ut quam!
              Nobis quia minima doloribus maiores odio facilis totam iusto
              consequuntur perferendis quisquam esse deleniti, itaque vero,
              explicabo eaque beatae, distinctio hic? Quos vero neque, facilis
              totam optio voluptate dolore magnam asperiores minus, excepturi
              saepe porro dolorum repudiandae, doloribus impedit. Illo mollitia
              dolorem accusamus ipsum perspiciatis! Ex a suscipit rerum,
              tempore, omnis aspernatur, inventore animi quis magni pariatur
              provident quasi exercitationem maiores dignissimos quo. Vero nulla
              cumque debitis temporibus suscipit perspiciatis quaerat quasi
              velit quos, reprehenderit, officia dicta maiores hic architecto,
              placeat itaque! Unde at exercitationem voluptatem inventore fugit
              assumenda adipisci, odit molestiae illum eaque dolores numquam
              laborum provident nihil quaerat quisquam nemo quia accusantium
              nostrum praesentium? Consectetur totam ipsam velit natus nesciunt
              nemo fugit nihil architecto itaque aperiam facilis provident ad
              animi, sint laudantium quam quibusdam quasi harum sapiente debitis
              veniam! Quo vitae molestiae dolor nam. Eos ipsam accusantium nemo
              voluptates ipsum quaerat, harum labore at iusto, hic praesentium
              unde. Aperiam dolor dolores consectetur in atque nobis. Laudantium
              quae doloremque iusto rem sed ratione veritatis, esse quisquam
              labore minima maxime reprehenderit blanditiis corporis nesciunt?
              Qui est, sunt ipsam, corporis eveniet voluptas ullam eligendi
              similique omnis minima provident iure obcaecati dolore cumque
              saepe praesentium commodi tempore nobis.
            </StyledParagraph>
          </StyledTermsWrapper>
        </div>
      </Fade>
    </Modal>
  );
};

export default TermsModal;
