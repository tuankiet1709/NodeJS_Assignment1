module.exports = class CalculateTax{
    constructor() {
        return true;
    }

    SocialInsurance(grossSalary){
        const socialInsuranceMax = 2384000;
        const socialInsurance = grossSalary*8/100>0?grossSalary*8/100:0;
        return socialInsurance > socialInsuranceMax? socialInsuranceMax:socialInsurance;
      }
      
    HealthInsurance(grossSalary){
        const healthInsuranceMax = 447000;
        const healthInsurance = grossSalary*1.5/100>0?grossSalary*1.5/100:0;
        return healthInsurance > healthInsuranceMax? healthInsuranceMax:healthInsurance;
      }
      
    UnemploymentInsurance(grossSalary, area){
        const unemploymentInsuranceMax = [884000, 784000, 686000, 614000];
        console.log("UnemploymentInsurance");
        console.log(area);
        console.log(unemploymentInsuranceMax[area-1]);
      
        const unemploymentInsurance = grossSalary*1/100>0?grossSalary*1/100:0;
        return unemploymentInsurance > unemploymentInsuranceMax[area-1]? 
                unemploymentInsuranceMax[area-1]:
                unemploymentInsurance;
      }
      
    PersonalTax(incomeTax){
        if(incomeTax >0 && incomeTax <= 5000000){
          return incomeTax * 5 / 100;
        } else if(incomeTax > 5000000 && incomeTax <= 10000000){
            return incomeTax * 10 / 100 - 250000;
        } else if(incomeTax > 10000000 && incomeTax <= 18000000){
            return incomeTax * 15 / 100 - 750000;
        } else if(incomeTax > 18000000 && incomeTax <= 32000000){
            return incomeTax * 20 / 100 - 1650000;
        } else if(incomeTax > 32000000 && incomeTax <= 52000000){
            return incomeTax * 25 / 100 - 3250000;
        } else if(incomeTax > 52000000 && incomeTax <= 80000000){
            return incomeTax * 30 / 100 - 5850000;
        } else if(incomeTax > 80000000){
            return incomeTax * 35 / 100 - 9850000;
        } else {
            return 0;
        }
      }
      
    Gross2Net(grossSalary, area, dependency){
        var Gross_Salary = {
          grossSalary: 0,
          socialInsurance: 0,
          healthInsurance: 0,
          unemploymentInsurance: 0,
          incomeBeforeTax: 0,
          reducePersonalCircumstances: 0,
          dependencyPeople: 0,
          incomeTaxes: 0,
          personalIncomeTax: 0,
          netSalary: 0,
        }
      
        Gross_Salary.grossSalary = grossSalary;
        Gross_Salary.socialInsurance = this.SocialInsurance(grossSalary);
        Gross_Salary.healthInsurance = this.HealthInsurance(grossSalary);
        Gross_Salary.unemploymentInsurance = this.UnemploymentInsurance(grossSalary,area);
        Gross_Salary.incomeBeforeTax = grossSalary - Gross_Salary.socialInsurance - Gross_Salary.healthInsurance - Gross_Salary.unemploymentInsurance;
        Gross_Salary.reducePersonalCircumstances = 11000000;
        Gross_Salary.dependencyPeople = 4400000*dependency;
        Gross_Salary.incomeTaxes = Gross_Salary.incomeBeforeTax - Gross_Salary.reducePersonalCircumstances - Gross_Salary.dependencyPeople;
        Gross_Salary.personalIncomeTax = this.PersonalTax(Gross_Salary.incomeTaxes);
        Gross_Salary.netSalary = Gross_Salary.incomeBeforeTax - Gross_Salary.personalIncomeTax;
      
        return Gross_Salary;
      }
    
}
