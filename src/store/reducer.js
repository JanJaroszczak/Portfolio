import { actionsTypes } from './actions/actionsTypes';

const intitialState = {
  isTermsModalOpen: false,
  isHomePageOpen: false,
};

const reducer = (state = intitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.TOGGLE_TERMS_MODAL:
      return {
        ...state,
        isTermsModalOpen: payload,
      };

    case actionsTypes.TOGGLE_IS_HOME_PAGE_OPEN:
      return {
        ...state,
        isHomePageOpen: payload,
      };

    default:
      return state;
  }
};

export default reducer;
