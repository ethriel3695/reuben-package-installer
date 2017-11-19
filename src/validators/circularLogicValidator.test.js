import assert from 'assert';
import { packageIsADependencyOfDependency } from './circularLogicValidator';

describe('should return true if there is no circular logic', () => {
  describe('packageIsADependencyOfDependency', () => {
    it('should return an object if each object item has a key and value', () => {
      const userArray = [
        'react: ',
        'react-dom: react',
        'eslint: ',
        'eslint-config-standard: eslint'
      ];

      assert.equal(true, packageIsADependencyOfDependency(userArray));
    });
    it('should return true if there is no circular logic', () => {
      const userArray = [
        'react: react: react ',
        'react-dom:react',
        'eslint-config-standard:eslint',
        '0 : react : react-dom'
      ];

      assert.equal(false, packageIsADependencyOfDependency(userArray));
    });
  });
});
