const assertArraysEqual = require('../assertArraysEqual');

//Test
assertArraysEqual(["stickbug", "stinkbug", "bugbug"], ["stickbug", "stinkbug", "bugbug"]);
assertArraysEqual(["stickbug", "stinkbug", "bugbug"], ["stickbug", "stinkbug", "bug"]);