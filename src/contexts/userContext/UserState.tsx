import React, { useReducer } from 'react';
import { UPDATE_USER_TABLE, TABLE_INITIAL_STATE } from '../../constants/common';
import UserContext from './user-context';
import userReducer from './user-reducer';

const UserState = ({ children }) => {
    const [userState, dispatch] = useReducer(userReducer, TABLE_INITIAL_STATE);

    const updateUserTableData = (userData) => {
        dispatch({ type: UPDATE_USER_TABLE, user: userData });
    };

    return (
        <UserContext.Provider value={{ userTableData: userState, updateUserTableData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserState;
