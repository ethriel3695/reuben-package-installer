import React from 'react';
import { codeContent } from './styles.css';

class IncorrectExampleComponent extends React.Component {
  render () {
    return (
      <div className={codeContent}>
        <br /><span>{`react: react-router-dom,`}</span><br />
        <span>{`react-dom: react,`}</span><br />
        <span>{`react-router-dom: react`}</span><br />
      </div>
    );
  }
}

export default IncorrectExampleComponent;
