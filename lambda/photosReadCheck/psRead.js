
var pg = require('pg');
var cf = require('./psConfig.js');

async function readPhotosDB() {

    var errorCode = 0;

    //------------------------------------------------
    // Setup database connection parameters
    //------------------------------------------------

    var client = new pg.Client(cf.dbConfig);

    //------------------------------------------------
    // Attempt to connect to the database
    //------------------------------------------------
    try {
        await client.connect();
    } catch (error) { 
	    console.log("error");
	    errorCode = -1;
    }	    

    //------------------------------------------------
    // Attempt to query the database 
    //------------------------------------------------
    var results;
    if (errorCode == 0) {
	try {
    		results = await client.query("SELECT * from photos_users")
	}
	catch (error) {
		errorCode = -2;
	}
    }

    //------------------------------------------------
    // Prepare the response code
    //------------------------------------------------
    if (errorCode == 0) {
    	var rowCount = results.rowCount;
    }
    else {
	rowCount = errorCode;
    }

    //------------------------------------------------
    // end the connection
    //------------------------------------------------
    await client.end();
    console.log("leaving");

    //---------------------------------------------------
    // return values 0 or greater we are successful 
    // -1 = cannot connect to database, -2 query failed 
    //---------------------------------------------------
    return(rowCount);
};

//------------------------------------
// Module Exports
//------------------------------------
module.exports.readPhotosDB = readPhotosDB;









