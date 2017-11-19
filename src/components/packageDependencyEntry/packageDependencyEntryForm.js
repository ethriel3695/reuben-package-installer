import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components';
import { container, slogan } from './styles.css';

const packageDependencyEntryForm = ({userArray, onInstall, installing, errors}) => {
  return (
    <form className={container}>
      <h1 className={slogan}>{`Enter an Array of packages and dependencies. NOTE: see the example input for formatting your entry.`}</h1>

      <TextInput
        name='userEntry'
        label='Package and Dependencies'
        value={`userArray`}
        error={`errors`}/>
    </form>
  );
};

packageDependencyEntryForm.propTypes = {
  userArray: PropTypes.array.isRequired,
  onInstall: PropTypes.func.isRequired,
  installing: PropTypes.bool,
  errors: PropTypes.object
};

export default packageDependencyEntryForm;
