'use strict';
const callGross2Net = require('./callGross2NetCalculate');
// Call mock simpleParser from __mocks__
jest.mock('./__mocks__/mockGross2Net.js');
describe('Test call Gross to Net', () => {
    describe('Test Gross2Net function', () => {
        test('Check with grossSalary = 50000000 & area = 3 & dependency_people = 0, Should return 41001750', () => {
            const result = callGross2Net.gross2Net(50000000,3,0);
            expect(result).toEqual(41001750);
        });
        test('Check with grossSalary = 50000000 & area = 1 & dependency_people = 1, Should return 42065200', () => {
            const result = callGross2Net.gross2Net(50000000,1,1);
            expect(result).toEqual(42065200);
        });
        test('Check with grossSalary = 100000000 & area = 2 & dependency_people = 3, Should return 80579500', () => {
            const result = callGross2Net.gross2Net(100000000,2,3);
            expect(result).toEqual(80579500);
        });
    })
})