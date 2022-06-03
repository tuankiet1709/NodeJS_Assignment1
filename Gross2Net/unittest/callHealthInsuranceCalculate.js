const CalculateTax = require('../libs/CalculateTax');
const calculateTax = new CalculateTax();

exports.healthInsurance = (values) => {
    const data = calculateTax.HealthInsurance(values);
    switch (data) {
        case 0:
            return 0;
        case 15000:
            return 15000;
        case 447000:
            return 447000;
        default:
    }
}