var readline=require("readline-sync")
var user=readline.question("enter the name: ")
if( user>"a"& user<"z"){
var name=readline.question("enter the surname")


    var id=readline.question("enter your email address or phone number")
    if (id>"a"& id<"z"|| id>"0" & id<"9"|| id=="@");
        var password=readline.question("enter the password")
        if (password>"a"& password <"z"|| password<"9"||password=="@"){
            // console.log("its strong password")
        }
            var date=readline.question("enter the birth of date")
            if (date>"0" & date<"9");
                var gender=readline.question("enter the gender")
                if (gender=="female"|| gender=="male"){
                    console.log("your account is created successfully")
                }
                else{
                   console.log ("abx")
                
                }
}
//             {else
//                 console.log("qwert")  
//         else:
//             print("yuiop")
//     else:
//         print("fjjj")  
// else:
//     print("hhfjc")
