const CalculateTax = require('../libs/CalculateTax');
const calculateTax = new CalculateTax();

exports.personalTax = (incomeTax) => {
    const data = calculateTax.PersonalTax(incomeTax);
    switch (data) {
        case 0:
            return 0;
        case 121250:
            return 121250;
        case 440000:
            return 440000;
        case 1630350:
            return 1630350;
        case 3503800:
            return 3503800;
        case 5667250:
            return 5667250;
        case 13760700:
            return 13760700;
        case 19999750:
            return 19999750;
        default:
    }
}