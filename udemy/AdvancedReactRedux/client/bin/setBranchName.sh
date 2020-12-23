#!/bin/sh

echo "REACT_APP_GIT_BRANCH=$(git symbolic-ref HEAD || echo devlop | sed -e 's,.*/\(.*\),\1,')" > .env
cat .env