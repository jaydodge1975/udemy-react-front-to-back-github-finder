import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function RepoItem({ repo }) {
  return (
    <div className='repo card'>
      <h3>
        <FontAwesomeIcon icon={faBook} />{' '}
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
