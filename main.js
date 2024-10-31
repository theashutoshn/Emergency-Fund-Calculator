const incomeInput = document.querySelector(".income-amount");
const otherIncomeInput = document.querySelector(".otherincome-amount");
const taxDeductionInput = document.querySelector(".taxdeduction-amount");

const grossTotalIncomeValue = document.querySelector(".gross-total .gross-value");

let incomeAmount = parseFloat(incomeInput.value);
let otherIncomeAmount = parseFloat(otherIncomeInput.value);
let taxdeductionAmount = parseFloat(taxDeductionInput.value);


let totalIncomeAmount = incomeAmount + otherIncomeAmount;

const GrossTotalIncome = () =>{
    let grossTotalIncome = totalIncomeAmount - taxdeductionAmount;
    
    grossTotalIncomeValue.innerHTML = grossTotalIncome;

};

const refreshValues = () =>{

    incomeAmount = parseFloat(incomeInput.value);
    otherIncomeAmount = parseFloat(otherIncomeInput.value);
    taxdeductionAmount = parseFloat(taxDeductionInput.value);
    
    totalIncomeAmount = incomeAmount + otherIncomeAmount;

    GrossTotalIncome();
};

incomeInput.addEventListener("input", refreshValues);
otherIncomeInput.addEventListener("input", refreshValues);
taxDeductionInput.addEventListener("input", refreshValues);

const init = () =>
{
    refreshValues();
   
};

init();

