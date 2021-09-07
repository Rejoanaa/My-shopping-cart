// handle phone


document.getElementById('phn-plus').addEventListener('click', function () {
    phoneplus = plusMinus('phn', 1219, true);

})
document.getElementById('phn-minus').addEventListener('click', function () {
    phoneplus = plusMinus('phn', 1219, false);
})

// handle case

document.getElementById('case-plus').addEventListener('click', function () {
    caseplus = plusMinus('case', 59, true);

})
document.getElementById('case-minus').addEventListener('click', function () {
    caseMinus = plusMinus('case', 59, false);
})

// first call

function plusMinus(product, price, isPlus) {
    const input = document.getElementById(product + '-input');
    let NUm = input.value;
    if (isPlus == true) {
        NUm = parseInt(NUm) + 1;
    }
    else if (NUm > 0) {
        NUm = parseInt(NUm) - 1;
    }
    input.value = NUm;
    const Price = document.getElementById(product + '-price');
    Price.innerText = NUm * price;
    total();

}
// second call (from plusminus)
function total() {
    phoneTotal = getInput('phn') * 1219;
    caseTotal = getInput('case') * 59;
    const subTotal = parseInt(phoneTotal) + parseInt(caseTotal);
    const taxPrice = subTotal / 10;
    const totalPrice = subTotal + taxPrice;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = taxPrice;
    document.getElementById('total').innerText = totalPrice;
}
// third call(from total)
function getInput(product) {
    value = document.getElementById(product + '-input').value;
    return value;
}