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

function displayCandidate(candidates){
       let choice ;

       do{
         console.log("\n************** Choose how to display the Candidates ****************\n");
         console.log("1 : Sort the candidates by number the voter.");
         console.log("2 : Display only the candidates Specific policy.");
         console.log("3 : Display all candidates .");
         console.log("0 : Exit ") ;


       choice = Number(p("Choose a number 1 / 2 / 3 OR zero to Exit . "));

       if(choice == 1){
           for(let i =0 ; i< candidates.length ; i++){
            for(let j =0 ; j < candidates.length -1 ; j++){
                if(candidates[j].voters.length < candidates[j +1].voters.length){
                      let temp = candidates[j]
                      candidates[j] = candidates[j+1]
                      candidates[j+1] = temp
                }
            }
          }
          for(let i =0 ; i< candidates.length ; i++){
            console.log(`\n =========== Candidate ${i+1} ===========\n`);
            console.log(`\t CIN => ${candidates[i].cin}`);
            console.log(`\t NAME => ${candidates[i].name}`);
            console.log(`\t LAST NAME => ${candidates[i].lastName}`);
            console.log(`\t AGE => ${candidates[i].age}`);
            console.log(`\t PoliticalParty => ${candidates[i].politicalParty}`);
            console.log(`\t NUMBER VOTERS => ${candidates[i].voters.length}`);
            console.log(`______________________________________________\n`);

          }
         
       }
       else if(choice == 2){
             let choice = p("Enter name of policy that you want to display : ");
             let virfy = 0
              for(let i =0 ; i< candidates.length ; i++){
  
                 if(candidates[i].politicalParty.toUpperCase() == choice.toUpperCase() ){

                   console.log(`\n =========== Candidate ${i+1} ===========\n`);
                   console.log(`\t CIN => ${candidates[i].cin}`);
                   console.log(`\t NAME => ${candidates[i].name}`);
                   console.log(`\t LAST NAME => ${candidates[i].lastName}`);
                   console.log(`\t AGE => ${candidates[i].age}`);
                   console.log(`\t PoliticalParty => ${candidates[i].politicalParty}`);
                   console.log(`\t NUMBER VOTERS => ${candidates[i].voters.length}`);
                   console.log(`______________________________________________\n`);
                   virfy = 1;
                     
                }
            }
            if(!virfy){
              console.log("\n----------------------------------");
              console.log("======> THIS POLICY NOT FIND...!");
              console.log("------------------------------------\n");

          }


       }

       else if(choice == 3){
         for(let i =0 ; i< candidates.length ; i++){

                   console.log(`\n =========== Candidate ${i+1} ===========\n`);
                   console.log(`\t CIN => ${candidates[i].cin}`);
                   console.log(`\t NAME => ${candidates[i].name}`);
                   console.log(`\t LAST NAME => ${candidates[i].lastName}`);
                   console.log(`\t AGE => ${candidates[i].age}`);
                   console.log(`\t PoliticalParty => ${candidates[i].politicalParty}`);
                   console.log(`\t NUMBER VOTERS => ${candidates[i].voters.length}`);
                   console.log(`______________________________________________\n`);

                                
        }
      } 
      else if(choice == 0){
            console.log("\tExit...!\n");
            break;

      }
       else{
            console.log("\n ==> Please choose 1 OR 2 OR 3 . \n")
       }

       }while(choice !== 0);
      

}

function votingCandidate(candidates){

      console.log("\n============== Welcome to voting ==============\n");
      let voter = p("Enter your CIN : ");
      console.log("Please wait to cheack...!");
      console.clear();
      let virfy = 0
      for (let  candidate of candidates) {
          for (let  vot of candidate.voters) {
              if(vot == voter){
               virfy = 1 ;
               
              } 
          }
          if(virfy){
            break;
          }
      }
  
     
      if(!virfy){
        let findCin = 0;
        console.log("\n its ok ...");
        console.clear();
        let cinCandidate = p("Now give me CIN Candidate that you want to vote :")
        for(let i =0 ;i< candidates.length ;i++){
             if(candidates[i].cin === cinCandidate ){
                candidates[i].voters.push(voter);
                findCin = 1;
                break;
             }
      
        }
        if(!findCin){
        console.log("I don't have any CIN in the candidate .");
        }
       
      }
      else{
        console.log("You can't voter two times already voting");
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
    case 2 : displayCandidate(candidates);
             p("Click to move...!");
             console.clear();
             break ;
    case 3 : votingCandidate(candidates);
             p("Click to move...!");
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




