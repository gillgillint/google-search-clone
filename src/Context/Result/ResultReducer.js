const resultReducer = (state, action) => {
  switch (action.type) {
    case 'GET_RESULT':
      return {
        ...state,
        result: action.payload,
        isLoading: false,
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default resultReducer;
