//  for geting all element by id
function allElements(element){
    const mainElement=document.getElementById(element);
     const mainElementValue=mainElement.value;
    const mainElementNumber=parseInt(mainElementValue);

    // error
    const expencesAround=document.getElementById('total-expences');
    
    
    if(mainElementNumber<1){
        alert("please add a positive Number");
        return expencesAround.innerText=0;
    }
    else if(isNaN(mainElementNumber)){
        alert("please add a Number");
        return expencesAround.innerText=0;
    }
    else{
         return mainElementNumber;
    }
    
    
}

// for math calculation

function allCalculation(){
 
   
    const foodCost=allElements('food');

    const rentCost=allElements('rent');

    const clotheCost=allElements('clothe');

    const totalCost=foodCost+rentCost+clotheCost;

    return totalCost;

     
}

 
// this is for inner text

function ForInnerText(item1,item2){
    const totalExpences=document.getElementById(item1);
    totalExpences.innerText=item2;
}
