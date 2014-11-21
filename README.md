marshill.github.io
==================

## Setup

Run these commands:

    gem install shotgun
    shotgun app.rb

Go to [http://localhost:9393](http://localhost:9393).

## Development

URLs like `/foo` will look for a slim file named `views/foo.slim`. If that file
doesn't exist, it will just look for the file `/foo`. So when you are referring
to CSS or JavaScript files, use the full path (relative to here) including the
extension.

## Deployment

Pushing this up to GitHub will automatically make it available at
[http://marshill.github.io](http://marshill.github.io) (once Lars sets it up).
If you don't want it to instantly be publicly available, use a different branch
than master.
