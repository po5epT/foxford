import React from 'react';
import {useDispatch} from 'react-redux';
import {checkUser} from '../redux/actions';

const UserRow = ({user}) => {
    const dispatch = useDispatch();
    const rowClasses = ['table__row'];

    if(user.checked)
        rowClasses.push('table__row--checked');

    return (
        <div className={rowClasses.join(' ')}>
            <div className="table__cell">
                <input checked={user.checked} type="checkbox" id={user.id} name={user.id} onChange={() => dispatch(checkUser(user.id))} />
                <label htmlFor={user.id}>check</label>
            </div>
            <div className="table__cell table__cell--user">{user.firstName}</div>
            <div className="table__cell table__cell--user">{user.lastName}</div>
            <div className="table__cell table__cell--user">{user.age}</div>
        </div>
    );
};

export default UserRow;