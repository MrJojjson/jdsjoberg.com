export default (state = {}, action) => {
  switch (action.type) {
    case 'FIRST_ACTION':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
