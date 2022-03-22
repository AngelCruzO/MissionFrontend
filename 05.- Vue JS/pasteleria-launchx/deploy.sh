#!/usr/bin/env sh

set -e

npm run build

cd list

git init
git add .
git commit -m "New Deployment"
git push -f https://github.com/AngelCruzO/pasteleria-launchx.git main:gh-pages

cd -