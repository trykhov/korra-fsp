import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDropdown = props => (
    <div id="profile-dropdown" className="disappear modal">
        <ul>
            <li>
                <Link to={`/user/${props.currentUser.id}`} id="profile-btn">
                    <span>{props.currentUser.username}</span>
                    <span>&#10095;</span>
                </Link>
            </li>
            <li onClick={props.signOutUser}>Logout</li>
        </ul>
    </div>
)

export default ProfileDropdown;