const rd = require('./psRead.js')

async function calldb()
{       
        var res = await rd.readPhotosDB();
        console.log(res);
        return(res);
}

exports.handler = async (event) => {

    var res = await calldb();
    const response = {
        statusCode: 200,
        result: res
    };

    return response;

};

