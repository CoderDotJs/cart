
    const increBtnCase = document.getElementById('case-inc');
    const decreBtnCase = document.getElementById('case-dec');
    const increBtnPhone = document.getElementById('phone-inc');
    const decreBtnPhone = document.getElementById('phone-dec');
    
    document.onload = getSubtotalAddTotal('item-total-phone','item-total','subtotal','total')


    increBtnPhone.addEventListener('click',function(){
        increDecre('phone-input','item-total-phone',true, 1219)
        // getSubtotalAddTotal('item-total-phone','item-total','subtotal','total')
    })

    decreBtnPhone.addEventListener('click',function(){
        increDecre('phone-input','item-total-phone',false, 1219)
        // getSubtotalAddTotal('item-total-phone','item-total','subtotal','total')
    })

    increBtnCase.addEventListener('click',function(){
        increDecre('inputbox','item-total',true,59)
        // getSubtotalAddTotal('item-total-phone','item-total','subtotal','total')
    })

    decreBtnCase.addEventListener('click',function(){
        increDecre('inputbox','item-total',false,59)
        // getSubtotalAddTotal('item-total-phone','item-total','subtotal','total')
        // console.log(t)
    })


//function for increment and decrement

function increDecre(inputbox,totalprice,isTrue,price){
    const inputBox = document.getElementById(inputbox);
    const totalPrice = document.getElementById(totalprice);
    
    if(isTrue == true){
        parseInt(inputBox.value++);
    }
    else if(inputBox.value > 0){
        // if(inputBox.value == 1){
        //     inputBox.value = 1;
        // }
        // else{
        parseInt(inputBox.value--);
        // }
    }
    totalPrice.innerText = getTotalForItem(inputBox.value,price); //nested function getTotalForItem
    getSubtotalAddTotal('item-total-phone','item-total','subtotal','total')
}

//get total for the each items a nested function
function getTotalForItem(inputItem,itemValue){
    const items = inputItem;
    const value = itemValue;
    const total = items * value;
    return total;
}

function getSubtotalAddTotal(phoneTotal,caseTotal,subTotal,total){
    const phonetotal = document.getElementById(phoneTotal).innerText;
    const casetotal = document.getElementById(caseTotal).innerText;
    const subtotalText = document.getElementById(subTotal);
    const toTal = document.getElementById(total);

    const subTotal1 = parseFloat(phonetotal) + parseFloat(casetotal);
    const total1 = parseFloat(subTotal1 + (subTotal1 * 5 / 100));

    subtotalText.innerText = subTotal1;
    toTal.innerText = total1;
}