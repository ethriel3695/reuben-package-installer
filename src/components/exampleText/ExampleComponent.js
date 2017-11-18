import React from 'react';
import { IncorrectExampleComponent, CorrectExampleComponent } from '../../components';
import { codeContainer } from './styles.css';

class ExampleComponent extends React.Component {
  render () {
    return (
      <div>
        <div className={codeContainer}>
          <span>{`Incorrect Format Example`}</span>
          <span>{`Correct Format Example`}</span>
        </div>
        <div className={codeContainer}>
          <IncorrectExampleComponent />
          <CorrectExampleComponent />
        </div>
      </div>
    );
  }
}

export default ExampleComponent;
