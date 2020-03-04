#!/bin/bash
echo "Configuring dragonstackdb"

dropdb dragonstackdb
createdb dragonstackdb


psql dragonstackdb < ./bin/sql/generation.sql 
psql dragonstackdb < ./bin/sql/dragon.sql

echo "dragonstackdb finsihed configuring "