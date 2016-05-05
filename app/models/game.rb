class Game < ActiveRecord::Base
	has_many :battle_games
	has_many :battles, through: :battle_games
	belongs_to :user

end