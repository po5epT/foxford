import React from 'react';
import UserRow from './UserRow';
import {checkUsers} from '../redux/actions';
import {useDispatch} from 'react-redux';

const UsersList = ({users}) => {
    const dispatch = useDispatch();
    const allChecked = !!users.length && users.every(user => user.checked);

    return (
        <div className="table">
            <div className="table__head">
                <div className="table__row">
                    <div className="table__cell">
                        <input type="checkbox" id="all" onChange={() => dispatch(checkUsers())} checked={allChecked} />
                        <label htmlFor="all">Check all</label>
                    </div>
                    <div className="table__cell table__cell--user">First name</div>
                    <div className="table__cell table__cell--user">Last name</div>
                    <div className="table__cell table__cell--user">Age</div>
                </div>
            </div>
            <div className="table__body">
                {users.map(user => (
                    <UserRow key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UsersList;