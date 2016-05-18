class GamesController < ApplicationController

  def create
  	@game = Game.new
  	@game.battles << Battle.limit(5).order("RANDOM()")
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
  	unsolved_battles = @game.battle_games.where(solved: false)
  	@current_battle = Battle.find(unsolved_battles.first.battle_id)
    @start_time = Time.now
    @game_meta = {
      time_limit: @game.time_limit
    }
  end

  def check_answer
  	@game = Game.find(params[:game_id])
  	@current_battle = Battle.find(params[:battle_id])
  	@current_round = BattleGame.find_by(battle_id: @current_battle.id, game_id: @game.id)
  	if params[:chosen_answer] == @current_battle.correct_answer
  		@current_round.solved = true
  		@current_round.save
  		if @game.battle_games.where(solved: false).empty?
  			@game.completed = true
  			@game.win = true
  			@game.save
  			flash[:notice] = "You win!"
  			redirect_to root_path
  		else
  		flash[:notice] = "Correct!"
  		redirect_to game_path(@game)
  		end
  	else
  		flash[:notice] = "Incorrect!"
  		redirect_to game_path(@game)
  	end
  end

end