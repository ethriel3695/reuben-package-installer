import assert from 'assert';
import { orderPackagesForInstallation } from './OrderPackagesForInstallation';

describe('Order Packages For Installation', () => {
  describe('OrderPackagesForInstallation', () => {
    it('should return true if packages are ordered before their dependencies', () => {
      const unorderedObject = {
        'react-dom': 'react',
        'react': '',
        'eslint-config-standard': 'eslint',
        'eslint': '',
        'eslint-react': 'eslint-config-standard',
        'eslint-env': 'eslint'
      };

      const orderedArray = [
        'eslint',
        'eslint-config-standard',
        'eslint-env',
        'eslint-react',
        'react',
        'react-dom'
      ];

      assert.equal(orderedArray, orderPackagesForInstallation(unorderedObject));
    });
  });
});
