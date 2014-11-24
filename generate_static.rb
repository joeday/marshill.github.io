#!/usr/bin/env ruby

# Just run this with `ruby generate_static.rb`. It will convert the slim to html.

require 'slim'

Slim::Engine.default_options[:pretty] = true

puts "Creating static site..."

l = File.read("views/layout.slim")
layout = Slim::Template.new { l }

files = Dir['views/*']
files.reject! { |f| f.match(/layout/) }

files.each do |file|
  dir = File.basename(file, '.*')

  unless dir == 'index'
    Dir.mkdir(dir)
  end

  c = File.read(file)
  file_contents = Slim::Template.new { c }.render

  html = layout.render { file_contents }

  html << "\n"

  file_name = "index.html"

  unless dir == 'index'
    file_name = "#{File.basename(file, '.*')}/#{file_name}"
  end

  File.write(file_name, html)
end

puts "Done."