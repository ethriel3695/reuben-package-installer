// import expect from 'expect';
// import React from 'react';
// import { shallow } from 'enzyme';
// import packageDependencyEntryForm from './packageDependencyEntryForm';

// function setup (installing) {
//   const props = {
//     userArray: [],
//     onInstall: () => {},
//     installing: installing,
//     errors: {}
//   };

//   return shallow(<packageDependencyEntryForm {...props} />);
// }

// describe('packageDependencyEntryForm via Enzyme', () => {
//   it('renders form and h1', () => {
//     const wrapper = setup(false);
//     expect(wrapper.find('form').length).toBe(1);
//     expect(wrapper.find('h1').text()).toEqual('Enter an Array of packages and dependencies. NOTE: see the example input for formatting your entry.');
//   });

//   // it('install button is labeled "Install" when not installing', () => {
//   //   const wrapper = setup(false);
//   //   expect(wrapper.find('input').props().value).toBe('Install');
//   // });

//   // it('install button is labeled "Installing..." when installing', () => {
//   //   const wrapper = setup(true);
//   //   expect(wrapper.find('input').props().value).toBe('Installing...');
//   // });
// });
