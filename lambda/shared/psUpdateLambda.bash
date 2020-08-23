#!/bin/bash

echo psUpdateLambda

source ./lambda.conf

#----------------------------------------------
# Delete existing zip file
#----------------------------------------------
rm psLambda.zip


#----------------------------------------------
# Create new zip file
#----------------------------------------------
zip -j psLambda.zip $ZIPFILES


#----------------------------------------------
# Update the code in the Lambda function
#----------------------------------------------
aws lambda update-function-code --function-name $FUNCTION_NAME --zip-file fileb://psLambda.zip --publish 



