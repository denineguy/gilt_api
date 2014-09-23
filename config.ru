require './app'
use Rack::Static, :urls => ['/css', '/images', '/js'], :root => 'public'

run ObsessionSinatra::App.new
