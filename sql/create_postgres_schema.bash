#!/bin/bash

echo creating schem

psql -h photos-db.cgeazz1epygk.us-east-1.rds.amazonaws.com -p 5432 -U postgres -f schema.sql

