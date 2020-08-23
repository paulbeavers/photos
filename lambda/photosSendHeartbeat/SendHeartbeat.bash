#!/bin/bash

echo GetRestStatus.bash

#!/bin/bash

#-------------------------------------------------------------
# Example script to call restserver API
# adminuser
#-------------------------------------------------------------

curl -H "Content-Type: application/json"  \
        -X GET https://uqtq3llyh7.execute-api.us-east-1.amazonaws.com/default/photosReadCheck
