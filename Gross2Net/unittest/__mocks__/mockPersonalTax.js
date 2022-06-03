module.exports = class MockPersonalTax {
    returnData = {};

    constructor() {
        this.returnData = {
            1000000: 15000,
            29800000: 447000,
            50000000: 447000,
        };
    }

    PersonalTax(numbers) {
        return this.returnData[numbers];
    }
}