const fs = require("fs");

global.creator = "Ririn Vieux";
global.apikey = ["notfound", "roseannev", "imrose"];

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update'${__filename}'`);
	delete require.cache[file];
	require(file);
});
