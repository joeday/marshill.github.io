#!/bin/bash

wget -r -nH localhost:9393
rm -r images
mkdir images
cp app/images/* images/
git add --all
git stash
git checkout master
git rm -r *
git stash apply
