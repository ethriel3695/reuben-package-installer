import assert from 'assert';
import { arrayOfStringsValidation } from './arrayValidator';

describe('Array of strings Validation', () => {
  describe('arrayOfStringsValidation', () => {
    it('should return true if user enters array of strings', () => {
      const userInput = [
        'react: ',
        'react-dom: react',
        'eslint: ',
        'eslint-config-standard: eslint'
      ];

      assert.equal(true, arrayOfStringsValidation(userInput));
    });
    it('should return false if user does not enter an array of strings', () => {
      const invalidUserInput = {
        'react': '',
        'react-dom': 'react',
        'eslint': '',
        'eslint-config-standard': 'eslint'
      };

      const invalidNumberEntry = 0;

      assert.equal(false, arrayOfStringsValidation(invalidUserInput));
      assert.equal(false, arrayOfStringsValidation(invalidNumberEntry));
    });
  });
});
