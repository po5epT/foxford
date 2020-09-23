import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {checkUser, checkUsers, fetchUsers} from './redux/actions';

export default function App () {
    const users = useSelector(state => state.app.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const checkedAll = users.every(user => user.checked);

    const toggleUser = id => {
        dispatch(checkUser(id));
    };

    const toggleUsers = () => {
        dispatch(checkUsers());
    };

    return (
        <div>
            <h1>Foxford</h1>
            <input type="checkbox" id="all" onChange={toggleUsers} checked={checkedAll} />
            <label htmlFor="all">Отметить всех</label>
            <ul>
                {users.map(user => (
                    <li key={user.id} className={user.checked ? 'checked' : ''}>
                        <input checked={user.checked} type="checkbox" id={user.id} name={user.id} onChange={toggleUser.bind(null, user.id)} />
                        <label htmlFor={user.id}>{user.firstName} {user.lastName} {user.age}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}