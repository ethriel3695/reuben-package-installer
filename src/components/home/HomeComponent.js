import React from 'react';
import { ExampleComponent } from '../../components';
import { container, title, description } from './styles.css';

class HomeComponent extends React.Component {
  render () {
    return (
      <div className={container}>
        <p className={title}>{`Reuben's Package Installer`}</p>
        <p className={description}>{`A tool for installing node modules into a project!`}</p>
        <ExampleComponent />
      </div>
    );
  }
}

export default HomeComponent;
