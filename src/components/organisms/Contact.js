import React, { useState, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import Alert from '../atoms/Alert';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import useOnScreen from '../../utils/useOnScreen';

import { contactFormStrings } from './helpers/contactFormStrings';
import { toggleTermsModal } from '../../store/actions';

import {
  StyledCommonPageWrapper,
  StyledSectionTitle,
} from '../../globalStyles/StyledCommonElements';
import {
  StyledSectionWrapper,
  StyledContactHeading,
  StyledForm,
  StyledFormContentWrapper,
  StyledTextInputsWrapper,
  StyledTextareaWrapper,
  StyledErrorWrapper,
  StyledTextAreaLabel,
  StyledTextarea,
  StyledTermsWrapper,
  StyledCheckboxLabel,
  StyledSubSectionWrapper,
  StyledContactLink,
  StyledLi,
} from './styles/StyledContact';
import { StyledTermsButton } from './styles/StyledTermsButton';

const {
  nameRequired,
  invalidEmail,
  emailRequired,
  messageRequired,
  termsAcceptanceRequired,
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  textAreaLabel,
  textAreaPlaceholder,
  termsLabel,
  sendMessageButtonLabel,
  alertMessage,
  myEmail,
  myPhoneNumberLink,
  myPhoneNumberLabel,
  linkedInLink,
  gitHubLink,
} = contactFormStrings;

const contactValidationSchema = Yup.object().shape({
  userName: Yup.string().required(nameRequired),
  userEmail: Yup.string().email(invalidEmail).required(emailRequired),
  userMessage: Yup.string().required(messageRequired),
  acceptTerms: Yup.bool().oneOf([true], termsAcceptanceRequired),
});

const Contact = () => {
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubSection1Visible, setIsSubSection1Visible] = useState(false);
  const [isSubSection2Visible, setIsSubSection2Visible] = useState(false);

  const titleRef = useRef();
  const formRef = useRef();
  const subSection1Ref = useRef();
  const subSection2Ref = useRef();

  const isTitleOnScreen = useOnScreen(titleRef);
  const isFormOnScreen = useOnScreen(formRef);
  const isSubSection1OnScreen = useOnScreen(subSection1Ref);
  const isSubSection2OnScreen = useOnScreen(subSection2Ref);

  if (isTitleOnScreen) {
    if (!isTitleVisible) setIsTitleVisible(true);
  }

  if (isFormOnScreen) {
    if (!isFormVisible) setIsFormVisible(true);
  }

  if (isSubSection1OnScreen) {
    if (!isSubSection1Visible) setIsSubSection1Visible(true);
  }

  if (isSubSection2OnScreen) {
    if (!isSubSection2Visible) setIsSubSection2Visible(true);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (isSuccessAlert) {
      timer = setTimeout(() => {
        setIsSuccessAlert(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isSuccessAlert]);

  const is600px = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const renderSubSection = () => (
    <>
      <StyledSubSectionWrapper
        ref={subSection1Ref}
        visible={isSubSection1Visible}
      >
        <StyledContactHeading email>
          Or contact me directly:
        </StyledContactHeading>
        <StyledContactLink href={`mailto:${myEmail}`}>
          {myEmail}
        </StyledContactLink>
        {is600px ? <br /> : <span>/</span>}
        {is600px ? <span>/</span> : null}
        {is600px ? <br /> : null}

        <StyledContactLink href={`tel:${myPhoneNumberLink}`}>
          {myPhoneNumberLabel}
        </StyledContactLink>
      </StyledSubSectionWrapper>
      <StyledSubSectionWrapper
        ref={subSection2Ref}
        visible={isSubSection2Visible}
      >
        <StyledContactHeading social>
          You can also find me on:
        </StyledContactHeading>
        <ul>
          <StyledLi>
            <StyledContactLink href={gitHubLink} target="_blank" social>
              <i className="fab fa-github"></i>GitHub
            </StyledContactLink>
          </StyledLi>
          <StyledLi>
            <StyledContactLink href={linkedInLink} target="_blank" social>
              <i className="fab fa-linkedin"></i>LinkedIn
            </StyledContactLink>
          </StyledLi>
        </ul>
      </StyledSubSectionWrapper>
    </>
  );

  return (
    <StyledCommonPageWrapper>
      <a id="contact" className="scroll-target" />
      <StyledSectionWrapper>
        <StyledSectionTitle ref={titleRef} visible={isTitleVisible}>
          Contact.
        </StyledSectionTitle>
        <Formik
          initialValues={{
            userName: '',
            userEmail: '',
            userMessage: '',
            acceptTerms: false,
          }}
          validationSchema={contactValidationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);

            emailjs
              .send(
                'contact_service',
                'contact_form',
                values,
                process.env.REACT_APP_EMAILJS_USERID
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setIsSuccessAlert(true);
                },
                (error) => {
                  console.log(error.text);
                }
              );

            resetForm();
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <StyledForm ref={formRef} visible={isFormVisible}>
                <StyledContactHeading>
                  Feel free to send me a message via the form below:
                </StyledContactHeading>
                <StyledFormContentWrapper>
                  <StyledTextInputsWrapper>
                    <Input
                      type="text"
                      name="userName"
                      label={nameLabel}
                      placeholder={namePlaceholder}
                      value={values.userName}
                      onChangeHandler={handleChange}
                    />
                    <Input
                      type="email"
                      name="userEmail"
                      label={emailLabel}
                      placeholder={emailPlaceholder}
                      value={values.userEmail}
                      onChangeHandler={handleChange}
                    />
                  </StyledTextInputsWrapper>
                  <StyledTextareaWrapper>
                    <StyledTextAreaLabel htmlFor="userMessage">
                      {textAreaLabel}
                    </StyledTextAreaLabel>
                    <StyledTextarea
                      id="userMessage"
                      type="text"
                      name="userMessage"
                      placeholder={textAreaPlaceholder}
                      value={values.userMessage}
                      onChange={handleChange}
                    />
                    <StyledErrorWrapper textarea>
                      <ErrorMessage name="userMessage" />
                    </StyledErrorWrapper>
                  </StyledTextareaWrapper>
                  <StyledTermsWrapper>
                    <input
                      id="terms"
                      type="checkbox"
                      name="acceptTerms"
                      checked={values.acceptTerms}
                      onChange={handleChange}
                    />
                    <StyledCheckboxLabel>
                      <StyledTermsButton
                        type="button"
                        onClick={() => dispatch(toggleTermsModal(true))}
                      >
                        {termsLabel}
                      </StyledTermsButton>
                    </StyledCheckboxLabel>
                    <StyledErrorWrapper>
                      <ErrorMessage name="acceptTerms" />
                    </StyledErrorWrapper>
                  </StyledTermsWrapper>
                  <Button type="submit" label={sendMessageButtonLabel} />
                  <Alert
                    message={alertMessage}
                    visible={isSuccessAlert}
                    // variant={alertVariants.accountDataChange}
                  />
                </StyledFormContentWrapper>
              </StyledForm>
            </Form>
          )}
        </Formik>
        {renderSubSection()}
      </StyledSectionWrapper>
    </StyledCommonPageWrapper>
  );
};

export default Contact;
