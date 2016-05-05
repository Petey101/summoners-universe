class BattleGame < ActiveRecord::Base
	belongs_to :battle
	belongs_to :game
end