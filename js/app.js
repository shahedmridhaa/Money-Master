document.getElementById('calc-btn').addEventListener('click',function(){
   
//    const toalExpenses=parseInt(document.getElementById('total-expences'));

      const totalCost=allCalculation();
      const TotalIncome=allElements('income');
      const remeningAmount=TotalIncome-totalCost;

    ForInnerText('balance',remeningAmount)
    if(totalCost>TotalIncome){
        alert('your cost is higher than your income')
        return (ForInnerText('total-expences',0),ForInnerText('balance',0));
    }
    else{
       return ForInnerText('total-expences',totalCost)
    }

//  error handeling
    
})



document.getElementById('save-btn').addEventListener('click',function(){
 
    const TotalIncomeAmount=allElements('income');
    const saveField=allElements('save-field')
    
    const saveAmount=TotalIncomeAmount*(saveField/100);
    if(saveField>=100){

        alert('You can not save at this moment');
        return (ForInnerText('save-amount',0),ForInnerText('last-balance',TotalIncomeAmount));

    }
    const remeningBalanceAmount=TotalIncomeAmount-saveAmount;
   
    ForInnerText('save-amount',saveAmount)
    ForInnerText('last-balance',remeningBalanceAmount)

});

