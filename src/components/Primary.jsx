import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Primary({ notes }) {
  return (
    <section className="notes">
      <header className="notes__header">
        <h2 className="notes__title">Primary</h2>
      </header>
      <div>
        {notes.map(({
          title, body, createdAt, id,
        }) => (
          <Note createdAt={createdAt} title={title} body={body} key={id} />
        ))}
      </div>
    </section>
  );
}

Primary.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Primary;
