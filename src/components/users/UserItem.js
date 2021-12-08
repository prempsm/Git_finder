import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({user: {login, avatar_url, html_url}}) => {
   
    
 
        return (
            
            <div className="ps-card" >
                    <img src={avatar_url} />
                    <h2>{login}</h2>
                    <a href={html_url}><button className="ps-button">View Profile</button></a>
            </div>
           
        )
   
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}
export default UserItem
