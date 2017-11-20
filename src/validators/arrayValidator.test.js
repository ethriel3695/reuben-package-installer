import assert from 'assert';
import { arrayOfStringsFormatter } from './arrayValidator';

describe('Array of strings Formatter', () => {
  describe('arrayOfStringsFormatter', () => {
    it('should return true if user enters array of strings', () => {
      const userInput = `[
        'react: ',
        'react-dom: react',
        'eslint: ',
        'eslint-config-standard: eslint']`;

      assert.equal(userInput, arrayOfStringsFormatter(userInput));
    });
    it('should return false if user does not enter an array of strings', () => {
      const invalidUserInput = {
        'react': '',
        'react-dom': 'react',
        'eslint': '',
        'eslint-config-standard': 'eslint'
      };

      const invalidNumberEntry = '0';

      assert.equal(false, arrayOfStringsFormatter(invalidUserInput));
      assert.equal(false, arrayOfStringsFormatter(invalidNumberEntry));
    });
  });
});
