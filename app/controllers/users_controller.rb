class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @win_ratio = @user.get_win_ratio
    @loss_ratio = @user.get_loss_ratio
    @games_won = @user.games_won.length
    @games_lost = @user.games_lost.length
  end
end