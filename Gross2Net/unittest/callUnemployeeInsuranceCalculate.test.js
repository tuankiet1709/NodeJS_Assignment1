'use strict';
const callUnemployeeInsuranceCalculate = require('./callUnemployeeInsuranceCalculate');
// Call mock simpleParser from __mocks__
jest.mock('./__mocks__/mockUnemployeeInsurance.js');

describe('Test call UnEmployee Insurance', () => {
    describe('Test UnEmployeeInsurance function', () => {
        test('Check with grossSalary = 10000000 and area = 1, Should return < 884000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(10000000,1);
            expect(result).toEqual(100000);
        });
        test('Check with grossSalary = 88400000 and area = 1, Should return = 884000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(88400000,1);
            expect(result).toEqual(884000);
        });
        test('Check with grossSalary = 90000000 and area = 1, Should return > 884000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(90000000,1);
            expect(result).toEqual(884000);
        });
        test('Check with grossSalary = 50000000 and area = 2, Should return < 784000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(50000000,2);
            expect(result).toEqual(500000);
        });
        test('Check with grossSalary = 78400000 and area = 2, Should return = 784000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(78400000,2);
            expect(result).toEqual(784000);
        });
        test('Check with grossSalary = 80000000 and area = 2, Should return > 784000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(80000000,2);
            expect(result).toEqual(784000);
        });
        test('Check with grossSalary = 50000000 and area = 3, Should return < 686000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(50000000,3);
            expect(result).toEqual(500000);
        });
        test('Check with grossSalary = 68600000 and area = 3, Should return = 686000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(68600000,3);
            expect(result).toEqual(686000);
        });
        test('Check with grossSalary = 80000000 and area = 3, Should return > 686000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(80000000,3);
            expect(result).toEqual(686000);
        });
        test('Check with grossSalary = 50000000 and area = 4, Should return < 614000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(50000000,4);
            expect(result).toEqual(500000);
        });
        test('Check with grossSalary = 61400000 and area = 4, Should return = 614000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(61400000,4);
            expect(result).toEqual(614000);
        });
        test('Check with grossSalary = 80000000 and area = 4, Should return > 614000', () => {
            const result = callUnemployeeInsuranceCalculate.unEmployeeInsurance(80000000,4);
            expect(result).toEqual(614000);
        });
    })
})