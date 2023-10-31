const chai = require('chai');
const { describe, it } = require('mocha'); // You might need a testing framework like Mocha.
const executeCommands = require('../src/robot'); // Replace with the actual path to your robot code.

const expect = chai.expect;

describe('Robot', () => {
  it('should execute basic commands correctly', () => {
    const widthSpace = 100;
    const heightSpace = 100;

    const testCases = [
      { position: 'N 0 0', commands: 'M1RM4L3M2', expected: 'S 4 99' },
      { position: 'S 0 0', commands: 'M1RM4L3M3', expected: 'N 96 2' },
      { position: 'E 0 0', commands: 'M1RM4LR13M3', expected: 'S 1 93' },
      { position: 'W 10 12', commands: 'M1RM4LR13M3', expected: 'N 9 19' },
    ];

    testCases.forEach((testCase) => {
      const result = executeCommands(testCase.position, testCase.commands, widthSpace, heightSpace);
      console.log('basic commands correctly', result)
      expect(result).to.equal(testCase.expected);
    });
  });

  it('should handle boundary conditions correctly', () => {
    const widthSpace = 5;
    const heightSpace = 5;

    const testCases = [
      { position: 'N 0 0', commands: 'M6', expected: 'N 0 1' },
      { position: 'E 4 4', commands: 'M6', expected: 'E 0 4' },
      { position: 'S 4 4', commands: 'M6', expected: 'S 4 3' },
    ];

    testCases.forEach((testCase) => {
      const result = executeCommands(testCase.position, testCase.commands, widthSpace, heightSpace);
      console.log('boundary conditions correctly', result)

      expect(result).to.equal(testCase.expected);
    });
  });
});
