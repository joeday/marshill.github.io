
require 'sinatra'
require 'slim'

Slim::Engine.default_options[:pretty] = true

get '/' do
  slim :index
end

get '/:file' do
  if File.exist?("views/#{params[:file]}.slim")
    slim params[:file].to_sym
  else
    send_file params[:file]
  end
end