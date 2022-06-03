module.exports = class MockUnemploymentInsurance {
    returnData = {};

    constructor() {
        this.returnData = {
            1000000: 80000,
            29800000: 2384000,
            50000000: 2384000,
        }
    }

    UnemploymentInsurance(numbers) {
        return this.returnData[numbers];
    }
}