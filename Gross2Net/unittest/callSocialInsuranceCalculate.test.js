'use strict';
const callSocialInsuranceCalculate = require('./callSocialInsuranceCalculate');
// Call mock simpleParser from __mocks__
jest.mock('./__mocks__/mockSocialInsurance.js');

describe('Test call Social Insurance', () => {
    describe('Test SocialInsurance function', () => {
        test('Check with -1, Should return 0', () => {
            const result = callSocialInsuranceCalculate.socialInsurance(-1);
            expect(result).toEqual(0);
        });
        test('Check with 0, Should return 0', () => {
            const result = callSocialInsuranceCalculate.socialInsurance(0);
            expect(result).toEqual(0);
        });
        test('Check with 1000000, Should return 80000', () => {
            const result = callSocialInsuranceCalculate.socialInsurance(1000000);
            expect(result).toEqual(80000);
        });
        test('Check with 29800000, Should return 2384000', () => {
            const result = callSocialInsuranceCalculate.socialInsurance(29800000);
            expect(result).toEqual(2384000);
        });
        test('Check with 50000000, Should return 2384000', () => {
            const result = callSocialInsuranceCalculate.socialInsurance(50000000);
            expect(result).toEqual(2384000);
        });
    })
})