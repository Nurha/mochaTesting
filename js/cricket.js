//that solves the following riddle.
//The common field cricket chirps in direct proportion to the current tem­perature.
//Adding 40 to the number of times a cricket chirps in a minute, then dividing by 4,
//gives us the temperature (in Fahrenheit degrees).
//Write a program that takes the number of cricket chirps in fifteen seconds as a parameter,
//then outputs the current temperature to the nearest half degree.

function cricket(numberOfCricketChripsInFifteenSeconds) {

var numberOfChirpsInAMinute = numberOfCricketChripsInFifteenSeconds * 4;

var temperatureInFarenheit = (numberOfChirpsInAMinute + 40) / 4;

var tempToTheNearesHalfADegree =   temperatureInFarenheit / 2;

 return tempToTheNearesHalfADegree;

}

console.log(cricket(30));

module.exports = cricket;
