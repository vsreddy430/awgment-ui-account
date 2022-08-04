import { UPDATE_USER_TABLE } from '../../constants/common';

const userReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER_TABLE:
            return { ...state, ...action.user };
        default:
            return state;
    }
};

export default userReducer;
