var games = ['Minecraft', 'Fortnite', 'Fifa 19', 'WoW'];
var result = games.slice(1, 3);
console.log(result);
// ['Fortnite', 'Fifa 19']
console.log(games);
// ['Minecraft', 'Fortnite', 'Fifa 19', 'WoW']


result = games.slice(0, 2);
console.log(result);
// ['Minecraft', 'Fortnite']
console.log(games);
// ['Minecraft', 'Fortnite', 'Fifa 19', 'WoW']


result = games.slice(-2);
console.log(result);
// ['Fifa 19', 'WoW']
console.log(games);
// ['Minecraft', 'Fortnite', 'Fifa 19', 'WoW']
