
const sh = require('./psSendHeartbeat.js')

async function calldb(sd)
{       
	        var res = await sh.sendHeartbeat(sd);
	        console.log(res);
	        return(res);
}

exports.handler = async (event) => {

	    var res = await calldb(event);
	    const response = {
		            statusCode: 200,
		            result: res
		        };

	    return response;

};


