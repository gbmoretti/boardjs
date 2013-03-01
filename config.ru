map '/' do
  f = File.expand_path(File.dirname(__FILE__)) + '/'
  run Rack::File.new(f)
end
