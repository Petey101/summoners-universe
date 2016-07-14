class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @win_ratio = @user.get_win_ratio
    @loss_ratio = @user.get_loss_ratio
    @champions =  @user.games.pluck(:picked_champion)
  end
end