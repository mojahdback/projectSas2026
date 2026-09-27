const p = require("prompt-sync")();
let choice ;
let candidates = [
    {
    cin: "AB123",
    name: "Youssef",
    lastName: "Amrani",
    age: 35,
    politicalParty: "PAM",
    voters: ["V001", "V002", "V003"]
},{
    cin: "CD456",
    name: "Ahmed",
    lastName: "Alaoui",
    age: 42,
    politicalParty: "PI",
    voters: ["V004", "V005"]
},{
    cin: "EF789",
    name: "Omar",
    lastName: "Hassani",
    age: 39,
    politicalParty: "PAM",
    voters: ["V006", "V007", "V008", "V009"]
},{
    cin: "GH1011",
    name: "Hamza",
    lastName: "Bennani",
    age: 31,
    politicalParty: "RNI",
    voters: ["V010"]
},{
    cin: "IJ1213",
    name: "Mehdi",
    lastName: "Fassi",
    age: 45,
    politicalParty: "PI",
    voters: ["V011", "V012", "V013"]
}
];



function menu(){

  console.log("\n ==========  System Elections and Electoral Lists  ==========\n")  
  console.log("\t1. Add the candidates ")
  console.log("\t2. Display the candidates")
  console.log("\t3. To vote ")
  console.log("\t4. Search a candidate")
  console.log("\t5. Update a candidate")
  console.log("\t6. Delete a candidate")
  console.log("\t7. Statistics ")
  console.log("\t0. Exit\n")
  console.log("============================================")

}

function addCandidate(){

    let count = Number(p("How much candidate do you want to add : "));
    for(let i = 0 ; i < count ;i++){
          let virifi = 0
          console.log(`\n------- Enter Candidate : ${i+1} --------\n`);
          let cin = p("Enter CIN : ");
          for(let j = 0 ; j< candidates.length ;j++){
            if(cin.toUpperCase() === candidates[j].cin.toUpperCase()){
                virifi = 1;
                break;
               
            }
           
            }
          

          if(!virifi){

          let name = p("Enter Name : ");
          let lastName = p("Enter LastName : ");
          let age = Number(p("Enter Age : "));
          let politicalParty  = p("Enter political party : ");
          let voters = [];
          candidates.push({
             cin : cin ,
             name : name ,
             lastName : lastName,
             age : age ,
             politicalParty : politicalParty,
             voters : voters

          })
          console.log("\n --------------------------------\n")
          }
          else{
            console.log("\n --- already added...!")
          }

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
           for(let i = 0 ; i< candidates.length - 1; i++){
            for(let j = 0 ; j < candidates.length - 1 - i ; j++){
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
        if(candidates.length == 0){
          console.log("\n========> this array is Empty...!");
          console.log("-------------------------------------\n");

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
              if(vot.toUpperCase() == voter.toUpperCase()){
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
             if(candidates[i].cin.toUpperCase() === cinCandidate.toUpperCase() ){
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

function search(candidates) {

    let name = p("Enter your name of Candidate : ");
    let verfi = 0;

    for(let i =0 ; i< candidates.length ;i++){
               
              if(candidates[i].name.toUpperCase() === name.toUpperCase()){

                   console.log("\n ============== Found it ==============");
                   console.log(`\n ------------- Candidate ${i+1}------------\n`);
                   console.log(`\t CIN => ${candidates[i].cin}`);
                   console.log(`\t NAME => ${candidates[i].name}`);
                   console.log(`\t LAST NAME => ${candidates[i].lastName}`);
                   console.log(`\t AGE => ${candidates[i].age}`);
                   console.log(`\t PoliticalParty => ${candidates[i].politicalParty}`);
                   console.log(`\t NUMBER VOTERS => ${candidates[i].voters.length}`);
                   console.log(`______________________________________________\n`);
                  verfi = 1;
              }

           
    }

    if (verfi == 0) {
        console.log("\n===========================\n");
        console.log(`\tThe libry dosn't have any book has this ID => ${name} `);
        console.log("===========================\n");
    }
}

function modifyCandidate(candidates){
    let cin = p("Please Enter CIN the candidate : ");
    let here = 0
    for(let i =0 ; i< candidates.length ; i++){
        if(candidates[i].cin.toUpperCase()  === cin.toUpperCase()){
           here = 1 ;
           candidates[i].politicalParty = p("Enter a new partiPolitique : ");
           candidates[i].age = Number(p("Enter new your age : "));

        }
        if(here){
            break;
        }
    }

    if(!here){
        console.log("There is no find any CIN like that.");
    }


}

function deleteCandidate(candidates){
    let cin = p("Please Enter CIN the candidate : ");
    let here = 0
    for(let i =0 ; i< candidates.length ; i++){
        if(candidates[i].cin.toUpperCase()  === cin.toUpperCase()){
           here = 1 ;
           candidates.splice(i,1);
           break;
        }
      
    }

    if(!here){
        console.log("There is no find any CIN like that.");
    }

}

function statistics(candidates) {
     
    console.log("\n ----------- Statistics ---------------- \n")
    console.log("\n\t1 : Total the candidates . ");
    console.log("\t2 : Total of voters in all candidates .");
    console.log("\t3 : TOP 3  Candidates . ");
    console.log("\t4 : Total political Party . \n");

    let choice = Number(p("Choose a number bettween 1 / 4 : "));

    switch(choice){
        case 1 : let totalCandidates = candidates.length;
                  console.log("\n --------- TOTAL CANDIDATES ---------------")
                  console.log("\tTotal Candidates => " + totalCandidates);
                   break;
        case 2 :  let totalVoters = 0;
                    console.log("\n----------- TOTAL VOTERS -----------------");
                    for (let i = 0; i < candidates.length; i++) {
                        totalVoters = totalVoters + candidates[i].voters.length;
                    }
                    console.log("\n\tTotal Voters => " + totalVoters);
                    break;
        case 3 :    for (let i = 0; i < candidates.length; i++) {
                      for (let j = 0; j < candidates.length - 1; j++) {
                               if (candidates[j].voters.length < candidates[j + 1].voters.length) {
                                      let temp = candidates[j];
                                       candidates[j] = candidates[j + 1];
                                          candidates[j + 1] = temp;
                                }
                        }       
                    }
                    
                    console.log("\n\tTop 3 Candidates :\n");
                    console.log("\tCandidate 1 =>  Name : " + candidates[0].name);
                    console.log("\t\t\tPolitical Party : " + candidates[0].politicalParty);
                    console.log("\t\t\tVoters : " + candidates[0].voters.length +"\n");
                    console.log("\tCandidate 2 =>  Name : " + candidates[1].name);
                    console.log("\t\t\tPolitical Party : " + candidates[1].politicalParty);
                    console.log("\t\t\tVoters : " + candidates[1].voters.length +"\n");
                    console.log("\tCandidate 3 =>  Name : " + candidates[2].name);
                    console.log("\t\t\tPolitical Party : " + candidates[2].politicalParty);
                    console.log("\t\t\tVoters : " + candidates[2].voters.length +"\n");
                    break;
        case 4 :   console.log("\n-------------- Total Policy -----------------");
                   let n = [];
                    for (let i = 0; i < candidates.length; i++) {
                            if (!n[i]) {
                            n[i] = 1;
                            let count = 1;
                            for (let j = i + 1; j < candidates.length; j++) {
                                    if (candidates[i].politicalParty === candidates[j].politicalParty) {
                                    count++;
                                    n[j] = 1;
                                    }
                            }
                            console.log("\t\t"+ candidates[i].politicalParty + " : " + count);
                            }
                    }
                    break;
        default:  console.log("Invalide choice !");
                  break;
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
    case 4 : search(candidates);
             p("Click to move...!");
             console.clear();
             break;
    case 5 : modifyCandidate(candidates);
             p("Click to move...!");
             console.clear();
             break;
    case 6 : deleteCandidate(candidates);
             p("Click to move...!");
             console.clear();
             break ;
    case 7 : statistics(candidates);
             p("\nClick to move...!");
             console.clear();
             break ;
    case 0 : console.log("\n The Program Exit...! \n");
             break ;
    default : console.log("Please choose a number between 1 to 7 Or 0 to Exit .");
            break ;
   
  }
    
}while(choice !== 0 );




