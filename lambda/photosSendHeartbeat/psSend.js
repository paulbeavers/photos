


'use strict';

async function calldb()
{

var pg = require('pg');
var rd = require('./psSendHeartbeat.js')


var sData = {
	        tenantname: 'photos.io',
	        hostname: 'localhost',
	        message: 'hellow',
	        uuid: 'uuid',
	        systemtime: 'mmddyy'
};

var res = await rd.sendHeartbeat(sData);

console.log("after call");
console.log(res);

}

calldb();



















