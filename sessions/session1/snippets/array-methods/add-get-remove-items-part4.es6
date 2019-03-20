var games = ['Minecraft', 'WoW'];
var result;

result = games.concat(['Fortnite', 'Fifa 19']);
console.log(result);
// ['Minecraft', 'WoW', 'Fortnite', 'Fifa 19']
console.log(games);
// ['Minecraft', 'WoW']

result = games.concat(['Fortnite'], ['Fifa 19']);
console.log(result);
// ['Minecraft', 'WoW', 'Fortnite', 'Fifa 19']

result = games.concat(['Fortnite'], 'Fifa 19');
console.log(result);
// ['Minecraft', 'WoW', 'Fortnite', 'Fifa 19']
