#!/usr/bin/env ruby

# Just run this with `ruby generate_static.rb`. It will convert the slim to html.

require 'slim'
#require 'uglifier'

def replace_slim_call(string)
  string.gsub(/^( *={1,2} )slim :(.*)/, '\1 (f = File.read("views/\2.slim"); Slim::Template.new { f }.render)')
end

def prepare_layout
  puts " :: views/layout.slim"

  l = File.read("views/layout.slim")
  l = replace_slim_call(l)
  Slim::Template.new { l }
end

Slim::Engine.default_options[:pretty] = true

puts "Creating static site..."

layout = prepare_layout

files = Dir['views/*']
files.reject! { |f| f.gsub('views/', '').match(/^(layout|_)/) }

files.each do |file|

  puts " :: #{file}"

  dir = File.basename(file, '.*')

  unless dir == 'index' || Dir.exists?(dir)
    Dir.mkdir(dir)
  end

  c = File.read(file)
  c = replace_slim_call(c)

  file_contents = Slim::Template.new { c }.render

  html = layout.render { file_contents }

  html << "\n"

  file_name = "index.html"

  unless dir == 'index'
    file_name = "#{File.basename(file, '.*')}/#{file_name}"
  end

  File.write(file_name, html)
end

# public files
# Uglifier.new(mangle: {toplevel: true}).compile(File.read('public/file.js'))


puts "Done."