
require 'sinatra'
require 'slim'

get '/' do
  slim :index
end

get '/:file' do
  if File.exist?("#{params[:file]}.slim")
    slim params[:file].to_sym
  else
    send_file params[:file]
  end
end