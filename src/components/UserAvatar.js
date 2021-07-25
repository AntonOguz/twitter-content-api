import React, {useContext} from 'react';
import {TwitterContext} from "../utils/userContext";

const UserAvatar = (props) => {

    const value = useContext(TwitterContext)
    return (
        <img className={`user-avatar ${props.size}`} src={value.user.avatar}
                           alt={value.user.name} onClick={() =>
            {
                const url = prompt('Enter new avatar url')
                value.changeAvatar(url)
            }
            }/>
    );
};

export default UserAvatar;
