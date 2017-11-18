import React from 'react';
import PropTypes from 'prop-types';
import { centeredContainer } from '../sharedStyles/styles.css';

class App extends React.Component {
  render () {
    return (
      <div className={centeredContainer}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
