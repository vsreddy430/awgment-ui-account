import React, { useReducer } from 'react';
import { UPDATE_MFE_DATA, MFE_INITIAL_STATE } from '../../constants/common';
import MfeDataContext from './mfeData-context';
import mfeDataReducer from './mfeData-reducer';

const MfeDataState = ({ children }) => {
    const [mfeDataState, dispatch] = useReducer(mfeDataReducer, MFE_INITIAL_STATE);

    const updateMfeData = (mfeDataData) => {
        dispatch({ type: UPDATE_MFE_DATA, mfeData: mfeDataData });
    };

    return (
        <MfeDataContext.Provider value={{ mfeData: mfeDataState, updateMfeData }}>{children}</MfeDataContext.Provider>
    );
};

export default MfeDataState;
