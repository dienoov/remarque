import React from 'react';
import PropTypes from 'prop-types';

function Note({
  title, body, createdAt,
}) {
  const [date] = new Date(createdAt).toLocaleString().split(',');

  return (
    <article className="note">
      <header className="note__header">
        <div className="note__heading">
          <h2 className="note__title">{title}</h2>
          <time className="note__date">{date}</time>
        </div>
        <button type="button" className="note__delete">Delete</button>
      </header>
      <div className="note__body">
        <p>{body}</p>
      </div>
    </article>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Note;
