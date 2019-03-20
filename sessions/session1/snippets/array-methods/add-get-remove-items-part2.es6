var games = ['Minecraft', 'Fortnite', 'WoW'];
var result = games.splice(1, 1);
console.log(result);
// ['Fortnite']

console.log(games);
// ['Minecraft', 'WoW']

games = ['Minecraft', 'Fortnite', 'WoW'];
result = games.splice(1, 1, 'StarCraft');
console.log(result);
// ['Fortnite']

console.log(games);
// ['Minecraft', 'StarCraft', 'WoW']

games = ['Minecraft', 'Fortnite', 'WoW'];
result = games.splice(-1, 0, 'StarCraft');
console.log(result);
// []

console.log(games);
// ['Minecraft', 'Fortnite', 'StarCraft', 'WoW']
