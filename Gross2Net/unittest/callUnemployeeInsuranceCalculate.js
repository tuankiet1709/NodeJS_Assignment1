const CalculateTax = require('../libs/CalculateTax');
const calculateTax = new CalculateTax();

exports.unEmployeeInsurance = (grossSalary, area) => {
    const data = calculateTax.UnemploymentInsurance(grossSalary, area);
    switch (data) {
        case 100000:
            return 100000;
        case 500000:
            return 500000;
        case 884000:
            return 884000;
        case 784000:
            return 784000;
        case 686000:
            return 686000;
        case 614000:
            return 614000;
        default:
    }
}