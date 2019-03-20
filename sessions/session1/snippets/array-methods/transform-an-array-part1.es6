var games = [
  {
    name: 'Minecraft',
    published: 2009,
  },
  {
    name: 'Fortnite',
    published: 2017,
  },
];
var result;

result = games.map((item, index, array) => item.name);
console.log(result);
// ['Minecraft', 'Fortnite']
console.log(games);
// [{name: 'Minecraft', published: 2009,},{name: 'Fortnite', published: 2017,}]

const arr = [10, 2, 15, 20, 1];
arr.sort();
console.log(arr);
// [1, 10, 15, 2, 20]

arr.sort((a, b) => a - b);
console.log(arr);
// [1, 2, 10, 15, 20]

arr.reverse();
console.log(arr);
// [20, 15, 10, 2, 1]
