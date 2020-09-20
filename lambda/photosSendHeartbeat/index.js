
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
                headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Access-Control-Allow-Methods': 'GET',
                },
                body: res,
        };
        return response;
};



