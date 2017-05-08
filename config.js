'use strict';

var fs = require("fs");
var path = require("path");

var __config;
var getConfig = function(){
	if(__config) return __config;

	//fs.readFile(__dirname + 'config.json', 'utf8', function (err, data) {
	//	__config = JSON.parse(data);
	//});

	var data = fs.readFileSync(path.join(__dirname, './../../sys/server/config.json')); //deliberately reading the file sync
	__config = JSON.parse(data);
	return __config;
}

module.exports = {
	getFriendlyName : function(){
		return getConfig().friendlyName;
	},
	getFriendlyVersion : function(){
		return getConfig().friendlyVersion;
	},
	getMinimumVersion : function(){
		return getConfig().minimumVersion;
	},
	getMultiWindow : function(){
		return getConfig().multiWindow;
	},
	getName : function(){
		return getConfig().name;
	},
	getVersion : function(){
		return getConfig().version;
	}
};