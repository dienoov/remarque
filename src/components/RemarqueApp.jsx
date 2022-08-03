import React from 'react';

import dummy from '../utils/dummy';
import Header from './Header';
import Primary from './Primary';

class RemarqueApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: dummy,
    };
  }

  render() {
    const { notes } = this.state;

    return (
      <>
        <Header />
        <main>
          <Primary notes={notes.filter(({ archived }) => !archived)} />
        </main>
      </>
    );
  }
}

export default RemarqueApp;
