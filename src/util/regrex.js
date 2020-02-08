

   const findAllDollarExpense =()=> {

// it will get all expense in the text
    let finalYearBudget = "My final year project is Liveness Fingerprint which cost more than $1000," +
        "importation too will cost $100 and i also need $5000 for refreshment ";

       let budgetPattern = /\$(\d+)\s?/g;
        console.log(`nlist of $ occurnece => ${finalYearBudget.match(budgetPattern)}`);
   };

