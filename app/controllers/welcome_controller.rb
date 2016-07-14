class WelcomeController < ApplicationController

  caches_action :index
  
  def index
    render"landing_page" if !current_user
  end
end