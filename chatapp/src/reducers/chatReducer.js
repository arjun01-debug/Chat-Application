const chatReducer = (state, action) => {
    switch (action.type) {
      case "SET_CONTACTS":
        return { ...state, contacts: action.payload };
      case "SET_ACTIVE_CONTACT_ID":
        return { ...state, activeContactId: action.payload };
      case "SET_MESSAGES":
        return { ...state, messages: action.payload };
      case "SET_INITIAL_STATE":
        return { ...state, initialDataLoaded : true};
      default:
        return state;
    }
  };
  
  export default chatReducer;  