class WelcomeController < ApplicationController
  
  def index
    render"landing_page" if !current_user
  end
end