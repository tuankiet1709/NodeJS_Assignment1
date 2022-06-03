const User = require('../models/entities/user')
const mongoose = require('mongoose');
const { response } = require('express');
const CalculateTax = require('../libs/CalculateTax');
    
const url = "mongodb://localhost:27017/SalaryChange"

const calculateTax = new CalculateTax();

mongoose.connect(url)
.then(() => console.log('Mongoose connection open'))
.catch((err) => console.log(err));

module.exports = (req,res) => {
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
  const user = null;

  console.log(req.body);

  const grossSalary = (req.body.gross_salary)?parseInt(req.body.gross_salary.replace(/,/g,"")):0;
  const dependency_number = (req.body.dependency)?parseInt(req.body.dependency):0;
  const area = parseInt(req.body.area);

  console.log(dependency_number);

  console.log(Gross_Salary);

  Gross_Salary = calculateTax.Gross2Net(grossSalary, area, dependency_number);

  console.log(Gross_Salary);

  if(req.body.StaffCode){
      User.findOneAndUpdate({code: req.body.StaffCode},{
          grossSalary: Gross_Salary.grossSalary,
          netSalary: Gross_Salary.netSalary,
      }, {new: true}, (error, user) => {

          if(error){
              console.log(error);
          } else {
            Object.keys(Gross_Salary).map(function(key,index){
                Gross_Salary[key]= Gross_Salary[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            })
            
            res.render('home',{
                Gross_Salary, user, dependency_number, area
            })
          }
      })
  }
  else{

      Object.keys(Gross_Salary).map(function(key,index){
          Gross_Salary[key]= Gross_Salary[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      })
      res.render('home',{
          Gross_Salary, user, dependency_number, area
      })
  }
}

