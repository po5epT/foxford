import {CHECK_USER, CHECK_USERS, HIDE_LOADER, REQUEST_USERS, SHOW_LOADER} from './types';

export const requestUsers = () => ({type: REQUEST_USERS});
export const checkUser = id => ({
    type: CHECK_USER,
    payload: id,
});
export const checkUsers = () => ({type: CHECK_USERS});
export const showLoader = () => ({type: SHOW_LOADER});
export const hideLoader = () => ({type: HIDE_LOADER});