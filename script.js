let toComma = (x) => x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function result(){

    let productPrice  = document.getElementById("productPrice");
    let productUnit   = document.getElementById("productUnit");
    let currency      = document.getElementById("currency").value||"R";
    let shippingPrice = document.getElementById("shippingPrice");
    let country       = document.getElementById("country").value||"1";
    let tex           = document.getElementById("tex");
    let profit        = document.getElementById("profit");
    let length        = document.getElementById("length");
    let width         = document.getElementById("width");
    let height        = document.getElementById("height");

    valid(productPrice);
    valid(productUnit);
    valid(shippingPrice);
    valid(tex);
    valid(profit);
    valid(length);
    valid(width);
    valid(height);

    // console.log(tex,"tex");

    if(tex.value<=0||tex.value>=100){
        tex.classList.add("is-invalid");
        return;
    }
    else {
        tex.classList.remove("is-invalid");
        tex.classList.add("is-valid");
    }
    if(profit.value<=0 || profit.value>=100){
        profit.classList.add("is-invalid");
        return ;
    }
    else {
        profit.classList.remove("is-invalid");
        profit.classList.add("is-valid");
    }



    productPrice = parseFloat(productPrice.value);
    productUnit = parseFloat(productUnit.value);
    shippingPrice = parseFloat(shippingPrice.value);
    tex = parseFloat(tex.value);
    profit = parseFloat(profit.value);
    length = parseFloat(length.value);
    width = parseFloat(width.value);
    height = parseFloat(height.value);


 
    

    let exchangeRate= 0;

    
    switch (currency) {
        case 'R':
            switch (country) {
                case '1':
                    exchangeRate = 0.14;
                break;
                case '2':
                    exchangeRate = 0.50;
                break;
                case '3':
                    exchangeRate = 1;
                break;
            }
        break;
        case 'U':
            switch (country) {
                case '1':
                    exchangeRate = 1;
                break;
                case '2':
                    exchangeRate = 3.47;
        

                break;
                case '3':
                    exchangeRate = 6.98
                break;
            }
        break;
        case 'S':
            switch (country) {
                case '1':
                    exchangeRate = 0.29;
                break;
                case '2':
                    exchangeRate = 1;
                    
                break;
                case '3':
                    exchangeRate = 2.01;
                break;
            }
        break;
    }



    let Cbm = length * width * height;
    console.log(Cbm,"Cbm");
    let totalProductPrice = productPrice * productUnit;
    console.log(totalProductPrice,"totalProductPrice");

    let extraCost = (shippingPrice + (tex/100))/(Cbm);
    console.log(extraCost,"extraCost");
    let totalCost = totalProductPrice + extraCost;
    console.log(totalCost,"totalCost");
    let totalPriceAfterShipping = (totalCost + shippingPrice)/(tex/100);
    console.log(totalPriceAfterShipping,"totalPriceAfterShipping");
    let totalProfit = totalPriceAfterShipping/(profit/100);
    console.log(totalProfit,"totalProfit");
    let totalCostAfterExchangeRate = totalProfit*exchangeRate;
    console.log(totalCostAfterExchangeRate,"totalCostAfterExchangeRate");
   

    document.getElementById("productProfit").innerHTML = toComma(totalCostAfterExchangeRate);
    document.getElementById("product").innerHTML = toComma(totalProfit);

}

function valid(name){
    if(name.value == 0){
        name.classList.add("is-invalid");
        name.classList.remove("is-valid");
        return 
    }
    else{
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
    }
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })