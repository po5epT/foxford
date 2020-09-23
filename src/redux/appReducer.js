import {CHECK_USER, CHECK_USERS, FETCH_USERS} from './types';

const initialState = {
    users: [],
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS:
            return {...state, users: action.payload};
        case CHECK_USER: {
            const users = state.users.map(user => {
                if(user.id === action.payload)
                    user.checked = !user.checked;

                return user;
            });
            return {...state, users: [...users]};
        }
        case CHECK_USERS: {
            const allChecked = state.users.some(user => user.checked);
            const users = state.users.map(user => {
                user.checked = hasChecked;

                return user;
            });
            return {...state, users: [...users]};
        }
        default:
            return state;
    }
};