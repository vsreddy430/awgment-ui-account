import { UPDATE_GROUP_TABLE } from '../../constants/common';

const groupReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_GROUP_TABLE:
            return { ...state, ...action.group };
        default:
            return state;
    }
};

export default groupReducer;
