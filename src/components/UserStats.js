import React, {useContext} from 'react';
import UserAvatar from "./UserAvatar";
import {TwitterContext} from "../utils/userContext";

const UserStats = () => {
    const value = useContext(TwitterContext)
    return (
        <div className={'user-stats'}>
                <div>
                    <UserAvatar/>
                    {value.user.name}
                </div>
                <div>
                    <div>Followers: {value.stats.followers}</div>
                    <div>Following: {value.stats.following}</div>
                </div>
            </div>
    );
};

export default UserStats;

