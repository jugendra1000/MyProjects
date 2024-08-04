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

userData = {
    name: "Jugendra Kashyap",
    pin: 1234,
    accountNumber: "xxxxxxxxxx5649",
    balance: 10000,
    debitCardNumber: 5555555555555555
}
userData.balance = parseInt(userData.balance, 10);

Btn1.addEventListener("click", () => {
    if (balance.value == userData.debitCardNumber) {
        msgb1.textContent = "Jugendra Kashyap";
        msgp1.textContent = "A/c no. " + userData.accountNumber;
        pin1.style.display = "block";
        Btn1.style.display = "none";
        Btn01.style.display = "block";
    } else if (balance.value == 0) {
        alert("Please fill Debit Card number");
    } else {
        alert("Please enter a valid Debit Card number.");
    }
})

Btn01.addEventListener("click", () => {
    if (pin1.value == userData.pin){
        msg1.textContent = "Your bank balance is Rs." + userData.balance;
    } else {
        alert("Please enter a valid 4-digit PIN.");
    }
})

Btn2.addEventListener("click", () => {
    withdrawl.value = parseInt(withdrawl.value, 10);
    if (withdrawl.value%100 == 0 && pin2.value == userData.pin) {
            userData.balance = userData.balance - withdrawl.value
        msg2.textContent = "Transaction Successful, your balance is Rs. " + userData.balance;
    } else if (withdrawl.value == 0) {
        alert("Please fill withdrawing amount");
    } else if (withdrawl.value%100 !== 0){
        alert("Amount must be multiple of 100");
    } else if (pin2.value == 0){
        alert("Please enter PIN");
    } else if (pin2.value !== userData.pin){
        alert("Please enter correct PIN");
    }
})

Btn3.addEventListener("click", () => {
    deposit.value = parseInt(deposit.value, 10);
    if (deposit.value%100 == 0 && pin3.value == userData.pin) {
        userData.balance = userData.balance + deposit.value
        msg3.textContent = "Transaction Successful, your balance is Rs. " + userData.balance;
    } else if (deposit.value == 0) {
        alert("Please fill deposit amount");
    } else if (deposit.value%100 !== 0){
        alert("Amount must be multiple of 100");
    } else if (pin3.value == 0){
        alert("Please enter PIN");
    } else if (pin3.value !== userData.pin){
        alert("Please enter correct PIN");
    }
})



Btn4.addEventListener("click", () => {
    let transAmt = document.getElementById("transfer").value;
    console.log(transAmt)
    console.log(parseInt(transAmt))
    amount = amount - parseInt(transAmt);
    console.log(amount)
    msg4.textContent = "Transaction Successful, your balance is Rs. " + amount;
})