import React from 'react';
import PropTypes from 'prop-types';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleShow() {
    this.setState(({ show }) => ({ show: !show }));
  }

  render() {
    const { show } = this.state;
    const { title, body, createdAt } = this.props;
    const [date] = new Date(createdAt).toLocaleString().split(',');

    return (
      <article className={show ? 'note note-show' : 'note'}>
        <header className="note__header">
          <button type="button" aria-label="View note" className="note__title" onClick={this.toggleShow.bind(this)}>
            {title}
          </button>
          <time className="note__date">{date}</time>
        </header>
        <div className="note__body">
          <p>{body}</p>
        </div>
        <footer className="note__footer">
          <button type="button" aria-label="Edit note" className="note__button">Edit</button>
          <button type="button" aria-label="Archive note" className="note__button" disabled={!show}>Archive</button>
          <button type="button" aria-label="Delete note" className="note__button" disabled={!show}>Delete</button>
        </footer>
      </article>
    );
  }
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Note;
