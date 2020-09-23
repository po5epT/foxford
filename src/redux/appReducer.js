import {CHECK_USER, CHECK_USERS, FETCH_USERS, HIDE_LOADER, SHOW_LOADER} from './types';

const initialState = {
    users: [],
    loading: false,
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
            const checkedAll = state.users.every(user => user.checked);
            const users = state.users.map(user => {
                user.checked = !checkedAll;

                return user;
            });
            return {...state, users: [...users]};
        }

        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        default:
            return state;
    }
};