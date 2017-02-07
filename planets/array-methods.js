var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function(item, index){
  var el = document.getElementById("planets").innerHTML = `<p>Planets:  ${planets}</p>`;
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalized = planets.map(function(planets){
  return planets.charAt(0).toUpperCase(planets[0]);
});
console.log(capitalized);

// Use the filter method to create a new array that contains planets with the letter 'e'

var planetEs = [];

var letterE = planets.filter(function(planet){
    var addToEArray = filterMe(planet);
    console.log("letterE Array ", planetEs);
      return;
});

function filterMe (eachplanet) {
    var arrayOfLetters = eachplanet.split("");
    var doIHaveAnE = arrayOfLetters.indexOf("e");
    if (doIHaveAnE !== -1) {
        planetEs.push(eachplanet);
    }
}

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var sentence = words.reduce(function(prev, curr){
  console.log('curr: ', curr);
  return prev + ' ' +  curr;
});
console.log('sentence:', sentence);