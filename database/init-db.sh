#!/bin/bash

psql -U academic_user -d academic_platform -f schema.sql

echo "Database schema created successfully"