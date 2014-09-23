require 'sinatra/base'
require './models/obsession.rb'
require 'pry'

module ObsessionSinatra
  class App < Sinatra::Base

    get '/' do
      erb :index
    end

  end
end