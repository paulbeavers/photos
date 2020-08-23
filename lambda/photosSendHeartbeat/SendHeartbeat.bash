#!/bin/bash

#-------------------------------------------------------------
# Example script to call restserver API
# adminuser
#-------------------------------------------------------------

uuid=$(cat ".uuid")
hostname=$(hostname)
systemtime=$(date)

if [ -z "$uuid" ] 
	then  
		uuid=$(uuidgen) 
		echo $uuid >> .uuid
	fi

curl -H "Content-Type: application/json"  \
        -X POST  https://bnzh9468qc.execute-api.us-east-1.amazonaws.com/default/photosSendHeartbeat \
-d  @<(cat <<EOF

{   "tenantname": "stingraydb.io", 
    "name":"master@singraydb.io",
    "uuid":"$uuid",
    "hostname":"$hostname",
    "systemtime":"$systemtime",
    "message":"Hello world"
}

EOF
)


