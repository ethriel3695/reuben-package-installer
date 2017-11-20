import expect from 'expect';
import { orderPackagesForInstallation } from './OrderPackagesForInstallation';

describe('Order Packages For Installation', () => {
  describe('OrderPackagesForInstallation', () => {
    it('should return true if packages are ordered before their dependencies', () => {
      const unorderedObject = {
        'react-dom': 'react',
        'react': '',
        'react-router-dom': 'react',
        'eslint-config-standard': 'eslint',
        'eslint': '',
        'eslint-react': 'eslint-config-standard',
        'eslint-env': 'eslint'
      };

      const orderedArray = [
        'react',
        'react-dom',
        'react-router-dom',
        'eslint',
        'eslint-config-standard',
        'eslint-react',
        'eslint-env'
      ];

      expect(orderPackagesForInstallation(unorderedObject)).toEqual(orderedArray);
    });
  });
});
