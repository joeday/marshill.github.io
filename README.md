marshill.github.io
==================

## Setup

Run these commands:

    gem install shotgun slim sinatra-assetpack sass
    shotgun app.rb

Go to [localhost:9393](http://localhost:9393).

## Development

Use the `development` branch. `master` is for static only.

URLs like `/foo` will look for a slim file named `views/foo.slim`. If that file
doesn't exist, it will just look for the file `/foo`. So when you are referring
to CSS or JavaScript files, use the full path (relative to the project root)
including the extension.

## Deployment

Make sure the app is running on port 9393. Then, on `development` branch run:

    wget -r -nH localhost:9393
    git add --all
    git stash
    git checkout master
    git rm -r *
    git stash apply
    
You can test the static site with `python -m SimpleHTTPServer`. Go to [localhost:8000](http://localhost:8000)

Commit and push, and the site will be available at [marshill.github.io](http://marshill.github.io).
