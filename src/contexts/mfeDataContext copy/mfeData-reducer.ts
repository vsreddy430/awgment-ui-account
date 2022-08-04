import { UPDATE_MFE_DATA } from '../../constants/common';

const mfeDataReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_MFE_DATA:
            return { ...state, ...action.mfeData };
        default:
            return state;
    }
};

export default mfeDataReducer;
