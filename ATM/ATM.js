box1.addEventListener("click", () => {
    div0.style.display = "none";
    div1.style.display = "flex";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div8.style.display = "none";
})

div0.style.display = "block";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div8.style.display = "none";

box2.addEventListener("click", () => {
    div0.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "flex";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div8.style.display = "none";
})

box3.addEventListener("click", () => {
    div0.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "flex";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div8.style.display = "none";
})

box4.addEventListener("click", () => {
    div0.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "flex";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div8.style.display = "none";
})

box5.addEventListener("click", () => {
    div0.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "flex";
    div6.style.display = "none";
    div7.style.display = "none";
    div8.style.display = "none";
})

box6.addEventListener("click", () => {
    div0.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "flex";
    div7.style.display = "none";
    div8.style.display = "none";
})

box7.addEventListener("click", () => {
    div0.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "flex";
    div8.style.display = "none";
})

box8.addEventListener("click", () => {
    div0.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
    div7.style.display = "none";
    div8.style.display = "flex";
})

let amount = 10000;
amount = parseInt(amount)
Btn1.addEventListener("click", () => {
    msg1.textContent = "Your bank balance is Rs." + amount;
})

Btn2.addEventListener("click", () => {
    let withAmt = document.getElementById("withdrawl").value;
    withAmt = parseInt(withAmt);
    amount = amount - withAmt;
    msg2.textContent = "Transaction Successful, your balance is Rs. " + amount;
})

Btn3.addEventListener("click", ()=> {
    let deposit = document.getElementById("deposit").value;
    deposit = parseInt(deposit);
    amount = amount + deposit;
    msg3.textContent = "Transaction Successful, your balance is Rs. " + amount;
})



Btn4.addEventListener("click", () => {
    let transAmt = document.getElementById("transfer").value;
    console.log(transAmt)
    console.log(parseInt(transAmt))
    amount = amount - parseInt(transAmt);
    console.log(amount)
    msg4.textContent = "Transaction Successful, your balance is Rs. " + amount;
})