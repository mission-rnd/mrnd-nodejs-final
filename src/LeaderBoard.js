var fs = require('fs');

//USE THESE CONTANTS
var USERS_FILE_NAME = 'users.csv';
var LESSON1_FILE_NAME = "lesson1.csv";
var LESSON2_FILE_NAME = "lesson2.csv";
var LEADERBOARD_SMALL_FILE_NAME = "leaderboardsmall.csv";
var LEADERBOARD_LARGE_FILE_NAME = "leaderboardlarge.csv";

/*
40% of the test cases will be on LeaderBoard Small .
60% of the test cases will be on LeaderBoard Large.
*/
/*
USE relative paths only , we already provided the path till the folder
where the 3 files will be . you just need to constuct final path from there.
Dont hard code paths like
readFile("C\\Users\\ironman\\MissionRnDProjects\mrnd-final\src\data\testcase1.csv");
writeFile("C\\Users\\ironman\\MissionRnDProjects\mrnd-final\src\data\leaderboardsmall.csv");
DONT HARD CODE IT . YOU WILL GET 0 Marks .
*/

//This function is used to generate leaderboardsmall.csv in the same folder
exports.generateLeaderBoardSmall = function (folderPath, callback) {
    callback(null);

}


//This function is used to generate leaderboardlarge.csv in the same folder
exports.generateLeaderBoardLarge = function (folderPath, callback) {

    callback(null);

}
