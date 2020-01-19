const SUBMIT = 'userSubmit';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};

export const load = user => ({ type: SUBMIT, user });

export default reducer;
