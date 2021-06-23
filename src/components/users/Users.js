import React from 'react';
import UserItem from './UserItem';
import Circular from '../layout/Circular';
import PropTypes from 'prop-types';

const Users = ({ loading, users }) => {
  if (loading) {
    return <Circular />;
  } else {
    return (
      <div className='usersGrid' style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem',
};

export default Users;
