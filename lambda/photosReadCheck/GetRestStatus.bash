#!/bin/bash

echo GetRestStatus.bash

#!/bin/bash

#-------------------------------------------------------------
# Example script to call restserver API
# adminuser
#-------------------------------------------------------------

curl -H "Content-Type: application/json"  \
        -X GET  https://42cx6tgii7.execute-api.us-east-1.amazonaws.com/default/photosReadCheck
