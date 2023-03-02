import React, {createContext, useReducer} from 'react';
import users from '../data/User';

const initialState = {users};
const UsersConxtext = createContext({});

export const UsersProvider = props => {
  function reducer(state, action) {
    if (action.type === 'deleteUser') {
      const user = action.payload;
      return {
        //...state,
        users: state.users.filter(u => u.id !== user.id),
      };
    }
    return state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersConxtext.Provider
      value={{
        state: {
          users,
          dispatch,
        },
      }}>
      {props.children}
    </UsersConxtext.Provider>
  );
};

export default UsersConxtext;
