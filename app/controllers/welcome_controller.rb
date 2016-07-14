class WelcomeController < ApplicationController

  caches_action :index, expires_in: 1.minutes
  
  def index
    render"landing_page" if !current_user
  end
end