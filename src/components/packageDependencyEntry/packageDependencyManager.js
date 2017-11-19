import React from 'react';
import PropTypes from 'prop-types';
// import { packageDependencyEntryForm } from '../../components';
import { arrayOfStringsValidation } from '../../validators/arrayValidator';
import { packageIsADependencyOfDependency } from '../../validators/circularLogicValidator';
import { convertArrayToObject } from '../../utilities/convertArrayToObject';
import { container, installButton, inputField } from './styles.css';

function UserMessageModal (error) {
  return (
    error !== null && error !== undefined
      ? <div>{`Success!`}</div> : <div>{`Error!`}</div>
  );
}

class packageDependencyManager extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      userArray: [],
      packageDependencyObject: {},
      errors: {},
      installing: false
    };
  }

  componentWillReceiveProps (nextProps) {
    console.log('is this happening');
    if (this.props.userArray.id !== nextProps.userArray.id) {
      this.setState({errors: Object.assign({}, {})});
    }
  }

  async formIsValid (userArray) {
    let isValid = true;
    let errors = {};

    try {
      if (userArray === undefined || userArray.length < 1) {
        console.log(`it sets this`);
        errors.title = 'Please enter a package and dependency array';
        isValid = false;
        this.setState({
          errors: errors.title
        });
        return isValid;
      }
      return isValid;
    } catch (error) {
      console.log(error);
    }
  }

  async validateUserEntry (event) {
    let isValid = false;
    event.preventDefault();
    let userArray = document.getElementById('userEntry').value;
    console.log(userArray);
    try {
      isValid = await this.formIsValid(userArray);
    } catch (e) {
      console.log(e);
    }
    try {
      isValid = await arrayOfStringsValidation(userArray);
      this.convertArray(userArray);
    } catch (error) {
      console.log(error);
    }
    return isValid;
  }

  // validateUserEntry = (event) => {
  //   event.preventDefault();
  //   let userArray = document.getElementById('userEntry').value;
  //   console.log(userArray);
  //   if (!this.formIsValid(userArray)) {
  //     console.log('does it get here');
  //     return;
  //   }
  //   arrayOfStringsValidation(userArray)
  //     .then(() => this.convertArray(userArray))
  //     .catch(error => {
  //       this.setState({
  //         error: error
  //       });
  //     });
  // }

  convertArray = (userArray) => {
    console.log('does it get here too');
    let packageObject = convertArrayToObject(userArray)
      .then(() => this.doDependenciesCauseCycle(packageObject))
      .catch(error => {
        this.setState({
          error: error
        });
      });
  }

  doDependenciesCauseCycle = (packageObject) => {
    packageIsADependencyOfDependency(packageObject)
      .then(() => this.convertObjectForInstall(packageObject))
      .catch(error => {
        this.setState({
          error: error
        });
      });
  }

  convertObjectForInstall = (packageObject) => {
    this.setState({
      userArray: packageObject
    });
  }

  installPackages = (userArray) => {
    this.validateUserEntry()
      .then(() => this.redirect())

      .catch(error => {
        UserMessageModal(error);
        this.setState({
          saving: false
        });
      });
  }

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
            onClick={this.validateUserEntry}/>
        </form>
        <p>{this.state.userArray === undefined ? this.state.errors.title : this.state.userArray }</p>
      </div>
    );
  }
}

packageDependencyManager.propTypes = {
  userArray: PropTypes.array,
  errors: PropTypes.object,
  installing: PropTypes.bool
};

export default packageDependencyManager;
