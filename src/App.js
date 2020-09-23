import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestUsers} from './redux/actions';
import UsersList from '@components/UsersList';
import Loader from '@components/Loader';

export default function App () {
    const {users, loading} = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUsers());
    }, []);

    return (
        <div className="container">
            <h1>Foxford</h1>
            {loading
                ? <Loader />
                : <>
                    <UsersList users={users} />
                    <p>Users: {users.filter(user => user.checked).map(user => user.firstName).join(', ')}</p>
                </>
            }
        </div>
    );
}