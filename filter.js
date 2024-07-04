// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59]
// const selected = players.filter(p => p > 70);
const selected = numbers.filter(p => p > 10);
console.log(selected)

const friends = ['Tina', 'Meena', 'Tisha','Raju', 'Mishu'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends);