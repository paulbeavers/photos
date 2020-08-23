


'use strict';

async function calldb()
{

var pg = require('pg');
var rd = require('./psRead.js')

var res = await rd.readPhotosDB();

console.log("after call");
console.log(res);

}

calldb();



















