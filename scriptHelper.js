// Write your helper functions here!
require("isomorphic-fetch")

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = 
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`; 
 }

function validateInput(testInput) {
const IS_NOT_A_NUMBER = "is not a number"; 
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return IS_NOT_A_NUMBER;
  } else {
    return "Is a Number";
  }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  /*let pilot = document.getElementbyId("pilotName"); 
   let copilot = document.getElementbyId("copilotName"); 
   let fuelLevel = document.getElementbyId("fuelLevel"); 
   let cargoMass = document.getElementbyId("cargoMass"); 
   let launchStatus = document.getElementbyId("launchStatus");
   let faultyItems = document.getElementbyId("faultyItems"); 
   let form = document.querySelector("form"); */
  
    const IS_NOT_A_NUMBER = "is not a number"; 
  let launchStatus = document.getElementById("launchStatus");
        //edit the innerHTML
 

  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoMass) === "Empty"
  ) {
    alert("All fields are required!");
  } else if (
    validateInput(fuelLevel) === IS_NOT_A_NUMBER ||
    validateInput(cargoMass) === IS_NOT_A_NUMBER
  ) {
    alert("Make sure to enter valid information for each field!");

  } else {

       list.style.visibility = "visible";
       pilotStatus.innerHTML = `Pilot ${pilot} is ready`
       copilotStatus.innerHTML = `Copilot ${copilot} is ready`

     if (fuelLevel < 10000 && cargoMass <= 10000) {
           fuelStatus.innerHTML = "Fuel level too low for launch";
           cargoStatus.innerHTML = "Cargo mass low enough for launch"
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "red";
       
        } else if (fuelLevel >= 10000 && cargoMass > 10000) {
           fuelStatus.innerHTML = "Fuel level high enough for launch"; 
           cargoStatus.innerHTML = "Cargo mass too heavy for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "red";
       
        } else if (fuelLevel < 10000 && cargoMass >= 10000) { 
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
            
       } else {
           fuelStatus.innerHTML = "Fuel level high enough for launch"
           cargoStatus.innerHTML = "Cargo mass low enough for launch"
           launchStatus.innerHTML = "Shuttle is Ready for Launch";
           launchStatus.style.color = "green";
       }
   }

}

 async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
