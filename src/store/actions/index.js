import { actionsTypes } from './actionsTypes';

export const toggleTermsModal = (isOpen) => ({
  type: actionsTypes.TOGGLE_TERMS_MODAL,
  payload: isOpen,
});

export const toggleIsHomePageOpen = (isOpen) => ({
  type: actionsTypes.TOGGLE_IS_HOME_PAGE_OPEN,
  payload: isOpen,
});
