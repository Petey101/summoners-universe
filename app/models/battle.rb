class Battle < ActiveRecord::Base
	has_many :battle_games
	has_many :games, through: :battle_games

	def self.get_item_info(item_id)
	url = "http://ddragon.leagueoflegends.com/cdn/6.11.1/data/en_US/item.json"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    all_items = JSON.parse(response)
	"#{all_items["data"][item_id]["description"]}"
	end

end