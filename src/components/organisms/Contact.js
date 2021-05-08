import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Formik, Form, ErrorMessage } from 'formik';

import Alert from '../atoms/Alert';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import useOnScreen from '../../utils/useOnScreen';

import {
  StyledCommonPageWrapper,
  StyledSectionTitle,
} from './styles/StyledCommonElements';
import {
  StyledSectionWrapper,
  StyledContactHeading,
  StyledForm,
  StyledTextInputsWrapper,
  StyledTextareaWrapper,
  StyledErrorWrapper,
  StyledTextAreaLabel,
  StyledTextarea,
  StyledTermsWrapper,
  StyledCheckboxLabel,
} from './styles/StyledContact';
import { StyledTermsButton } from './styles/StyledTermsButton';

const contactValidationSchema = Yup.object().shape({
  userName: Yup.string().required('Please enter your name.'),
  userEmail: Yup.string()
    .email('Entered email is invalid')
    .required('Please enter your email.'),
  userMessage: Yup.string().required('Please enter a message.'),
  acceptTerms: Yup.bool().oneOf(
    [true],
    'You need to accept Terms and Conditions.'
  ),
});

const Contact = () => {
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);

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

  return (
    <StyledCommonPageWrapper>
      <StyledSectionWrapper>
        <StyledSectionTitle
        // ref={titleRef}
        // visible={isTitleVisible}
        >
          Contact.
        </StyledSectionTitle>
        <StyledContactHeading>
          Feel free to send me a message via the contact form below:
        </StyledContactHeading>
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
              <StyledForm>
                <StyledTextInputsWrapper>
                  <Input
                    type="text"
                    name="userName"
                    label="*Name:"
                    placeholder="Enter your name"
                    value={values.userName}
                    onChangeHandler={handleChange}
                  />
                  <Input
                    type="email"
                    name="userEmail"
                    label="*Email:"
                    placeholder="Enter your email"
                    value={values.userEmail}
                    onChangeHandler={handleChange}
                  />
                </StyledTextInputsWrapper>
                <StyledTextareaWrapper>
                  <StyledTextAreaLabel htmlFor="userMessage">
                    *Message:
                  </StyledTextAreaLabel>
                  <StyledTextarea
                    id="userMessage"
                    type="text"
                    name="userMessage"
                    placeholder="Enter your message"
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
                      // onClick={() => dispatch(isTermsModalOpen(true))}
                    >
                      Accept Terms and Conditions
                    </StyledTermsButton>
                  </StyledCheckboxLabel>
                  <StyledErrorWrapper>
                    <ErrorMessage name="acceptTerms" />
                  </StyledErrorWrapper>
                </StyledTermsWrapper>
                <Button type="submit" label="Send message" />
                <Alert
                  message="Message sent!"
                  visible={isSuccessAlert}
                  // variant={alertVariants.accountDataChange}
                />
              </StyledForm>
            </Form>
          )}
        </Formik>
      </StyledSectionWrapper>
    </StyledCommonPageWrapper>
  );
};

export default Contact;
