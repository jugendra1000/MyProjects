// program in JS on account balance !!
var amt = 540000 

// function bank(){
//     console.log("####  W E L C O M E    T O    G A W A R    B A N K ####");
//     console.log("1. CHECK BALANCE \n 2. WITHDRAW AMOUNT \n 3. DEPOSITE AMOUNT \n 4. TRANSFER AMOUNT")
//     var ch = parseInt(prompt("ENTER YOUR CHOICE FROM ABOVE GIVEN OPTION"))
//     var name = prompt("ENTER YOUR ADDHAR NAME :")
//     var pin = parseInt(prompt("ENTER YOUR PIN TO PROCEED TO CHECK YOUR ACCOUNT BALANCE [4 digit privacy pin] :"))
    switch(ch){
        case 1:
            if (pin.length == 4){
                if (pin == pin){
                    console.log(amt + ": IS " + name +"CURRENT BANK BALANCE !")
                    console.log("THANK YOU VISIT AGAIN !")
            }}
            break
            
        case 2:
            prompt("ENTER YOUR 4 DIGIT PIN TO PROCEED FURTHER ! ")
            if (pin.length == 4){
                if (pin == pin){
                    var witd = parseInt(prompt("ENTER THE AMOUNT TO BE WTHDRAWN "))
                    if (amt > witd){
                        amt = amt - witd
                        console.log(amt + ": IS " + name +"CURRENT BANK BALANCE !")
                        console.log("THANK YOU VISIT AGAIN !")
                    }
                    else{
                        console.log(" KRUPYA HASYIAT SE PASIE NKIALE !!")
                        console.log("THANK YOU VISIT AGAIN !")
                        bank()
                    }
                    }
                }
            
            break 

        case 3:
            prompt("ENTER YOUR 4 DIGIT PIN TO PROCEED FURTHER ! ")
            if (pin.length == 4){
                if (pin == pin){
                    var depo = parseInt(prompt("ENTER THE AMOUNT TO BE DEPOSITED !"))
                    amt = amt + depo
                    console.log(amt + ": IS " + name +"CURRENT BANK BALANCE !")
                    console.log("THANK YOU VISIT AGAIN !")
                }
            }
            break

        case 4:
            prompt("ENTER YOUR 4 DIGIT PIN TO PROCEED FURTHER")
            if (pin.length == 4){
                if (pin == pin){
                    var upid = ("ENTER THE PERSON'S UPI ID TO PROCEED THE TRANSACTION : ")
                    var tnsfr = parseInt(prompt("ENTER THE AMOUNT TO BE TRANSFERED !"))
                    if (amt > tnsfr){
                        amt = amt - tnsfr
                        console.log(amt + ": IS " + name +"CURRENT BANK BALANCE !  and YOUR TRANSACTION IS SUCCESSFULL" )
                        console.log("THANK YOU VISIT AGAIN !")}
                    else {
                        console.log(" KRUPYA HASYIAT SE PASIE NKIALE !!")
                        console.log("THANK YOU VISIT AGAIN !")
                        bank()}
                    }
                }
            
            break
        
        default:
        }