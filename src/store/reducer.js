import { actionsTypes } from './actions/actionsTypes';

const intitialState = {
  isTermsModalOpen: false,
};

const reducer = (state = intitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.TOGGLE_TERMS_MODAL:
      return {
        ...state,
        isTermsModalOpen: payload,
      };
    default:
      return state;
  }
};

export default reducer;
