'use strict';

var fs = require("fs");
var path = require("path");

var __host;
var __port;
var __ports;
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
	getAppPortEnd : function(){ //deprecated (for now)
		return getConfig().appPortEnd;
	},
	getAppPorts : function(){ //deprecated (for now); see {root folder}/__raw/ports2.js for how it was used
		if(__ports) return __ports;

		__ports = [];
		for(var i = getConfig().appPortStart; i <= getConfig().appPortEnd; i++){
			__ports.push(i);
		}
		return __ports;
	},
	getAppPortStart : function(){ //deprecated (for now)
		return getConfig().appPortStart;
	},

	getDbHost : function(){
		return getConfig().dbHost;
	},
	getDbPort : function(){
		return getConfig().dbPort;
	},
	getFriendlyName : function(){
		return getConfig().friendlyName;
	},
	getFriendlyVersion : function(){
		return getConfig().friendlyVersion;
	},
	getHost : function(){
		if(__host) return __host;

		__host = getConfig().host;
		return __host;
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
	getPort : function(){
		if(__port) return __port;

		__port = getConfig().port;
		return __port;
	},
	getProtocol : function(){
		return getConfig().protocol;
	},
	getSessionSecret : function(){
		return getConfig().sessionSecret;
	},
	getVersion : function(){
		return getConfig().version;
	},

	setHost : function(host){
		__host = host;
	},
	setPort : function(port){
		__port = port;
	}
};