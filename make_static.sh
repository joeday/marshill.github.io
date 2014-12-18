#!/bin/bash

wget -r -nH localhost:9393
rm -r images
mkdir images
cp app/images/* images/
echo "marshill.red" > CNAME
git add --all
git stash
git checkout master
git pull
git rm -r *
git stash apply
git commit -au -m "Updated `date`"
git push
