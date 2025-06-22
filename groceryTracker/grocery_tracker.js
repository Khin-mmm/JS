//never try to retrieve the input val outside a function if it depends on user input

function calculate_total(){
    let amount1= parseFloat(document.getElementById("1st_amount").value);
    let amount2= parseFloat(document.getElementById("2nd_amount").value);
    let amount3= parseFloat(document.getElementById("3rd_amount").value);

    console.log(amount1);
    console.log(amount2);
    console.log(amount3);
    let total = amount1 + amount2 +amount3;
    document.getElementById("result").innerText= `The total amount is :$ ${total}`;
}