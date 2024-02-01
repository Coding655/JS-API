/* this function is look more short like others. Its call (=>) arrow function (=>) */

const numbers = [1,2,3,4,5,6];
//multiplication:
const doubled1 = numbers.map(num => num * 2);
//addition:
const doubled2 = numbers.map(num => num + 2);
//division:
const doubled3 = numbers.map(num => num / 2);
//subtraction:
const doubled4 = numbers.map(num => num - 2);

console.log(doubled1,doubled2,doubled3,doubled4);

/* you can make more calculations with it like- (addition/division/multiplication/subtraction) */
// # map er kaj hoilo kono akta array er jonno akta shortcut function toiri kora.
/* More use of map- */

const friends = [ "abul khair", "akis mondol", "masir abba", "AKC"];
const lengths = friends.map(f => f.length);
console.log(lengths);

const friendsName = friends.map(n => n[1]);
console.log(friendsName);