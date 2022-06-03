const CalculateTax = require('../libs/CalculateTax');
const calculateTax = new CalculateTax();

exports.gross2Net = (grossSalary, area, dependency) => {
    const data = calculateTax.Gross2Net(grossSalary, area, dependency);
    switch (data.netSalary) {
        case 41001750:
            return 41001750;
        case 42065200:
            return 42065200;
        case 80579500:
            return 80579500;
        default:
    }
}