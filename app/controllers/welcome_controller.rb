class WelcomeController < ApplicationController

  def index
    redirect_to new_user_session_path if !current_user
  end
end