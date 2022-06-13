        //This is my first javascript code.
        function skatter (){
        const inputName = require("readline");
        const lnName = inputName.createInterface({
                input: process.stdin,
                output: process.stdout,
                });
        
                        lnName.question("Hello, what is you name?", function (fullName){
                        console.log('Hello '+fullName);
                        lnName.close();

        });
        }

        skatter();

        const inputTotPayment = require("readline");
        const lnTot = inputTotPayment.createInterface({
                input: process.stdin,
                output: process.stdout,
                });
        
                        lnTot.question("How much is your bill?", function (totPayment){
                        console.log('Total bill is: '+totPayment);        
                        });
        
        const inputMonthlyPayment = require("readline");
        const lnMonthly = inputMonthlyPayment.createInterface({
                input: process.stdin,
                output: process.stdout,
                });
        
                        lnMonthly.question("How much will you pay every month?", function (monthlyPayment){
                        console.log('You will have to pay for: '+100/monthlyPayment +' months');
                        lnMonthly.close();
                        });
