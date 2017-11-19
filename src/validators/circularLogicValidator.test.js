import assert from 'assert';
import { packageIsADependencyOfDependency } from './circularLogicValidator';

describe('Dependency of a dependent', () => {
  describe('packageIsADependencyOfDependency', () => {
    it('should return true if there is no circular logic', () => {
      const noCircularDependencies = {
        'react-dom': 'react',
        'react': '',
        'eslint': '',
        'eslint-config-standard': 'eslint',
        'eslint-react': 'eslint-config-standard',
        'eslint-env': 'eslint'
      };

      assert.equal(false, packageIsADependencyOfDependency(noCircularDependencies));
    });
    it('should return false if there is circular logic', () => {
      const circularDependencies = {
        'react': '',
        'react-dom': 'react',
        'react-router-dom': 'react-dom',
        'eslint': 'eslint-config-standard',
        'eslint-config-standard': 'eslint'
      };

      assert.equal(true, packageIsADependencyOfDependency(circularDependencies));
    });
  });
});
