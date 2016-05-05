class User < ActiveRecord::Base
  has_many :games
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  def self.get_skin_image(champ)
    url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=skins&api_key=#{LOL_KEY}"
    response = Net::HTTP.get(uri)
    all_champs = JSON.parse(response)
    "#{all_champs['data'][champ]['key']}_#{all_champs['data'][champ]['skins'].sample['num']}"
  end

end
