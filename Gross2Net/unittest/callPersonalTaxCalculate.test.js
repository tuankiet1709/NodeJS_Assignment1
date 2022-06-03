'use strict';
const callPersonalTaxCalculate = require('./callPersonalTaxCalculate');
// Call mock simpleParser from __mocks__
jest.mock('./__mocks__/mockUnemployeeInsurance.js');

describe('Test call Personal Tax Insurance', () => {
    describe('Test PersonalTax function', () => {
        test('Check with incomeTax < 0, Should return ', () => {
            const result = callPersonalTaxCalculate.personalTax(-10000000);
            expect(result).toEqual(0);
        });
        test('Check with incomeTax > 0 && incomeTax <= 5000000, Should return 121250', () => {
            const result = callPersonalTaxCalculate.personalTax(2425000);
            expect(result).toEqual(121250);
        });
        test('Check with incomeTax > 5000000 && incomeTax <= 10000000, Should return 440000', () => {
            const result = callPersonalTaxCalculate.personalTax(6900000);
            expect(result).toEqual(440000);
        });
        test('Check with incomeTax > 10000000 && incomeTax <= 18000000, Should return 1630350', () => {
            const result = callPersonalTaxCalculate.personalTax(15869000);
            expect(result).toEqual(1630350);
        });
        test('Check with incomeTax > 18000000 && incomeTax <= 32000000, Should return 3503800', () => {
            const result = callPersonalTaxCalculate.personalTax(25769000);
            expect(result).toEqual(3503800);
        });
        test('Check with incomeTax > 32000000 && incomeTax <= 52000000, Should return 5667250', () => {
            const result = callPersonalTaxCalculate.personalTax(35669000);
            expect(result).toEqual(5667250);
        });
        test('Check with incomeTax > 52000000 && incomeTax <= 80000000, Should return 13760700', () => {
            const result = callPersonalTaxCalculate.personalTax(65369000);
            expect(result).toEqual(13760700);
        });
        test('Check with incomeTax > 80000000, Should return 19999750', () => {
            const result = callPersonalTaxCalculate.personalTax(85285000);
            expect(result).toEqual(19999750);
        });
    })
})