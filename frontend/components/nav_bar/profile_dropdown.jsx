import React from 'react';

const ProfileDropdown = props => (
    <div id="profile-dropdown" className="disappear modal">
        <ul>
            <li>
                <div>
                    <span>{props.currentUser.username}</span>
                    <span>&#10095;</span>
                </div>
            </li>
            <li onClick={props.signOutUser}>Logout</li>
        </ul>
    </div>
)

export default ProfileDropdown;