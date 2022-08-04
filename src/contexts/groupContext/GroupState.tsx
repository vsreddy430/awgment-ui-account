import React, { useReducer } from 'react';
import { UPDATE_GROUP_TABLE, TABLE_INITIAL_STATE } from '../../constants/common';
import GroupContext from './group-context';
import groupReducer from './group-reducer';

const GroupState = ({ children }) => {
    const [groupState, dispatch] = useReducer(groupReducer, TABLE_INITIAL_STATE);

    const updateGroupTableData = (groupData) => {
        dispatch({ type: UPDATE_GROUP_TABLE, group: groupData });
    };

    return (
        <GroupContext.Provider value={{ groupTableData: groupState, updateGroupTableData }}>
            {children}
        </GroupContext.Provider>
    );
};

export default GroupState;
