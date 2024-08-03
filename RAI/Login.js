logo.addEventListener("click", ()=>{
    window.location.href = "Home.html";
})

const userName = document.getElementById("username")
const password = document.getElementById("password")

let userData = {
    "jugendra1000" : 123456,
    "Mohit" : 1254
}

loginBtn.addEventListener("click", ()=>{
    if (userName.value == 0 || password.value == 0){
        alert("Please fill all fields.")
    }else if (Object.keys(userData).includes(userName.value)){
        if (userData[userName.value] == password.value){
            alert("Login Sucessfully!")
        }
        }else {
            alert("Invalid Username or Password");
            }
})