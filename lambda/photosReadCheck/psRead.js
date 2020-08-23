
var pg = require('pg');

async function readPhotosDB() {

    var errorCode = 0;

    //------------------------------------------------
    // Setup database connection parameters
    //------------------------------------------------

    var dbConfig = {
        user: 'photos_user',
        password: 'photospw',
        database: 'photosdb',
        host: 'photos-db.cgeazz1epygk.us-east-1.rds.amazonaws.com',
        port: 5432
    };

    var client = new pg.Client(dbConfig);

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









