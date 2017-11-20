import React from 'react';
import PropTypes from 'prop-types';
// import { packageDependencyEntryForm } from '../../components';
import { arrayOfStringsFormatter } from '../../validators/arrayValidator';
import { packageIsADependencyOfDependency } from '../../validators/circularLogicValidator';
import { convertArrayToObject } from '../../utilities/convertArrayToObject';
import { orderPackagesForInstallation } from '../../utilities/OrderPackagesForInstallation';
import { container, installButton, inputField,
  errorMessage, installMessage } from './styles.css';

const UserMessageModal = ({installs, error}) => {
  return (
    error === null || error === undefined
      ? <div className={installMessage}>{`"${installs}"`}</div>
      : <div className={errorMessage}>{`${error}`}</div>
  );
};

class packageDependencyManager extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      userArray: [],
      packageDependencyObject: {},
      error: ''
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('is this happening');
    console.log(nextProps);
    console.log(nextState);
    if (this.state.error !== nextState.error ||
      nextState.userArray.length > 0) {
      return true;
    }
  }

  validateUserEntry = () => {
    let formatUserArray = `${document.getElementById('userEntry').value}`;
    let userArray = [];
    try {
      userArray = arrayOfStringsFormatter(formatUserArray);
      return userArray;
    } catch (e) {
      /* eslint-disable no-console */
      console.log(e);
    }
  }

  userEntryAsObject = (userArray) => {
    let packageObject = {};
    try {
      packageObject = convertArrayToObject(userArray);
      return packageObject;
    } catch (e) {
      console.log(e);
    }
  }

  dependencyCycles = (packageObject) => {
    let isValid = false;
    try {
      isValid = packageIsADependencyOfDependency(packageObject);
      return isValid;
    } catch (e) {
      console.log(e);
    }
  }

  updateErrorMessage = (errorMessage) => {
    this.setState({
      error: errorMessage
    });
  };

  convertObjectForInstall = (packageObject) => {
    let orderedUserArray = [];
    orderedUserArray = orderPackagesForInstallation(packageObject);
    this.setState({
      userArray: orderedUserArray,
      error: null
    });
  }

  installPackages = (event) => {
    event.preventDefault();
    let errorMessage = `Did not enter key: value pairs separated by commas. See "Correct Format Example"`;
    let packageObject = {};
    let isValid = false;
    let userEntry = [];

    userEntry = this.validateUserEntry();

    if (!userEntry) {
      this.updateErrorMessage(errorMessage);
      return;
    } else {
      packageObject = this.userEntryAsObject(userEntry);
    }

    if (false in packageObject) {
      this.updateErrorMessage(errorMessage);
      return;
    } else {
      isValid = this.dependencyCycles(packageObject);
    }

    if (!isValid) {
      this.convertObjectForInstall(packageObject);
    } else {
      errorMessage = `The dependencies specification contains cycles`;
      this.updateErrorMessage(errorMessage);
    }
  };

  render () {
    return (
      <div className={container}>
        <textarea className={inputField}
          id='userEntry'
          name='userEntry'
          placeholder={`Enter an Array of packages and dependencies. NOTE: see the example input for formatting your entry.`}
          form='packageEntryForm'/>
        <form className={container} id='packageEntryForm'>
          <input type='submit'
            value='Install'
            className={installButton}
            onClick={this.installPackages}/>
        </form>
        <UserMessageModal installs={this.state.userArray} error={this.state.error}/>
      </div>
    );
  }
}

packageDependencyManager.propTypes = {
  userArray: PropTypes.array,
  error: PropTypes.string
};

UserMessageModal.propTypes = {
  installs: PropTypes.array,
  error: PropTypes.string
};

export default packageDependencyManager;
