'use strict';
const callHealthInsurance = require('./callHealthInsuranceCalculate');
// Call mock simpleParser from __mocks__
jest.mock('./__mocks__/mockHealthInsurance.js');

describe('Test call Health Insurance', () => {
    describe('Test HealthInsurance function', () => {
        test('Check with -1, Should return 0', () => {
            const result = callHealthInsurance.healthInsurance(-1);
            expect(result).toEqual(0);
        });
        test('Check with 0, Should return 0', () => {
            const result = callHealthInsurance.healthInsurance(0);
            expect(result).toEqual(0);
        });
        test('Check with 1000000, Should return 15000', () => {
            const result = callHealthInsurance.healthInsurance(1000000);
            expect(result).toEqual(15000);
        });
        test('Check with 29800000, Should return 447000', () => {
            const result = callHealthInsurance.healthInsurance(29800000);
            expect(result).toEqual(447000);
        });
        test('Check with 50000000, Should return 447000', () => {
            const result = callHealthInsurance.healthInsurance(50000000);
            expect(result).toEqual(447000);
        });
    })
})