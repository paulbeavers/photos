#!/bin/bash

echo GetRestStatus.bash

#!/bin/bash

#-------------------------------------------------------------
# Example script to call restserver API
# adminuser
#-------------------------------------------------------------

curl -H "Content-Type: application/json"  \
        -X POST http://localhost:8080/event \
        -u master@stingraydb.io:stingraypw \
-d  @- <<'EOF'
{  "tenant_name":"stingraydb.io",
    "user_id":"paul",
    "password":"donald",
    "role":"ADMIN",
    "groups" : [ 
      { "name" : "group1",
	"owner" : "paulb",
        "member" : "debbie" 
      },
      { "name" : "group2",
	"owner" : "paulb",
        "member" : "debbie" 
      } ],
     "end" : "ending text" 
}

EOF


