import React from 'react';


const ProfileDropdown = props => (
    <div id="profile-dropdown" className="disappear modal">
        {/* <section id="profile-info-container">
            <div>user profile picture</div>
            <div>
                <div>User</div>
            </div>
        </section>
        <section>
            <ul>
                <li>Messages</li>
                <li>Partners</li>
                <li>Create Ad</li>
                <li>Stats</li>
                <li>Your Content</li>
                <li>Drafts</li>
            </ul>
        </section> */}
        <section id="logout-setting">
            <ul>
                <li onClick={props.signOutUser}>Logout</li>
            </ul>
                {/* <li>Settings</li>
                <li>Languages</li>
                <li>Help</li> */}
        </section>
    </div>
)

export default ProfileDropdown;