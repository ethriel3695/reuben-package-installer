import assert from 'assert';
import expect from 'expect';
import { convertArrayToObject } from './ConvertArrayToObject';

describe('Each array item must become an object key:value pair', () => {
  describe('convertArrayToObject', () => {
    it('should return an object if each object item has a key and value', () => {
      const userArray = [
        'react: ',
        'react-dom: react',
        'eslint: ',
        'eslint-config-standard: eslint'
      ];

      const convertedObject = {
        'react': '',
        'react-dom': 'react',
        'eslint': '',
        'eslint-config-standard': 'eslint'
      };

      expect(convertArrayToObject(userArray)).toEqual(convertedObject);
    });
    it('should return false if each object item does not have a key and value', () => {
      const userArray = [
        'react: react: react ',
        'react-dom:react',
        'eslint-config-standard:eslint',
        '0 : react : react-dom'
      ];

      assert.equal(false, convertArrayToObject(userArray));
    });
  });
});
