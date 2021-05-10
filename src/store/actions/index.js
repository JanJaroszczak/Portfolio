import { actionsTypes } from './actionsTypes';

export const toggleTermsModal = (isOpen) => ({
  type: actionsTypes.TOGGLE_TERMS_MODAL,
  payload: isOpen,
});
