marshill.github.io
==================

## Setup

Run these commands:

    gem install shotgun slim sinatra-assetpack sass
    shotgun app.rb

Go to [http://localhost:9393](http://localhost:9393).

## Development

URLs like `/foo` will look for a slim file named `views/foo.slim`. If that file
doesn't exist, it will just look for the file `/foo`. So when you are referring
to CSS or JavaScript files, use the full path (relative to the project root) including the
extension.

## Deployment

Run the rendering script with `ruby generate_static.rb`. This will create the
HTML in a nice structure. Add the files to the repository and commit them.

Now, pushing this up to GitHub will automatically make it available at
[http://marshill.github.io](http://marshill.github.io).
If you don't want it to instantly be publicly available, use a different branch
than master.
