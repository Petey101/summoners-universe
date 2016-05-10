class GamesController < ApplicationController

  def create
  	@game = Game.new
  	@battles = Battle.all
  	5.times do 
  		@game.battles << @battles.shuffle.pop
  	end
  	@game.user = current_user
  	@game.picked_champion = params[:champion]
  	if @game.save
  		redirect_to game_path(@game)
  	else
  		flash[:notice] = "Stop it"
  		redirect_to root_path
  	end
  end

  def show
  	@game = Game.find(params[:id])
    @time_remaining = @game.created_at + 10.minutes
  end

end