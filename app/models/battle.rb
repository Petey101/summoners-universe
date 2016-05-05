class Battle < ActiveRecord::Base
	has_many :battle_games
	has_many :games, through: :battle_games

end