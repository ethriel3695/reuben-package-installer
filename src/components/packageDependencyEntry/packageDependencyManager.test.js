// import expect from 'expect';
// import React from 'react';
// import { mount } from 'enzyme';
// import { packageDependencyManager } from './PackageDependencyManager';

// describe('Package Dependency Manager', () => {
//   it('sets error message when trying to save an empty package dependency array', () => {
//     const props = [
//       'react: ',
//       'react-dom: react',
//       'react-router-dom: react-dom',
//       'eslint: ',
//       'eslint-config-standard: eslint'
//     ];
//     const wrapper = mount(<packageDependencyManager />);
//     console.log(wrapper.debug());
//     const installButton = wrapper.find('input').last();
//     console.log(installButton.prop('type'));
//     expect(installButton.prop('type')).toBe('submit');
//     installButton.simulate('click');
//     expect(wrapper.state().errors.userEntry).toBe('Please enter a package and dependency array');
//   });
// });
