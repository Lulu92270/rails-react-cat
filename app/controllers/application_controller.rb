class ApplicationController < ActionController::Base
  def default_url_options
    if Rails.env.production?
      {:host => "localhost:3000"}
    else  
      {}
    end
    # { host: ENV["PRODUCTION_DOMAIN"] || "localhost:3000" }
  end
end
