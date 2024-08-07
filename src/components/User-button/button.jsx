


import React, { useState} from 'react';
import '../User-button/button.css';

const Button = () => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [message, setMessage] = useState('');

    const ClickFollowing = () => {
        setIsFollowing(!isFollowing);
    };

    const ViewProfile = () => {
        setMessage('Profile view successful!');
       
        setTimeout(() => setMessage(''), 3000); 
    };

 

    return (
        <div>
            <div className='flex'>
                <div className='Follow'>
                    <button
                        className={`Follow ${isFollowing ? 'following' : ''}`}
                        onClick={ClickFollowing}
                    >
                        {isFollowing ? 'Following' : 'Follow'}
                    </button>
                </div>

                <div className='view-profile'>
                    <button onClick={ViewProfile}>View Profile</button>
                </div>
            </div>
            {message && <p className='message'>{message}</p>} 
        </div>
    );
};

export default Button;
