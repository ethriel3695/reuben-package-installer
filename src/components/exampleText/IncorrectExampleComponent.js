import React from 'react';
import { codeContent } from './styles.css';

class IncorrectExampleComponent extends React.Component {
  render () {
    return (
      <div className={codeContent}>
        <span>{`{`}</span><br />
        <span>&emsp;{`"react: react-router-dom"`}</span><br />
        <span>&emsp;{`"react-dom: react"`}</span><br />
        <span>&emsp;{`"react-router-dom: react"`}</span><br />
        <span>{`}`}</span>
      </div>
    );
  }
}

export default IncorrectExampleComponent;
