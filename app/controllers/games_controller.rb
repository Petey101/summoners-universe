class GamesController < ApplicationController

  def new
  	@game = Game.new
  	@battles = Battle.all
  	5.times do 
  		@game.battles << @battles.shuffle.pop
  	end
  	@champion = params[:champion]
  end
end