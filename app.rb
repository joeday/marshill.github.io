
require 'sinatra'
require 'sinatra/assetpack'
require 'slim'
require 'sass'

Slim::Engine.default_options[:pretty] = true

  register Sinatra::AssetPack
  assets do
    js :application, %w(
      //cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js
      //maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js
      //cdnjs.cloudflare.com/ajax/libs/unveil/1.3.0/jquery.unveil.min.js
      /js/application.js
    )

    css :application, %w(
      //maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css
      /css/application.css
    )

    css_compression :sass
  end

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
