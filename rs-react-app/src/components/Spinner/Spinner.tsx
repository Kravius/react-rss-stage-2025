import styles from './Spinner.module.css';

import { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <>
        <div className={styles['spinner']}></div>
      </>
    );
  }
}

export default Spinner;
