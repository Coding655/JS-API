/* filter: Filter select elements based on a condition and returns an array with the elements that fulfilled the condition */
const numbers =  [4, 5, 6, 2, 8];
const playerAge = [75,55,40,36,28,69,76,78,79];
const selected = playerAge.filter(p => p > 20);
// console.log(selected);
//you can use a conditions to use filter and filter will returns you the conditions.


// Now select a odd number:
/* its the math of odd calculations of playerAge */
const oddSelect = playerAge.filter(p => p % 2 ===1 );
// // console.log(oddSelect);

// //more calculations of filter

const friends = [ "array", "object", "mafia", "bahubali", "tom", "gom" ];
const nameFilter = friends.filter(f => f.length > 3);
// console.log(nameFilter);

/* Now try find */
const players = [ 75, 45, 55, 88, 74];
const  selectedPlayers = players.find(player => player > 90);
// console.log(selectedPlayers);



/* #Home Work#-> now do this for yourself: find the difference between find and filter */