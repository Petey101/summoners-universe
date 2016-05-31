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
    Time.zone = "EST"
  	@game = Game.find(params[:id])
    if @game.completed
      flash[:notice] = "That game has ended!"
      redirect_to root_path
    else
    	unsolved_battles = @game.battle_games.where(solved: false)
    	@current_battle = Battle.find(unsolved_battles.first.battle_id)
      @game_meta = {
        time_limit: @game.time_limit,
        start_time: Time.zone.now + 9.minutes + 45.seconds
      }
    end
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

  def failed_game
    @game = Game.find(params[:id])
    @game.completed = true
    @game.win = false
    @game.save
    flash[:notice] = "You lose!"
    redirect_to root_path
  end

end