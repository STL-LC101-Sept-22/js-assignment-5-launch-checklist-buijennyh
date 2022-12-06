// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   let clientInput = Number(testInput)
   if (testInput === "") {
       return "Empty"; 
     }
   else if (isNaN(clientInput) == true) {
       return "Is not a number"; 
       } else { 
           return "Is a Number"; 
       }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilot = document.getElementbyId("pilotName"); 
   let copilot = document.getElementbyId("copilotName"); 
   let fuelLevel = document.getElementbyId("fuelLevel"); 
   let cargoLevel = document.getElementbyId("cargoMass"); 
   let launchStatus = document.getElementbyId("launchStatus");
   let faultyItems = document.getElementbyId("faultyItems"); 
   let form = document.querySelector("form");

   faultyItems.style.visibility = "visible"; 

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
    } 

   if (validateInput(pilotInput) === "Is a Number" || validateInput(copilotInput) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
    alert("Make sure to enter valid information for each field!");
    
        if (fuelLevel < 10000 && cargoLevel <= 10000) {
         fuelStatus.innerHTML = "Fuel levels are too low for the journey. "
         cargoStatus.innerHTML = "Cargo mass is low enough for launch."
         launchStatus.innerHTML = "Shuttle not ready for launch."; 
         launchStatus.style.color = "red"; 
        
        } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "Fuel levels are too low  "   
            cargoStatus.innerHTML = "Cargo mass too heavy for launch!"
            launchStatus.innerHTML = "Shuttle not ready for launch."; 
            launchStatus.style.color = "red"; 
            
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuel.innerHTML = "Fuel level are high enough for the journey!"
            cargo.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red"; 
        
        } else {
            fuel.innerHTML = "Fuel level high enough for launch"
            cargo.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        }

   }


}




 
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
