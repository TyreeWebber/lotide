const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); //Fail
assertEqual(1, 1); //Pass
assertEqual("Tyree", "Tyson"); //Fail
assertEqual("tyreeisanokaycoder", "TyreeIsAnOkayCoder"); //Fail
assertEqual("Kendra is a stinky", "Kendra is a stinky"); //Pass