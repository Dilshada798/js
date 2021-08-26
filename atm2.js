var readline=require("readline-sync")
var atmCard=readline.question("enter the atm card: ")
if (atmCard == "credit card" || atmCard=="debit card"){
    console.log("start transaction: ");
    var balance=readline.questionInt("enter the balance: ")
    if (balance>=2000 || balance<=10000){
        console.log("suffiecient");
        var language=readline.question("enter the language: ")
        if (language=="english" || language=="hindi"){
             console.log("select language");
            var account=readline.question("enter the account: ")
            if (account=="saving" || account=="current"){
                console.log("select the account");
                var pin=readline.questionInt("enter the pin: ")
                if (pin==1234){
                    console.log("pin is correct");
                    var amount=readline.questionInt("enter the amount: ")
                    if (amount>0 && amount<1000){
                        console.log("transaction is completed: ");
                        var reciept=readline.question("enter the reciept: ")
                        if (reciept=="yes" || reciept=="no"){
                            console.log("take your reciept");
                            }    
                        else {
                            console.log("not applicable");
                        }
                    }    
                    else {
                        console.log("not applicable");
                    }
                }    
                else {
                    console.log("not applicable");
                }
            }    
            else {
                console.log("not applicable");
            }
        }    
        else {
            console.log("not applicable");
        }
    }   
    else {
        console.log("not applicable");
    }
}    
else {
    console.log("not applicable")("not applicable");
}





// var readline=require("readline-sync")
// var atmCard=readline.question("enter the atm card: ")
// if (atmCard == "credit card" || atmCard=="debit card"){
//     console.log("start transaction: ");
//     var card=readline.question("enter the card:")
//     if (card=="chip card"){
//         console.log("proceed");
//         var balance=readline.questionInt("enter the balance: ")
//         if (balance>=2000 || balance<=10000){
//         console.log("suffiecient");}
//         var customer=readline.question("enter the customer request: ")
//         if (customer=="money withdrawl"||customer=="mini statement"){
//             console.log("you can proceed further");}
//         var language=readline.question("enter the language: ")
//         if (language=="english" || language=="hindi"){
//             console.log("language selected");
//             var account=readline.question("enter the account: ")
//             if (account=="saving" || account=="current"){
//                 console.log("account selected");
//                 var pin=readline.questionInt("enter the pin: ")
//                 if (pin=="4-digit"||pin=="6-digit"){
//                     console.log("pin is correct");
//                     var amount=readline.questionInt("enter the amount: ")
//                     if (amount>0 && amount<10000){
//                         console.log("transaction is completed: ");
//                         var reciept=readline.question("do you want the reciept: ")
//                         if (reciept=="yes" ){
//                             console.log("take your reciept");
//                             }    
//                         else {
//                             console.log("you can proceed");
//                         }
//                     }    
//                     else {
//                         console.log("you do not have sufficient balance");
//                     }
//                 }    
//                 else {
//                     console.log("incorrect pin");
//                 }
//             }    
//             else {
//                 console.log("not applicable");
//             }
//         }    
//         else {
//             console.log("not applicable");
//         }
//     }   
//     else {
//         console.log("insuffiecient");
//     }
// }    
// else {
//     console.log("debit card");
// }