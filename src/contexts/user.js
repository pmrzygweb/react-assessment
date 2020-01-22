import React, { useReducer } from "react";
const initialState = {
  username: 0
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "CHANGE_USERNAME": {
      return { ...state, username: payload };
    }
    case "CLEAR": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

const UserContext = React.createContext(initialState);

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

const withUserProvider = Component => props => (
  <UserProvider>
    <Component {...props} />
  </UserProvider>
);

export { UserContext, withUserProvider };
