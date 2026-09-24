const p = require("prompt-sync")();
let choice ;
let candidates = [];
let candidate = {}





function menu(){

  console.log("\n ==========  System Elections and Electoral Lists  ==========\n")  
  console.log("\t1. Add the candidates ")
  console.log("\t2. Display the candidates")
  console.log("\t3. To vote ")
  console.log("\t6. Search a candidate")
  console.log("\t4. Update a candidate")
  console.log("\t5. Delete a candidate")
  console.log("\t7. Statistics ")
  console.log("\t0. Exit\n")
  console.log("============================================")

}

function addCandidate(){

    let count = Number(p("How much candidate do you want to add : "));
    for(let i = 0 ; i < count ;i++){
          console.log(`\n------- Enter Candidate : ${i+1} --------\n`);
          let id = Number(p("Enter ID : "));
          let cin = p("Enter CIN : ");
          let name = p("Enter Name : ");
          let lastName = p("Enter LastName : ");
          let age = Number(p("Enter Age : "));
          let politicalParty  = p("Enter political party : ");
          let voters = [];
          candidates.push( candidate = {
             id : id ,
             cin : cin ,
             name : name ,
             lastName : lastName,
             age : age ,
             politicalParty : politicalParty,
             voters : voters

          })
          console.log("\n --------------------------------\n")
    }

}

do{

menu();
choice = Number(p("Choose a number : "));

  switch(choice){

    case 1 : addCandidate();
             p("Click to move...!");
             console.clear();
             break;
    case 2 : 
             p("Click to move...!");
             console.clear();
             break ;
    case 3 : p("Click to move...!");
             console.clear();
             break ;
    case 4 : p("Click to move...!");
             console.clear();
             break;
    case 5 : p("Click to move...!");
             console.clear();
             break;
    case 6 : p("Click to move...!");
             console.clear();
             break ;
    case 7 : p("Click to move...!");
             console.clear();
             break ;
    case 0 : console.log("\n The Program Exit...! \n");
             break ;
    default : console.log("Please choose a number between 1 to 7 Or 0 to Exit .");
            break ;
   
  }
    
}while(choice !== 0 );




