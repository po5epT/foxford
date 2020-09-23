import {CHECK_USER, CHECK_USERS, FETCH_USERS} from './types';

export const fetchUsers = () => {
    return async dispatch => {
        try {
            const responseRaw = await fetch('http://localhost:4000/users');
            const users = await responseRaw.json();

            dispatch({
                type: FETCH_USERS,
                payload: users,
            });

        } catch(e) {
            console.warn(e.message);
        }
    }
};

export const checkUser = id => {
    return {
        type: CHECK_USER,
        payload: id,
    }
};

export const checkUsers = () => {
    return {
        type: CHECK_USERS
    }
};