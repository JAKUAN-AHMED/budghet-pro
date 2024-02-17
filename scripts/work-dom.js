let count=0;
const allBtn=document.getElementsByClassName('btn-primary');
for(const btn of allBtn)
{
    btn.addEventListener('click',function handler(event)
    {
        count=count+1;
        const budget=getBudget('budget');
        const PlaceName=event.target.parentNode.parentNode.childNodes[1].innerText;
        const price=event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        if(budget-parseInt(price)<0)
        {
            alert('ufs! Your Budget is Very Low');
            return;
        }
        updateTotal('sumOf',price);
        setInnerText('budget',budget-parseInt(price));
        const costContainer=document.getElementById('cost-container');
        console.log(costContainer);
        const li=document.createElement("li");
        const p=document.createElement("p");
        p.innerText=PlaceName;
        const p2=document.createElement("p");
        p2.innerText=price;
        li.appendChild(p);
        li.appendChild(p2);
        costContainer.appendChild(li);
        // event.target.setAttribute("disabled", true);
        setInnerText('c-cart',count);
    });
}

// get total budget

function getBudget(id)
{
    const budgetInner=document.getElementById(id).innerText;
    const budget=parseInt(budgetInner);
    return budget;

}

// get totalUpdate
function updateTotal(id,value)
{
    const update=document.getElementById(id).innerText;
    const total=parseInt(update)+parseInt(value);
    document.getElementById(id).innerText=total;
    grandTotal('Grand-total');
}
//grand Total
function grandTotal(category) {
    const convertTotal = getBudget("sumOf");
    if (category == "bus") {
      setInnerText("Grand-total", convertTotal + 100);
    } else if (category == "train") {
      setInnerText("Grand-total", convertTotal - 200);
    } else if (category == "flight") {
      setInnerText("Grand-total", convertTotal + 500);
    } else {
      setInnerText("Grand-total", convertTotal);
    }
  }
// set InnerText
function setInnerText(id,value)
{
    document.getElementById(id).innerText=value;
}