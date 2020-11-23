#!/bin/sh

echo "REACT_APP_GIT_BRANCH=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')" > .env